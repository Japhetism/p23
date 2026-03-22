const BASE_URL = import.meta.env.VITE_API_URL || "https://example.api.com";

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  if (import.meta.env.DEV) {
    await new Promise((resolve) => setTimeout(resolve, 1200));
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  // Handle common HTTP errors
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `HTTP error! status: ${response.status}`,
    );
  }

  // Safe check for "No Content" (Delete/Put often return 204)
  if (response.status === 204) return {} as T;

  return response.json();
}

export const http = {
  get: <T>(endpoint: string) => request<T>(endpoint, { method: "GET" }),

  post: <T, B>(endpoint: string, body: B) =>
    request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  put: <T, B>(endpoint: string, body: B) =>
    request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),

  patch: <T, B>(endpoint: string, body: B) =>
    request<T>(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),

  delete: <T>(endpoint: string) => request<T>(endpoint, { method: "DELETE" }),
};

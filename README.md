# P23 Africa Front-End Assessment

This project is my submission for the **Senior Front-End Developer** assessment. It is built using **React**, **Vite**, **TypeScript**, and **TailwindCSS**, and it replicates the provided Figma design as accurately as possible. The project emphasizes responsiveness, attention to detail, modularity, and maintainability.

---

## 🌐 Live Preview

You can view the deployed application here:  
**[Live Preview Link](https://your-deployment-link.com)**

> Note: This deployment is hosted on Vercel/Netlify and reflects the production-ready version of the project.

---

## 📂 Project Structure

p23_africa_assessment/
├── assets/ # Images and static assets
├── components/ # Global reusable components
├── constants/ # Application constants (e.g., Timeframe options for dropdown)
├── fixtures/ # Mock data for charts, tables, and UI testing
├── pages/ # Application screens
│ ├── view/ # Presentation layer (UI components specific to each page)
│ └── container/ # Container layer (state management, data fetching)
├── types/ # TypeScript types and interfaces
├── utils/ # Helper and utility functions
├── vite.config.ts # Vite configuration
├── package.json # Project dependencies and scripts
└── README.md # This file

---

## ⚡ Features

- Pixel-perfect replication of the Figma design
- Fully responsive layout (desktop & mobile)
- Modular folder structure for maintainability
- Dynamic charts implemented with **Recharts**
- Global and reusable components
- Typed with **TypeScript** for type safety
- Form handling with **React Hook Form**
- Icons via **Lucide React**
- Dropdown options using constants for easy updates
- Attention to UI detail: spacing, colors, typography

---

## 🧰 Tech Stack

- **React 18** – UI library
- **Vite** – Fast bundler & dev server
- **TailwindCSS** – Utility-first CSS framework
- **Recharts** – Charts and visualizations
- **TypeScript** – Type safety
- **React Hook Form** – Form state management
- **Lucide React** – Icons
- **Vitest & Testing Library** – Unit tests
- **Class Variance Authority** – For managing component variants
- **Vaul** – Component utilities (if used in state or hooks)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <your-repo-link>
cd p23_africa_assessment

```

### 2. Install Dependencies
```bash
npm install

```
### 3. Run Development Server
```bash
npm run dev

```

The app will run locally at: http://localhost:5173
Changes will hot-reload automatically.

### 4. Build for Production
```bash
npm run build

```

Creates a production-ready build in the dist folder.

### 5. Preview Production Build
```bash
npm run preview

```

Serves the production build locally for testing deployment behavior.

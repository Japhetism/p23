const SkeletonCard = ({ className }: { className?: string }) => (
  <div
    className={`bg-card animate-pulse rounded-2xl border border-border p-5 ${className}`}
  >
    <div className="flex justify-between items-center mb-6">
      <div className="h-4 w-24 bg-gray-200 rounded-md" />
      <div className="h-6 w-12 bg-gray-100 rounded-md" />
    </div>

    <div className="space-y-3">
      <div className="h-10 w-32 bg-gray-200 rounded-md" />
      <div className="h-3 w-16 bg-gray-100 rounded-md" />
    </div>

    <div className="mt-auto pt-6">
      <div className="h-20 w-full bg-gray-50 rounded-xl" />
    </div>
  </div>
);

const DashboardSkeleton = () => {
  return (
    <div className="w-full" aria-hidden="true">
      {/* First row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-5">
        <SkeletonCard className="h-[150px]" />
        <SkeletonCard className="h-[150px]" />
        <SkeletonCard className="h-[150px]" />
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SkeletonCard className="h-[300px]" />
            <SkeletonCard className="h-[300px]" />
          </div>
          {/* Weekly Tasks area */}
          <SkeletonCard className="h-[280px]" />
        </div>

        {/* Top Customers area */}
        <div className="h-full">
          <SkeletonCard className="h-full min-h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;

const SkeletonItem = () => (
  <div className="flex flex-col bg-white max-w-sm rounded">
    <div role="status" className="animate-pulse">
      <div className="bg-gray-200 w-full max-w-full h-56" />
      <div className="px-6 py-4">
        <div className="flex bg-gray-200 w-1/2 h-7" />
        <div className="flex bg-gray-200 w-full h-7 mt-2" />
        <div className="mt-6 bg-gray-200 w-full h-8" />
      </div>
    </div>
  </div>
);

export default function Skeleton() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6].map((value) => (
        <SkeletonItem key={value} />
      ))}
    </>
  );
}

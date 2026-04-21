export default function Skeleton() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="aspect-[3/4] bg-gray-200 rounded-2xl relative overflow-hidden">
        {/* Efeito Shimmer */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
}
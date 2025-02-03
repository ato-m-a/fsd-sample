import { Noise } from '@/shared/ui/Noise';

export function NotFoundPage() {
  return (
    <div className="relative h-screen w-screen bg-zinc-900">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1.5}
        patternAlpha={15}
      />
      <div className="bg-transparent flex flex-col items-center justify-center h-full -z-10">
        <h1 className="text-zinc-700 text-8xl font-bold">Oops, Page not found.</h1>
      </div>
    </div>
  );
}
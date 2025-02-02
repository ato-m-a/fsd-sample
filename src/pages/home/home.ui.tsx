import { Squares } from '@/shared/ui/Squares';

export function HomePage() {
  return (
    <div className="relative h-screen w-screen bg-[radial-gradient(circle,_rgba(37,37,37,1)_0%,_rgba(0,0,0,1)_100%)] p-40">
      <Squares
        className="absolute inset-0"
        direction="diagonal"
        borderColor="#252525"
        hoverFillColor="#252525"
        squareSize={40}
        speed={0.5}
      />
      <div className="relative bg-transparent">
        <p className="text-white">dd</p>
      </div>
    </div>
  );
}

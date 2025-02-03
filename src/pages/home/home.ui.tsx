import { Squares } from '@/shared/ui/Squares';
import { SplitText } from '@/shared/ui/SplitText';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { StarBorder } from '@/shared/ui/StarBorder';
import { SquareArrowOutUpRight } from 'lucide-react';

export function HomePage() {
  return (
    <main className="relative h-screen w-screen bg-[radial-gradient(circle,_rgba(37,37,37,1)_0%,_rgba(0,0,0,1)_100%)] p-40">
      <Squares
        className="absolute inset-0"
        direction="diagonal"
        borderColor="#252525"
        hoverFillColor="#252525"
        squareSize={40}
        speed={0.6}
      />
      <div className="relative flex flex-col justify-between h-full bg-transparent">
        <section className="flex flex-col gap-8 items-start">
          <SplitText
            text="Hello, Frontend!"
            className="text-8xl font-semibold text-center text-white"
            delay={50}
            easing={(t) => 1 - Math.pow(1 - t, 3)}
            threshold={0.2}
            rootMargin="-50px"
          />
          <SplitText
            text="This is an assignment for the frontend developer position."
            className="text-2xl font-semibold text-center text-zinc-300"
            delay={100}
            easing={(t) => 1 - Math.pow(1 - t, 3)}
            threshold={0.2}
            rootMargin="-50px"
          />
        </section>
        <section className="flex gap-8">
          <SpotlightCard
            spotlightColor="rgba(48, 120, 198, 1)"
            className="flex flex-col justify-between w-[350px] min-h-[320px]"
          >
            <div>
              <img src="/typescript_logo.webp" className="size-12 mb-3" />
              <h3 className="text-2xl font-semibold text-white mb-2">TypeScript</h3>
              <p className="text-zinc-400 text-sm">
                TypeScript is a statically typed superset of JavaScript that adds optional type safety to the language.
              </p>
            </div>
            <StarBorder
              as="a"
              role="button"
              className="cursor-pointer w-fit"
              href="https://www.typescriptlang.org/docs/"
              target="_blank"
            >
              <div className="flex items-center gap-3">
                <SquareArrowOutUpRight className="size-4" />
                Docs
              </div>
            </StarBorder>
          </SpotlightCard>
          <SpotlightCard
            spotlightColor="rgba(88, 196, 220, 1)"
            className="flex flex-col justify-between w-[350px] min-h-[300px]"
          >
            <div>
              <img src="/react_logo.webp" className="size-12 mb-3" />
              <h3 className="text-2xl font-semibold text-white mb-2">React</h3>
              <p className="text-zinc-400 text-sm">
                React is a JavaScript library for building user interfaces.
              </p>
            </div>
            <StarBorder
              as="a"
              className="cursor-pointer w-fit"
              href="https://react.dev/learn"
              target="_blank"
            >
              <div className="flex items-center gap-3">
                <SquareArrowOutUpRight className="size-4" />
                Docs
              </div>
            </StarBorder>
          </SpotlightCard>
          <SpotlightCard
            spotlightColor="rgba(47, 173, 51, 1)"
            className="flex flex-col justify-between w-[350px] min-h-[300px]"
          >
            <div>
              <img src="/playwright_logo.webp" className="size-12 mb-3 invert" />
              <h3 className="text-2xl font-semibold text-white mb-2">Playwright</h3>
              <p className="text-zinc-400 text-sm">
                Playwright is a framework for browser automation and testing that allows you to write tests in JS or TS.
              </p>
            </div>
            <StarBorder
              as="a"
              className="cursor-pointer w-fit"
              href="https://playwright.dev/docs/intro"
              target="_blank"
            >
              <div className="flex items-center gap-3">
                <SquareArrowOutUpRight className="size-4" />
                Docs
              </div>
            </StarBorder>
          </SpotlightCard>
          <SpotlightCard
            spotlightColor="rgba(255, 106, 51, 1)"
            className="flex flex-col justify-between w-[350px] min-h-[300px]"
          >
            <div>
              <img src="/msw_logo.webp" className="size-12 mb-3" />
              <h3 className="text-2xl font-semibold text-white mb-2">MSW</h3>
              <p className="text-zinc-400 text-sm">
                MSW is a library that allows you to mock APIs for your frontend tests.
              </p>
            </div>
            <StarBorder
              as="a"
              className="cursor-pointer w-fit"
              href="https://mswjs.io/docs"
              target="_blank"
            >
              <div className="flex items-center gap-3">
                <SquareArrowOutUpRight className="size-4" />
                Docs
              </div>
            </StarBorder>
          </SpotlightCard>
        </section>
      </div>
    </main>
  );
}

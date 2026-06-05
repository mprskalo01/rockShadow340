import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] flex-col items-start justify-center px-6 py-24 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-6 font-mono text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Frontend · TypeScript · React
        </p>

        <h1 className="bg-gradient-to-r from-[#f0ede8] to-[#f97316] bg-clip-text text-6xl font-black tracking-tighter text-transparent md:text-8xl lg:text-9xl">
          Mario
          <br />
          Prskalo
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
          Front-end developer with back-end integration — building fast,
          accessible products across the full stack.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button as="a" href="#contact">
            Get in touch
          </Button>
          <Button as="a" href="#projects" variant="ghost">
            View projects
          </Button>
        </div>
      </div>
    </section>
  )
}

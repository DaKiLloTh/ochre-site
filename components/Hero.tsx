import { GithubIcon } from "./GithubIcon.tsx";

export function Hero() {
  return (
    <section class="hero flex-1 py-24 px-6">
      <div class="hero-content flex-col text-center gap-6">
        <div class="badge badge-primary badge-outline badge-lg font-mono">
          early development · v0.1 in progress
        </div>

        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
          The Rust web framework for{" "}
          <span class="text-primary">Angular and Vue</span>{" "}
          developers.
        </h1>

        <p class="text-xl text-base-content/70 max-w-2xl leading-relaxed">
          Adjacent file components. Struct-based reactivity. Transparent
          server/client compilation. One CLI that hides everything.
        </p>

        <div class="flex flex-wrap gap-4 justify-center mt-4">
          <a
            href="https://github.com/DaKiLloTh/ochre"
            class="btn btn-primary btn-lg gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            Star on GitHub
          </a>
          <a
            href="https://github.com/DaKiLloTh/ochre-rfcs"
            class="btn btn-primary btn-outline btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the RFCs
          </a>
        </div>
      </div>
    </section>
  );
}

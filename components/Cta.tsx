import { GithubIcon } from "./GithubIcon.tsx";

export function Cta() {
  return (
    <section class="bg-primary text-primary-content px-6 py-20 text-center">
      <div class="max-w-2xl mx-auto flex flex-col gap-6">
        <h2 class="text-3xl font-bold">Follow along</h2>
        <p class="text-primary-content/80">
          Ochre is in active early development. Star the repo to follow
          progress. The v0.1 proof of concept, a counter that SSRs and
          hydrates in WASM, is the first milestone.
        </p>
        <div class="flex gap-4 justify-center">
          <a
            href="https://github.com/DaKiLloTh/ochre"
            class="btn btn-neutral btn-lg gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

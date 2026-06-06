import { define } from "../utils.ts";

const FEATURES = [
  {
    icon: "⬛",
    title: "Adjacent files",
    body: ".rs + .html + .css live together. No inline RSX. Your editor's HTML tooling works exactly as expected.",
  },
  {
    icon: "🏗",
    title: "Struct-based components",
    body: "State lives in struct fields, not scattered hook calls. The type signature tells you everything about a component.",
  },
  {
    icon: "⚡",
    title: "Seven reactive primitives",
    body: "Signal, Derived, Resource, Action, SignalVec, ServerSignal, LiveSignal. Each has one job. No more, no less.",
  },
  {
    icon: "🎯",
    title: "Compile-time correctness",
    body: "Template errors are compile errors. Reference a non-signal field in a template and the build fails with a clear message.",
  },
  {
    icon: "🗄",
    title: "Transparent DB compilation",
    body: "Write one db:: call. The server build hits Postgres via SQLx. The WASM build becomes an RPC stub. You write neither.",
  },
  {
    icon: "🔧",
    title: "One command",
    body: "umber dev. That's it. No cargo, no wasm-pack, no trunk. Umber orchestrates everything and gets out of your way.",
  },
];

export default define.page(function Home() {
  return (
    <div class="min-h-screen flex flex-col">
      {/* Navbar */}
      <div class="navbar bg-base-100 border-b border-base-300 px-6">
        <div class="flex-1">
          <span class="text-xl font-bold tracking-tight text-primary">
            ochre
          </span>
        </div>
        <div class="flex-none gap-4">
          <a
            href="https://github.com/DaKiLloTh/ochre"
            class="btn btn-ghost btn-sm gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Hero */}
      <section class="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 gap-6">
        <div class="badge badge-outline badge-lg text-primary border-primary font-mono">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Star on GitHub
          </a>
          <a
            href="https://github.com/DaKiLloTh/ochre-rfcs"
            class="btn btn-outline btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the RFCs
          </a>
        </div>
      </section>

      {/* Code example */}
      <section class="bg-base-200 px-6 py-20">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">
            Familiar structure. Rust performance.
          </h2>
          <div class="grid md:grid-cols-3 gap-4 font-mono text-sm">
            <div class="mockup-code bg-neutral text-neutral-content">
              <pre data-prefix=""><code class="text-accent">// counter.rs</code></pre>
              <pre data-prefix=""><code></code></pre>
              <pre data-prefix=""><code class="text-secondary">#[component(client)]</code></pre>
              <pre data-prefix=""><code>{"pub struct Counter {"}</code></pre>
              <pre data-prefix=""><code>{"  count: Signal<u32>,"}</code></pre>
              <pre data-prefix=""><code>{"}"}</code></pre>
              <pre data-prefix=""><code></code></pre>
              <pre data-prefix=""><code>{"impl Counter {"}</code></pre>
              <pre data-prefix=""><code>{"  fn increment("}</code></pre>
              <pre data-prefix=""><code>{"    &mut self"}</code></pre>
              <pre data-prefix=""><code>{"  ) {"}</code></pre>
              <pre data-prefix=""><code>{"    self.count.set("}</code></pre>
              <pre data-prefix=""><code>{"      self.count.get() + 1"}</code></pre>
              <pre data-prefix=""><code>{"    );"}</code></pre>
              <pre data-prefix=""><code>{"  }"}</code></pre>
              <pre data-prefix=""><code>{"}"}</code></pre>
            </div>
            <div class="mockup-code bg-neutral text-neutral-content">
              <pre data-prefix=""><code class="text-accent">// counter.html</code></pre>
              <pre data-prefix=""><code></code></pre>
              <pre data-prefix=""><code>{"<div class=\"counter\">"}</code></pre>
              <pre data-prefix=""><code>{"  <button"}</code></pre>
              <pre data-prefix=""><code>{"    (click)=\"increment\""}</code></pre>
              <pre data-prefix=""><code>{"  >"}</code></pre>
              <pre data-prefix=""><code>{"    +"}</code></pre>
              <pre data-prefix=""><code>{"  </button>"}</code></pre>
              <pre data-prefix=""><code>{"  <p>{{ count }}</p>"}</code></pre>
              <pre data-prefix=""><code>{"</div>"}</code></pre>
            </div>
            <div class="mockup-code bg-neutral text-neutral-content">
              <pre data-prefix=""><code class="text-accent">// counter.css</code></pre>
              <pre data-prefix=""><code></code></pre>
              <pre data-prefix=""><code>{".counter {"}</code></pre>
              <pre data-prefix=""><code>{"  display: flex;"}</code></pre>
              <pre data-prefix=""><code>{"  align-items: center;"}</code></pre>
              <pre data-prefix=""><code>{"  gap: 1rem;"}</code></pre>
              <pre data-prefix=""><code>{"}"}</code></pre>
              <pre data-prefix=""><code></code></pre>
              <pre data-prefix=""><code class="text-base-content/40">{"/* scoped automatically */"}</code></pre>
              <pre data-prefix=""><code class="text-base-content/40">{"/* by ochre-macros */"}</code></pre>
            </div>
          </div>
          <p class="text-center text-base-content/50 mt-6 text-sm">
            Three files. One component. Scoped CSS automatic. Template validated
            at compile time.
          </p>
        </div>
      </section>

      {/* Features */}
      <section class="px-6 py-20">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">
            Designed to be opinionated
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} class="card bg-base-200 border border-base-300">
                <div class="card-body gap-3">
                  <div class="text-3xl">{f.icon}</div>
                  <h3 class="card-title text-base">{f.title}</h3>
                  <p class="text-sm text-base-content/70">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="bg-primary text-primary-content px-6 py-20 text-center">
        <div class="max-w-2xl mx-auto flex flex-col gap-6">
          <h2 class="text-3xl font-bold">Follow along</h2>
          <p class="text-primary-content/80">
            Ochre is in active early development. Star the repo to follow
            progress. The v0.1 proof of concept — a counter that SSRs and
            hydrates in WASM — is the first milestone.
          </p>
          <div class="flex gap-4 justify-center">
            <a
              href="https://github.com/DaKiLloTh/ochre"
              class="btn btn-lg bg-white text-primary hover:bg-base-200 border-0 gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer footer-center bg-base-200 border-t border-base-300 text-base-content/50 py-8 px-6">
        <div class="flex flex-col gap-1 items-center">
          <p class="font-mono text-sm">
            <span class="text-primary font-bold">ochre</span> ·{" "}
            <a
              href="https://github.com/DaKiLloTh/ochre"
              class="link link-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/DaKiLloTh/ochre-rfcs"
              class="link link-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              rfcs
            </a>{" "}
            ·{" "}
            <a
              href="https://crates.io/crates/ochre-core"
              class="link link-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              crates.io
            </a>
          </p>
          <p class="text-xs">MIT OR Apache-2.0</p>
        </div>
      </footer>
    </div>
  );
});

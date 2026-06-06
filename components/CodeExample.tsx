export function CodeExample() {
  return (
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
            <pre data-prefix=""><code class="text-neutral-content/40">{"/* scoped automatically */"}</code></pre>
            <pre data-prefix=""><code class="text-neutral-content/40">{"/* by ochre-macros */"}</code></pre>
          </div>
        </div>
        <p class="text-center text-base-content/50 mt-6 text-sm">
          Three files. One component. Scoped CSS automatic. Template validated
          at compile time.
        </p>
      </div>
    </section>
  );
}

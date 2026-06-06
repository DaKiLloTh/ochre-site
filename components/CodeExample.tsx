export function CodeExample() {
  return (
    <section class="bg-base-200 px-6 py-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">
          Familiar structure. Rust performance.
        </h2>
        <div class="grid md:grid-cols-3 gap-4 font-mono text-sm">
          <div class="mockup-code">
            <pre><code class="text-accent">// counter.rs</code></pre>
            <pre><code></code></pre>
            <pre><code class="text-secondary">#[component(client)]</code></pre>
            <pre><code>{"pub struct Counter {"}</code></pre>
            <pre><code>{"  count: Signal<u32>,"}</code></pre>
            <pre><code>{"}"}</code></pre>
            <pre><code></code></pre>
            <pre><code>{"impl Counter {"}</code></pre>
            <pre><code>{"  fn increment("}</code></pre>
            <pre><code>{"    &mut self"}</code></pre>
            <pre><code>{"  ) {"}</code></pre>
            <pre><code>{"    self.count.set("}</code></pre>
            <pre><code>{"      self.count.get() + 1"}</code></pre>
            <pre><code>{"    );"}</code></pre>
            <pre><code>{"  }"}</code></pre>
            <pre><code>{"}"}</code></pre>
          </div>
          <div class="mockup-code">
            <pre><code class="text-accent">// counter.html</code></pre>
            <pre><code></code></pre>
            <pre><code>{"<div class=\"counter\">"}</code></pre>
            <pre><code>{"  <button"}</code></pre>
            <pre><code>{"    (click)=\"increment\""}</code></pre>
            <pre><code>{"  >"}</code></pre>
            <pre><code>{"    +"}</code></pre>
            <pre><code>{"  </button>"}</code></pre>
            <pre><code>{"  <p>{{ count }}</p>"}</code></pre>
            <pre><code>{"</div>"}</code></pre>
          </div>
          <div class="mockup-code">
            <pre><code class="text-accent">// counter.css</code></pre>
            <pre><code></code></pre>
            <pre><code>{".counter {"}</code></pre>
            <pre><code>{"  display: flex;"}</code></pre>
            <pre><code>{"  align-items: center;"}</code></pre>
            <pre><code>{"  gap: 1rem;"}</code></pre>
            <pre><code>{"}"}</code></pre>
            <pre><code></code></pre>
            <pre><code class="text-neutral-content/40">{"/* scoped automatically */"}</code></pre>
            <pre><code class="text-neutral-content/40">{"/* by ochre-macros */"}</code></pre>
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

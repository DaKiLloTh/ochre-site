export function Primitives() {
  return (
    <section class="px-6 py-20 bg-base-200">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-4">
          <h2 class="text-3xl font-bold">Seven reactive primitives</h2>
          <p class="text-base-content/60 mt-3 max-w-2xl mx-auto">
            Four implement{" "}
            <code class="font-mono text-primary bg-base-300 px-1.5 py-0.5 rounded">
              Readable
            </code>{" "}
            and interpolate directly in templates. Three are structural: they
            drive async data, mutations, and lists.
          </p>
        </div>

        {/* Readable primitives */}
        <div class="mt-10 mb-2">
          <div class="divider text-xs font-mono text-base-content/40 uppercase tracking-widest mb-4">
            implements Readable - use in {"{{ }}"}
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Signal */}
            <div class="card bg-neutral text-neutral-content">
              <div class="card-body gap-2 p-4">
                <div class="font-mono text-sm font-bold text-primary">
                  {"Signal<T>"}
                </div>
                <p class="text-xs text-neutral-content/60">
                  Local reactive value. The core building block.
                </p>
                <div class="font-mono text-xs leading-relaxed mt-1">
                  <div>
                    <span class="text-accent">let</span>
                    {" count = "}
                    <span class="text-primary">Signal</span>
                    {"::new(0_u32);"}
                  </div>
                  <div>{"count.set(count.get() + 1);"}</div>
                  <div class="text-neutral-content/40 mt-1">{"// {{ count }}"}</div>
                </div>
              </div>
            </div>

            {/* Derived */}
            <div class="card bg-neutral text-neutral-content">
              <div class="card-body gap-2 p-4">
                <div class="font-mono text-sm font-bold text-primary">
                  {"Derived<T>"}
                </div>
                <p class="text-xs text-neutral-content/60">
                  Computed value. Re-runs when its signals change.
                </p>
                <div class="font-mono text-xs leading-relaxed mt-1">
                  <div>
                    <span class="text-accent">let</span>
                    {" doubled = "}
                    <span class="text-primary">Derived</span>
                    {"::new("}
                  </div>
                  <div class="pl-3">{"|| count.get() * 2"}</div>
                  <div>{");"}</div>
                  <div class="text-neutral-content/40 mt-1">
                    {"// {{ doubled }}"}
                  </div>
                </div>
              </div>
            </div>

            {/* ServerSignal */}
            <div class="card bg-neutral text-neutral-content">
              <div class="card-body gap-2 p-4">
                <div class="font-mono text-sm font-bold text-secondary">
                  {"ServerSignal<T>"}
                </div>
                <p class="text-xs text-neutral-content/60">
                  Server sets it, client reads it. SSR-safe push.
                </p>
                <div class="font-mono text-xs leading-relaxed mt-1">
                  <div>
                    <span class="text-neutral-content/40">{"// server:"}</span>
                  </div>
                  <div>
                    <span class="text-accent">let</span>
                    {" n: "}
                    <span class="text-secondary">{"ServerSignal<u32>"}</span>
                  </div>
                  <div class="pl-3">{"= ctx.signal(\"online\");"}</div>
                  <div class="text-neutral-content/40 mt-1">{"// {{ n }}"}</div>
                </div>
              </div>
            </div>

            {/* LiveSignal */}
            <div class="card bg-neutral text-neutral-content">
              <div class="card-body gap-2 p-4">
                <div class="font-mono text-sm font-bold text-secondary">
                  {"LiveSignal<T>"}
                </div>
                <p class="text-xs text-neutral-content/60">
                  WebSocket stream as a readable signal.
                </p>
                <div class="font-mono text-xs leading-relaxed mt-1">
                  <div>
                    <span class="text-accent">let</span>
                    {" price:"}
                  </div>
                  <div class="pl-3">
                    <span class="text-secondary">{"LiveSignal<f64>"}</span>
                  </div>
                  <div class="pl-3">{"= LiveSignal"}</div>
                  <div class="pl-6">{"::connect(\"/ws/btc\");"}</div>
                  <div class="text-neutral-content/40 mt-1">
                    {"// {{ price }}"}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Structural primitives */}
        <div class="mt-6">
          <div class="divider text-xs font-mono text-base-content/40 uppercase tracking-widest mb-4">
            structural - async, mutations, lists
          </div>
          <div class="grid sm:grid-cols-3 gap-4">

            {/* Resource */}
            <div class="card bg-neutral text-neutral-content">
              <div class="card-body gap-2 p-4">
                <div class="font-mono text-sm font-bold text-accent">
                  {"Resource<T>"}
                </div>
                <p class="text-xs text-neutral-content/60">
                  Async data fetching. Wrap with{" "}
                  <code class="text-accent/80">{"<Suspense>"}</code>.
                </p>
                <div class="font-mono text-xs leading-relaxed mt-1">
                  <div>
                    <span class="text-accent">let</span>
                    {" user = "}
                    <span class="text-primary">Resource</span>
                    {"::new("}
                  </div>
                  <div class="pl-3">{"|| async {"}</div>
                  <div class="pl-6">
                    <span class="text-primary">api</span>
                    {"::get::<"}
                    <span class="text-secondary">User</span>
                    {">"}
                  </div>
                  <div class="pl-6">{"(\"/me\").await"}</div>
                  <div class="pl-3">{"}"}</div>
                  <div>{");"}</div>
                </div>
              </div>
            </div>

            {/* Action */}
            <div class="card bg-neutral text-neutral-content">
              <div class="card-body gap-2 p-4">
                <div class="font-mono text-sm font-bold text-accent">
                  {"Action<I, O>"}
                </div>
                <p class="text-xs text-neutral-content/60">
                  Server mutation. Triggered by events, not templates.
                </p>
                <div class="font-mono text-xs leading-relaxed mt-1">
                  <div>
                    <span class="text-accent">let</span>
                    {" save = "}
                    <span class="text-primary">Action</span>
                    {"::new("}
                  </div>
                  <div class="pl-3">{"|| async {"}</div>
                  <div class="pl-6">
                    <span class="text-primary">api</span>
                    {"::post(\"/save\","}
                  </div>
                  <div class="pl-9">{"form).await"}</div>
                  <div class="pl-3">{"}"}</div>
                  <div>{");"}</div>
                </div>
              </div>
            </div>

            {/* SignalVec */}
            <div class="card bg-neutral text-neutral-content">
              <div class="card-body gap-2 p-4">
                <div class="font-mono text-sm font-bold text-accent">
                  {"SignalVec<T>"}
                </div>
                <p class="text-xs text-neutral-content/60">
                  Reactive list. Renders with{" "}
                  <code class="text-accent/80">{"<For>"}</code>, no full
                  re-render.
                </p>
                <div class="font-mono text-xs leading-relaxed mt-1">
                  <div>
                    <span class="text-accent">let</span>
                    {" todos ="}
                  </div>
                  <div class="pl-3">
                    <span class="text-primary">SignalVec</span>
                    {"::< "}
                    <span class="text-secondary">Todo</span>
                    {" >::new();"}
                  </div>
                  <div class="mt-1">{"todos.push("}</div>
                  <div class="pl-3">
                    <span class="text-primary">Todo</span>
                    {"::new("}
                  </div>
                  <div class="pl-6">{"\"Buy milk\""}</div>
                  <div class="pl-3">{"));"}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import type { ComponentChildren } from "preact";

interface Feature {
  icon: ComponentChildren;
  title: string;
  body: string;
  snippet: ComponentChildren;
}

const FEATURES: Feature[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4473 3.02637C14.847 3.13536 15.0826 3.54766 14.9736 3.94728L10.4736 20.4473C10.3646 20.8469 9.95228 21.0825 9.55266 20.9735C9.15304 20.8645 8.91744 20.4522 9.02643 20.0526L13.5264 3.55261C13.6354 3.15299 14.0477 2.91738 14.4473 3.02637ZM16.7197 6.21961C17.0126 5.92672 17.4874 5.92672 17.7803 6.21961L23.0303 11.4696C23.3232 11.7625 23.3232 12.2374 23.0303 12.5303L17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803C16.4268 17.4874 16.4268 17.0125 16.7197 16.7196L21.4393 11.9999L16.7197 7.28027C16.4268 6.98738 16.4268 6.51251 16.7197 6.21961ZM7.28033 6.21961C7.57322 6.51251 7.57322 6.98738 7.28033 7.28027L2.56066 11.9999L7.28033 16.7196C7.57322 17.0125 7.57322 17.4874 7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803L0.96967 12.5303C0.676777 12.2374 0.676777 11.7625 0.96967 11.4696L6.21967 6.21961C6.51256 5.92672 6.98744 5.92672 7.28033 6.21961Z" />
      </svg>
    ),
    title: "Struct-based components",
    body: "State lives in struct fields, not scattered hook calls. The type signature tells you everything about a component.",
    snippet: (
      <div class="bg-neutral rounded-box p-3 font-mono text-xs text-neutral-content mt-1 leading-relaxed">
        <div><span class="text-secondary">#[component]</span></div>
        <div><span class="text-accent">pub struct</span>{" Counter {"}</div>
        <div class="pl-4"><span class="text-neutral-content">count</span>{": "}<span class="text-primary">Signal</span>{"<u32>,"}</div>
        <div class="pl-4"><span class="text-neutral-content">label</span>{": "}<span class="text-primary">String</span>{","}</div>
        <div>{"}"}</div>
      </div>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6152 1.59492C14.9164 1.76287 15.0643 2.1146 14.9736 2.44734L12.9819 9.75H20.25C20.5486 9.75 20.8188 9.92718 20.9378 10.2011C21.0569 10.475 21.0021 10.7934 20.7983 11.0117L10.2983 22.2617C10.063 22.5139 9.68601 22.573 9.38478 22.4051C9.08354 22.2371 8.93567 21.8854 9.02641 21.5527L11.018 14.25H3.74999C3.45134 14.25 3.18115 14.0728 3.06213 13.7989C2.9431 13.525 2.99792 13.2066 3.20169 12.9883L13.7017 1.73826C13.937 1.48613 14.314 1.42698 14.6152 1.59492Z" />
      </svg>
    ),
    title: "Seven reactive primitives",
    body: "Signal, Derived, Resource, Action, SignalVec, ServerSignal, LiveSignal. Each has one job. No more, no less.",
    snippet: (
      <div class="bg-neutral rounded-box p-3 font-mono text-xs mt-1 leading-loose">
        <div><span class="text-primary">Signal</span><span class="text-neutral-content/40">{"<T>"}{"         "}</span><span class="text-neutral-content/40">{"// reactive value"}</span></div>
        <div><span class="text-primary">Derived</span><span class="text-neutral-content/40">{"<T>"}{"        "}</span><span class="text-neutral-content/40">{"// computed"}</span></div>
        <div><span class="text-primary">Resource</span><span class="text-neutral-content/40">{"<T>"}{"       "}</span><span class="text-neutral-content/40">{"// async data"}</span></div>
        <div><span class="text-primary">Action</span><span class="text-neutral-content/40">{"<I,O>"}{"      "}</span><span class="text-neutral-content/40">{"// mutation"}</span></div>
        <div><span class="text-primary">SignalVec</span><span class="text-neutral-content/40">{"<T>"}{"     "}</span><span class="text-neutral-content/40">{"// reactive list"}</span></div>
        <div><span class="text-secondary">ServerSignal</span><span class="text-neutral-content/40">{"<T>"}{"  "}</span><span class="text-neutral-content/40">{"// server push"}</span></div>
        <div><span class="text-secondary">LiveSignal</span><span class="text-neutral-content/40">{"<T>"}{"    "}</span><span class="text-neutral-content/40">{"// WebSocket"}</span></div>
      </div>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5157 2.1698C12.2265 1.89587 11.7735 1.89587 11.4843 2.1698C9.46752 4.07977 6.74624 5.25011 3.75 5.25011C3.70233 5.25011 3.65473 5.24981 3.60721 5.24922C3.27984 5.24515 2.98767 5.4539 2.88541 5.76491C2.47287 7.01968 2.25 8.35963 2.25 9.75015C2.25 15.6922 6.31406 20.6831 11.8131 22.0984C11.9357 22.13 12.0643 22.13 12.1869 22.0984C17.6859 20.6831 21.75 15.6922 21.75 9.75015C21.75 8.35963 21.5271 7.01968 21.1146 5.76491C21.0123 5.4539 20.7202 5.24515 20.3928 5.24922C20.3453 5.24981 20.2977 5.25011 20.25 5.25011C17.2538 5.25011 14.5325 4.07977 12.5157 2.1698ZM15.6103 10.1859C15.8511 9.84887 15.773 9.38046 15.4359 9.1397C15.0989 8.89894 14.6305 8.97701 14.3897 9.31407L11.1543 13.8436L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L10.7197 15.5303C10.8756 15.6862 11.0921 15.7656 11.3119 15.7474C11.5316 15.7293 11.7322 15.6153 11.8603 15.4359L15.6103 10.1859Z" />
      </svg>
    ),
    title: "Compile-time correctness",
    body: "Template errors are compile errors. Reference a non-signal field in a template and the build fails with a clear message.",
    snippet: (
      <div class="bg-neutral rounded-box p-3 font-mono text-xs mt-1 leading-relaxed">
        <div class="text-error">{"error: `name` is not Readable"}</div>
        <div class="text-neutral-content/40">{" --> greeting.html:2"}</div>
        <div class="text-neutral-content/40">{"  |"}</div>
        <div><span class="text-neutral-content/40">{"2 | "}</span><span class="text-neutral-content">{"{{ name }}"}</span></div>
        <div><span class="text-neutral-content/40">{"  |    "}</span><span class="text-warning">{"^^^^ use Signal<String>"}</span></div>
      </div>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 6.375C21 9.06739 16.9706 11.25 12 11.25C7.02944 11.25 3 9.06739 3 6.375C3 3.68261 7.02944 1.5 12 1.5C16.9706 1.5 21 3.68261 21 6.375Z" />
        <path d="M12 12.75C14.6852 12.75 17.1905 12.1637 19.0784 11.1411C19.7684 10.7673 20.4248 10.3043 20.9747 9.75674C20.9915 9.87831 21 10.0011 21 10.125C21 12.8174 16.9706 15 12 15C7.02944 15 3 12.8174 3 10.125C3 10.0011 3.00853 9.8783 3.02529 9.75674C3.57523 10.3043 4.23162 10.7673 4.92161 11.1411C6.80949 12.1637 9.31481 12.75 12 12.75Z" />
        <path d="M12 16.5C14.6852 16.5 17.1905 15.9137 19.0784 14.8911C19.7684 14.5173 20.4248 14.0543 20.9747 13.5067C20.9915 13.6283 21 13.7511 21 13.875C21 16.5674 16.9706 18.75 12 18.75C7.02944 18.75 3 16.5674 3 13.875C3 13.7511 3.00853 13.6283 3.02529 13.5067C3.57523 14.0543 4.23162 14.5173 4.92161 14.8911C6.80949 15.9137 9.31481 16.5 12 16.5Z" />
        <path d="M12 20.25C14.6852 20.25 17.1905 19.6637 19.0784 18.6411C19.7684 18.2673 20.4248 17.8043 20.9747 17.2567C20.9915 17.3783 21 17.5011 21 17.625C21 20.3174 16.9706 22.5 12 22.5C7.02944 22.5 3 20.3174 3 17.625C3 17.5011 3.00853 17.3783 3.02529 17.2567C3.57523 17.8043 4.23162 18.2673 4.92161 18.6411C6.80949 19.6637 9.31481 20.25 12 20.25Z" />
      </svg>
    ),
    title: "Transparent DB compilation",
    body: "Write one db:: call. The server build hits Postgres via SQLx. The WASM build becomes an RPC stub. You write neither.",
    snippet: (
      <div class="bg-neutral rounded-box p-3 font-mono text-xs mt-1 leading-relaxed">
        <div class="text-neutral-content/40">{"// one call, two targets:"}</div>
        <div>
          <span class="text-accent">{"let "}</span>
          <span class="text-neutral-content">{"users"}</span>
          <span class="text-neutral-content/60">{" = "}</span>
          <span class="text-primary">{"db::all"}</span>
          <span class="text-neutral-content/60">{"::< "}</span>
          <span class="text-secondary">{"User"}</span>
          <span class="text-neutral-content/60">{" >()"}</span>
        </div>
        <div class="pl-4 text-neutral-content/60">{".await?;"}</div>
        <div class="mt-2 text-neutral-content/40">{"// server → SQLx + Postgres"}</div>
        <div class="text-neutral-content/40">{"// wasm   → generated RPC stub"}</div>
      </div>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 4.34315 3.59315 3 5.25 3H18.75C20.4069 3 21.75 4.34315 21.75 6V18C21.75 19.6569 20.4069 21 18.75 21H5.25C3.59315 21 2.25 19.6569 2.25 18V6ZM6.21967 6.96967C6.51256 6.67678 6.98744 6.67678 7.28033 6.96967L9.53033 9.21967C9.82322 9.51256 9.82322 9.98744 9.53033 10.2803L7.28033 12.5303C6.98744 12.8232 6.51256 12.8232 6.21967 12.5303C5.92678 12.2374 5.92678 11.7626 6.21967 11.4697L7.93934 9.75L6.21967 8.03033C5.92678 7.73744 5.92678 7.26256 6.21967 6.96967ZM10.5 11.25C10.0858 11.25 9.75 11.5858 9.75 12C9.75 12.4142 10.0858 12.75 10.5 12.75H13.5C13.9142 12.75 14.25 12.4142 14.25 12C14.25 11.5858 13.9142 11.25 13.5 11.25H10.5Z" />
      </svg>
    ),
    title: "One command",
    body: "umber dev. That's it. No cargo, no wasm-pack, no trunk. Umber orchestrates everything and gets out of your way.",
    snippet: (
      <div class="bg-neutral rounded-box p-3 font-mono text-xs mt-1 leading-relaxed">
        <div><span class="text-neutral-content/40">{"$ "}</span><span class="text-accent">{"umber dev"}</span></div>
        <div class="mt-1">
          <span class="text-success">{"  ✓ "}</span>
          <span class="text-neutral-content">{"server  "}</span>
          <span class="text-neutral-content/40">{"127ms"}</span>
        </div>
        <div>
          <span class="text-success">{"  ✓ "}</span>
          <span class="text-neutral-content">{"wasm    "}</span>
          <span class="text-neutral-content/40">{"2.1s"}</span>
        </div>
        <div class="mt-1">
          <span class="text-neutral-content/40">{"  → "}</span>
          <span class="text-secondary">{"localhost:3000"}</span>
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section class="px-6 py-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">
          Designed to be opinionated
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Adjacent files — file browser card */}
          <div class="card bg-base-200 border border-base-300 sm:col-span-2 lg:col-span-1">
            <div class="card-body gap-3">
              <div class="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.5 21C21.1569 21 22.5 19.6569 22.5 18V13.5C22.5 11.8431 21.1569 10.5 19.5 10.5H4.5C2.84315 10.5 1.5 11.8431 1.5 13.5V18C1.5 19.6569 2.84315 21 4.5 21H19.5Z" />
                  <path d="M1.5 10.1458V6C1.5 4.34315 2.84315 3 4.5 3H9.87868C10.4754 3 11.0477 3.23705 11.4697 3.65901L13.591 5.78033C13.7316 5.92098 13.9224 6 14.1213 6H19.5C21.1569 6 22.5 7.34315 22.5 9V10.1458C21.7039 9.43328 20.6525 9 19.5 9H4.5C3.34747 9 2.29613 9.43328 1.5 10.1458Z" />
                </svg>
              </div>
              <h3 class="card-title text-base">Adjacent files</h3>
              <p class="text-sm text-base-content/70">
                No import paths. No boilerplate. Your editor's HTML tooling works exactly as expected.
              </p>
              <div class="bg-neutral rounded-box p-3 font-mono text-xs text-neutral-content mt-1 leading-relaxed">
                <div class="text-neutral-content/40 mb-1">src/</div>
                <div class="pl-3 text-neutral-content/40 mb-1">counter/</div>
                <div class="pl-6 flex items-center gap-2">
                  <span class="text-neutral-content/30">├─</span>
                  <span class="text-neutral-content">counter</span><span class="text-accent">.rs</span>
                </div>
                <div class="pl-6 flex items-center gap-2">
                  <span class="text-neutral-content/30">├─</span>
                  <span class="text-neutral-content">counter</span><span class="text-secondary">.html</span>
                </div>
                <div class="pl-6 flex items-center gap-2">
                  <span class="text-neutral-content/30">└─</span>
                  <span class="text-neutral-content">counter</span><span class="text-primary">.css</span>
                </div>
              </div>
            </div>
          </div>

          {FEATURES.map((f) => (
            <div key={f.title} class="card bg-base-200 border border-base-300">
              <div class="card-body gap-3">
                <div class="text-primary">{f.icon}</div>
                <h3 class="card-title text-base">{f.title}</h3>
                <p class="text-sm text-base-content/70">{f.body}</p>
                {f.snippet}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

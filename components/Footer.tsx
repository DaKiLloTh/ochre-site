export function Footer() {
  return (
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
  );
}

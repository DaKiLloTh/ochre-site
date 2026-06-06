import { GithubIcon } from "./GithubIcon.tsx";

export function Navbar() {
  return (
    <div class="navbar bg-base-100 border-b border-base-300 px-6">
      <div class="navbar-start">
        <span class="text-xl font-bold tracking-tight text-primary">
          ochre
        </span>
      </div>
      <div class="navbar-end">
        <a
          href="https://github.com/DaKiLloTh/ochre"
          class="btn btn-ghost btn-sm gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={18} />
          GitHub
        </a>
      </div>
    </div>
  );
}

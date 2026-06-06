# ochre-site

Marketing site for the [Ochre](https://github.com/DaKiLloTh/ochre) Rust web
framework.

Built with [Deno Fresh 2](https://fresh.deno.dev),
[DaisyUI 5](https://daisyui.com), and [Tailwind CSS 4](https://tailwindcss.com).

## Stack

- **Framework** — Deno Fresh 2 (SSR, file-system routing)
- **Styling** — DaisyUI 5 + Tailwind CSS 4, custom ochre/umber theme via
  `@plugin "daisyui/theme"`
- **Language** — TypeScript + Preact (JSX precompile mode)
- **Deploy** — Deno Deploy (via GitHub Actions)

## Development

Requires [Deno](https://docs.deno.com/runtime/getting_started/installation).

```sh
# install dependencies
deno install

# start dev server (Vite HMR)
deno task dev
```

## Production build

```sh
deno task build
deno task start
```

Serves on `http://localhost:8000`.

## Project structure

```
routes/
  _app.tsx        # HTML shell, DaisyUI theme, meta tags
  index.tsx       # Page composition

components/
  Navbar.tsx
  Hero.tsx
  CodeExample.tsx
  Primitives.tsx  # Seven reactive primitives section
  Features.tsx    # Feature cards with code snippets
  Cta.tsx
  Footer.tsx
  GithubIcon.tsx  # Shared icon component

assets/
  styles.css      # Tailwind + DaisyUI config and ochre theme tokens

.github/
  workflows/
    ci.yml        # Format, lint, type check on PRs
    deploy.yml    # Build and deploy to Deno Deploy on merge to main
```

## Branching

GitHub Flow — all work on feature branches, PRs into `main`. Direct pushes to
`main` are blocked.

## Related

- [ochre](https://github.com/DaKiLloTh/ochre) — the framework
- [ochre-rfcs](https://github.com/DaKiLloTh/ochre-rfcs) — design RFCs

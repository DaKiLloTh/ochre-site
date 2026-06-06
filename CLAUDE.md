# ochre-site

Marketing site for the Ochre Rust web framework.

## Stack

- **Deno Fresh 2** — SSR, file-system routing, `routes/`, no islands (static site)
- **DaisyUI 5** — component classes, semantic colour modifiers
- **Tailwind CSS 4** — `@import "tailwindcss"` + `@plugin "daisyui"` in `assets/styles.css`
- **Preact** — JSX precompile mode (`jsxImportSource: "preact"` in `deno.json`)

## Commands

```sh
deno install          # install deps (creates node_modules symlinks)
deno task dev         # Vite dev server with HMR
deno task build       # production build → _fresh/
deno task start       # serve production build on :8000
```

Always use `deno task build && deno task start` to verify visual changes.
The dev server has CSS FOUC — production build is the source of truth.

## Project structure

```
routes/
  _app.tsx        # HTML shell, theme, meta
  index.tsx       # thin composition — imports and renders all sections

components/       # one file per page section
  Navbar.tsx
  Hero.tsx
  CodeExample.tsx
  Primitives.tsx
  Features.tsx
  Cta.tsx
  Footer.tsx
  GithubIcon.tsx  # shared icon

assets/
  styles.css      # Tailwind + DaisyUI config, ochre theme tokens
```

## Colour rules

Use DaisyUI semantic colour modifiers. Never write raw colour utilities.

Good:
```
badge badge-primary badge-outline
btn btn-primary btn-outline
btn btn-neutral
text-base-content/70
text-neutral-content/40
```

Bad:
```
text-primary border-primary        (use badge-primary instead)
btn btn-outline                    (missing colour modifier)
bg-white text-primary              (hardcoded, not semantic)
bg-gray-800                        (not a DaisyUI token)
```

Text on a dark surface (`bg-neutral`) must use `text-neutral-content` (or `/opacity`), not `text-base-content`.

## Copy rules

- No em-dashes. Use a hyphen or restructure the sentence.

## Branching

GitHub Flow — branch → PR → merge into `main`. Direct pushes to `main` are blocked.

## CSS resolution (why two `deno i` installs are needed)

Deno puts npm packages under `.deno/` not top-level `node_modules`. Tailwind's
`@import "tailwindcss"` and `@plugin "daisyui"` resolve from `node_modules`.
Both packages need explicit top-level installs:

```sh
deno i -D npm:tailwindcss@^4
deno i -D npm:daisyui@latest
```

Without these, DaisyUI component classes are absent from the output bundle.

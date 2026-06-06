import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html lang="en" data-theme="ochre">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ochre: The Rust web framework</title>
        <meta
          name="description"
          content="Adjacent file components. Struct-based reactivity. One CLI. Ochre is a full-stack Rust web framework built for developers coming from Angular and Vue."
        />
        <meta property="og:title" content="Ochre: The Rust web framework" />
        <meta
          property="og:description"
          content="Adjacent file components. Struct-based reactivity. One CLI."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body class="bg-base-100 text-base-content">
        <Component />
      </body>
    </html>
  );
});

# Defne Artuner portfolio

```sh
npm install
npm run dev
```

Build the static site locally with:

```sh
npm run build
```

The generated site is written to `build/`. Changes to the portfolio source are
published to the root of the public `defneartuner/defneartuner.github.io`
repository by `.github/workflows/publish.yml`. The workflow keeps the existing
`CNAME` so `defneartuner.com` continues to work. GitHub Pages hosts the static
portfolio pages; server-only demo/auth routes are not part of the site.

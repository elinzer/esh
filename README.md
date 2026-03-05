# esh

## Development

Run both in parallel:

```bash
npm run dev                  # Tailwind watch — rebuilds style.css on save
bundle exec jekyll serve     # Jekyll local server at localhost:4000
```

## Deployment

Before committing/pushing:

```bash
npm run build                # Minifies style.css for production
```

Then commit `assets/css/style.css` along with your changes.

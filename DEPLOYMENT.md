# Production portfolio

The approved English portfolio is in `live-site/`. `npm run build` copies it to `dist/` for the existing Cloudflare Pages production project `portfolirian` and domain `riandevince.com`.

Previous React sources are preserved. `npm run build:legacy` builds them. To roll back the public site, use the previous successful deployment in Cloudflare Pages.

The Miles model keeps its original rig and texture pixels. Textures are separate files to keep every asset below the hosting size limit. Model attribution is in the footer.

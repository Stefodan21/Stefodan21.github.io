Stefaan Davis — Personal Portfolio (static site)

This repository contains the static source for the Stefaan Davis personal portfolio site hosted at https://stefodan21.github.io/.

Overview

- Purpose: Static personal portfolio and resume website showcasing projects, certifications, and contact information.
- Tech: Plain HTML/CSS/JS (no build tool required). Assets are under `assets/`.

Quick start (serve locally)

You can preview the site locally with any static file server. Examples:

- With Python 3 (works on macOS/Linux/Windows Subsystem for Linux):

```bash
cd Stefodan21.github.io
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

- With Node (http-server):

```bash
npm install -g http-server
cd Stefodan21.github.io
http-server -c-1
# Open the printed URL in your browser
```

Editing content

- The main page is `index.html` and styles are in `styles.css`.
- Scripts are in `script.js`. Static site data (images, badges) live in `assets/`.
- To update text, edit `index.html` directly, then preview locally.

Images and badges

- Keep high-resolution images in `assets/images/` and reference them from `index.html`.
- If adding certificates/badges, add optimized PNG/WebP files to `assets/images/` and reference in the markup.

Deployment (GitHub Pages)

This repository is already arranged for GitHub Pages deployment (user/organization site). To update the live site:

1. Commit changes to this repo.
2. Push to the `site` branch (or the branch configured in your repo settings). Example:

```bash
git add -A
git commit -m "Update site"
git push origin site
```

(If your Pages settings use `main` or `gh-pages`, push to the configured branch instead.)

Continuous deployment

- There is a GitHub Actions workflow in `.github/workflows/deploy.yml` that can publish the site on push — check that file for the exact branch and action used.

Best practices

- Optimize images for web (WebP preferred) and keep file sizes small for faster page loads.
- Keep social links and metadata (Open Graph / Twitter cards) up to date in `index.html` for improved sharing.
- When adding new content, double-check accessibility: alt text for images, ARIA attributes where needed, and adequate color contrast.

Troubleshooting

- If something looks broken after editing, clear your browser cache or open the page in an incognito window.
- For layout issues, inspect CSS in `styles.css` and check for missing asset paths.

License & credits

- Replace this section with your preferred license if you want to make the site code reusable.

Contact

- Maintained by Stefaan Davis — update contact info in `index.html`.

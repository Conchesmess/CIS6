# CIS6 Curriculum Website

This repository is a static website scaffold for the CIS6 year-long high school curriculum.
It is designed to be hosted with GitHub Pages.

## Site Map

- `index.html` - Home page and quick links
- `year-outline.html` - Public year map
- `syllabus.html` - Public basic syllabus
- `units/` - One page per term unit
- `planning/` - Internal planning pages (resources and roadmap)
- `assets/css/styles.css` - Shared styling
- `assets/js/site.js` - Lightweight reveal animation

## Publish On GitHub Pages

1. Push this repository to GitHub.
2. Open repository `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
4. Select branch `main` and folder `/ (root)`.
5. Save, then wait for GitHub Pages to build.

## Recommended Workflow

1. Fill `year-outline.html` and `syllabus.html` first.
2. Migrate your existing Term 1 curriculum into `units/term1-lego-blocks.html`.
3. Use `planning/resources.html` to evaluate sources for Terms 2-3.
4. Finalize `units/term4-capstone.html` from your existing capstone docs.

## Local Preview

Open `index.html` in a browser directly, or use any static server.

# DVN Security Architecture — GitHub Pages

Static marketing site extracted from `src/app/(marketing)` in [dvn-consulting-os](https://github.com/dvnstudiolab/dvn-consulting-os).

## Files

```
index.html              ← Home page (required for GitHub Pages)
style.css               ← All styles
script.js               ← Nav, scorecard, booking form
assets/dvn-logo.png     ← Logo
about.html
book.html
pricing.html
scorecard.html
security-snapshot.html
services.html
.nojekyll               ← Tells GitHub Pages not to use Jekyll
```

## Deploy to GitHub Pages

### 1. Create the repo

1. Go to **GitHub → New repository**
2. Name it `dvn-consulting` (or `dvn-consultanting`)
3. Set visibility to **Public** (required for free GitHub Pages)
4. Do **not** add a README, .gitignore, or license (we already have files)

### 2. Push this folder

```bash
cd dvn-consulting-pages
git remote remove origin   # if the old dvn-consulting-os remote is still set
git remote add origin git@github.com:YOUR_USERNAME/dvn-consulting.git
git add index.html style.css script.js assets/ *.html .nojekyll README.md
git commit -m "Add static marketing site for GitHub Pages"
git push -u origin main
```

### 3. Enable GitHub Pages

1. Repo → **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `/ (root)`
4. Click **Save**

Your site will be live at:

```
https://YOUR_USERNAME.github.io/dvn-consulting/
```

(GitHub may take 1–2 minutes to build on first deploy.)

## Common mistakes that stop it from loading

| Mistake | Fix |
|---------|-----|
| **No `index.html` at the root** | GitHub Pages needs `index.html` in the branch/folder you deploy from |
| **Absolute paths like `/services.html`** | Use relative paths: `services.html` or `./services.html`. Absolute paths break on project pages (`username.github.io/repo-name/`) |
| **Wrong branch or folder in Settings → Pages** | Match the branch you pushed (`main`) and folder (`/root`) |
| **Private repo on free plan** | GitHub Pages requires a public repo on the free tier |
| **Repo named `username.github.io` vs project repo** | User site: `username.github.io` serves from root. Project site: `username.github.io/repo-name/` — all links must be relative |
| **Case sensitivity** | `Services.html` ≠ `services.html` on GitHub's Linux servers |
| **Jekyll ignoring folders** | Add `.nojekyll` at the root (already included) |
| **Missing assets** | Keep `assets/dvn-logo.png` committed; broken image paths won't stop the page but look wrong |
| **Custom domain DNS not propagated** | If using a custom domain, wait for DNS and set it under Settings → Pages → Custom domain |

## Forms on static hosting

The booking form and scorecard use `mailto:` to send submissions. For production, wire them to [Formspree](https://formspree.io), [Netlify Forms](https://www.netlify.com/products/forms/), or keep the full Next.js app for API routes.

Update the email in `script.js`:

```js
const SITE = {
  email: "hello@dvnsecurity.com",
};
```

## Source reference

The original Next.js marketing routes live in `_source/` (cloned from dvn-consulting-os). This static site covers the core client-facing pages; library, resources, projects, and VSL can be added as separate HTML pages later.

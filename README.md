# Michael Moyo UI/UX Portfolio

Converted from your source presentation into a responsive web portfolio.

## Run locally

```bash
cd /Users/youfoundmikey/Desktop/portfolio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy to Vercel (free)

### Option 1: Vercel dashboard (recommended)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project**.
4. Import your GitHub repo.
5. Keep defaults (no framework preset needed for this static site).
6. Click **Deploy**.

### Option 2: Vercel CLI

```bash
cd /Users/youfoundmikey/Desktop/portfolio
npm i -g vercel
vercel
```

Answer prompts:
- Set up and deploy: `Y`
- Scope: your account
- Link to existing project: `N`
- Project name: choose one
- Directory: `.`

Then for production:

```bash
vercel --prod
```

## Customize content

- Main content and sections: `/Users/youfoundmikey/Desktop/portfolio/index.html`
- Visual styling: `/Users/youfoundmikey/Desktop/portfolio/styles.css`
- Motion behavior: `/Users/youfoundmikey/Desktop/portfolio/script.js`
- Extracted presentation slides: `/Users/youfoundmikey/Desktop/portfolio/assets/slides`

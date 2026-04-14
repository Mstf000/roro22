# For Roro — story site

Private passphrase gate, four illustrated chapters, outro with optional photo (`public/for-roro.jpg`). Local dev default passphrase: `roro-and-mstf` (override with `.env` — see `.env.example`).

## Scripts

- `npm run dev` — local dev
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the build

## Deploy (free)

Build embeds `VITE_STORY_PASSPHRASE` from your machine at build time. Before deploying, create `.env` with `VITE_STORY_PASSPHRASE=your-secret-phrase`, then run `npm run build`. (If you skip this, the site uses the dev default from [`src/config.ts`](src/config.ts).)

### Vercel (recommended)

1. Push this folder to [GitHub](https://github.com/new) (or GitLab / Bitbucket).
2. Go to [vercel.com](https://vercel.com), sign up free, **Add New → Project**, import the repo.
3. Framework: **Vite** (auto). Build: `npm run build`, output: `dist`.
4. **Environment Variables**: add `VITE_STORY_PASSPHRASE` = your phrase → Deploy.

Or from the terminal (after `npm i -g vercel` or `npx vercel`): run `vercel` in the project folder and link the project; add the env var in the Vercel dashboard, then **Redeploy**.

### Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** from Git.
2. Build command `npm run build`, publish directory `dist` (already in [`netlify.toml`](netlify.toml)).
3. **Site configuration → Environment variables**: add `VITE_STORY_PASSPHRASE`, then trigger a new deploy.

**No Git:** run `npm run build`, then open [Netlify Drop](https://app.netlify.com/drop) and drag the **`dist`** folder onto the page. (Passphrase will be whatever you had when you built locally.)

### Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → Connect Git.
2. Build command `npm run build`, build output directory `dist`.
3. **Settings → Environment variables**: add `VITE_STORY_PASSPHRASE` → save and redeploy.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

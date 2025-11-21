# Muslim Open Source Foundation Website

> **Status:** In Formation (Washington State)

website - https://www.muslimopensource.org/

## Development

Built with **Vite**, **React**, **TailwindCSS**, and **React Router v6**.

### Setup

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

Output is in the `dist/` directory.

### Deployment

The site uses React Router's `BrowserRouter`. A `404.html` file is automatically generated during build to support GitHub Pages SPA routing.

## Repository Evaluation Framework

The site includes a Repository Evaluation section that assesses Islamic open-source repositories.

**Pages:**
- `/frameworks/repository-evaluation` - Framework documentation
- `/evaluations` - Evaluations index with search/sort
- `/evaluations/:slug` - Individual evaluation details

**Adding a new evaluation:**

1. Create a JSON file in `src/data/evaluations/` following the structure of `qafiyah.json`
2. Import and export it in `src/data/evaluations/index.ts`
3. The evaluation will appear automatically

See `src/data/evaluations/qafiyah.json` for a complete example of the data structure.

---

© 2025 Muslim Open Source Foundation. All rights reserved.

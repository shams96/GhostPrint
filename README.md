# Ghostprint – Your Data Has a Trail. Now You Can See It.

Ghostprint is a privacy-first control center that **discovers, visualises and helps you erase the personal data companies hold about you**.  
Scan your inbox, upload privacy policies, monitor data-breach exposure and fire off one-tap GDPR/CCPA deletion requests—all from a single dashboard that **never ships your data to our servers**.

---

## ✨ Key Features

| Category | Feature |
|-----------|---------|
| 📊 Privacy Score | Conic-gradient gauge that quantifies your overall privacy risk. |
| 🔍 Inbox Scanner | OAuth-based Gmail / Outlook ingestion that detects companies mentioning you. |
| 📄 Policy Analysis | Drag-and-drop any privacy policy PDF and receive an AI-powered summary of risks. |
| 🚨 Breach Monitor | Live HaveIBeenPwned integration and automated alerts. |
| 🗑️ One-Tap Deletions | Generate and send GDPR/CCPA e-mails, track responses, remind offenders. |
| 🌓 Dark Mode | Accessible light & dark themes with Next.js 15 App Router. |
| 🛡 Client-Side Only | All analysis happens in your browser; we never persist raw personal data. |

---

## 🛠 Technology Stack

| Layer | Tech |
|-------|------|
| Framework | **Next.js 15** (App Router, React Server Components) |
| Language & Tooling | **TypeScript 5**, ESLint, Prettier |
| UI / Styling | **Tailwind CSS 3.4** + tailwindcss-animate, class-variance-authority |
| State / Hooks | React 18 & next-themes for theming |
| Charts | Conic-gradient CSS + optional Recharts integration |
| Auth (optional) | NextAuth.js or Supabase (not included in OSS template) |

---

## 📦 Installation & Setup

> Requires **Node 18+** and **npm 10+** (or Yarn v4 / pnpm).

```bash
# 1. Clone
git clone https://github.com/<your-org>/ghostprint.git
cd ghostprint

# 2. Install dependencies
npm install          # or: pnpm install / yarn install

# 3. Start dev server
npm run dev          # http://localhost:3000

# 4. Lint & type-check
npm run validate
```

Environment variables live in `.env.local`—the project runs without them, but integrations (email, OpenAI, HIBP, etc.) will require:

```
NEXT_PUBLIC_APP_URL= http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
OPENAI_API_KEY=
HIBP_API_KEY=
```

---

## 🚀 Development Workflow

| Command | Purpose |
|---------|---------|
| `npm run dev` | Next.js dev server with hot reload |
| `npm run build` | Production build (`.next/`) |
| `npm run start` | Run built output locally |
| `npm run lint` | ESLint analysis |
| `npm run check-types` | `tsc --noEmit` strict checking |
| `npm run format` | Prettier write |

CI pipelines should execute `npm run validate` to guarantee lint + types pass before deployment.

---

## 🌐 Deployment

Ghostprint is **static-friendly** and works on all major hosts:

1. **Vercel** – one-click import, set env vars, done.  
2. **Netlify** – build command `npm run build`, publish folder `.next`.  
3. **Docker** – `docker build -t ghostprint . && docker run -p 3000:3000 ghostprint`.

_Important_: When targeting serverless hosts, ensure secrets are provided as environment variables and not committed to the repository.

---

## 📁 Project Structure

```
ghostprint/
├─ src/
│  ├─ app/               # Next.js App Router
│  │  ├─ layout.tsx      # Root layout (fonts, theme, SEO)
│  │  ├─ page.tsx        # Dashboard landing page
│  │  └─ globals.css     # Tailwind layers & design-tokens
│  ├─ components/        # Reusable UI primitives
│  ├─ lib/               # Utility functions (risk calc, GDPR templates)
│  └─ types/             # Custom TS declarations
├─ public/               # Static assets
├─ .github/              # Workflows & issue templates
├─ .eslintrc.json        # Lint rules
├─ tailwind.config.js    # Design system & animations
├─ tsconfig.json         # TS compiler options
└─ next.config.js        # Next.js production tweaks
```

---

## 🤝 Contributing

1. **Fork** the repo and create your branch (`git checkout -b feature/my-awesome-feature`)  
2. **Commit** your changes with clear messages (`git commit -am 'feat: add X'`)  
3. **Push** to the branch (`git push origin feature/my-awesome-feature`)  
4. **Open a Pull Request** and fill out the PR template

All contributions should follow the `eslint --fix` and `npm run check-types` guidelines.  
Please read `CONTRIBUTING.md` (coming soon) for detailed code-style, commit convention and release process.

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

### 🧭 Roadmap

- ✅ Minimal working dashboard (this repo)  
- 🔜 Gmail & Outlook OAuth + inbox parsing  
- 🔜 Privacy policy LLM analysis (OpenAI function-calling)  
- 🔜 Automated GDPR/CCPA workflow engine  
- 🔜 Supabase row-level-security backend  
- 🔜 Mobile PWA support  

Stay tuned, star the repo ⭐ and join the [community discussions](https://github.com/<your-org>/ghostprint/discussions)!


# micro_frontends

Personal **monorepo lab**: a Vite host plus a shared React UI package. **Not production. Not module federation.**

## What this proves

| Proof | Honest bound |
|-------|----------------|
| **Host + package split** | `apps/web3` (Vite + React 19) consumes workspace `@my-org/ui` |
| **Not federation** | `.gitmodules` is exploration only; current Vite config is **not** Module Federation |
| **Successor** | [nx-playground](https://github.com/tessOu56/nx-playground) (multi-app) and [AI Search Portal](https://github.com/tessOu56/ai-search-portal) |

## Pieces

| Piece | Role |
|-------|------|
| **`apps/web3`** | Vite + React 19 **host** |
| **`packages/ui`** | Shared **`@my-org/ui`** — Vite library build (`dist/`) via `workspace:*` |
| **Turbo + pnpm** | `turbo run dev/build`; GitHub Actions runs install, lint, and build |

## Quick start

```bash
pnpm install
pnpm build
pnpm dev
```

`pnpm build` compiles `@my-org/ui` to `packages/ui/dist`, then the host. `pnpm dev` rebuilds the library first, then watches the UI package and the Vite host together.

Open the Vite app under `apps/web3` (default port **5173**). Local lab only — no live deploy.

## Scripts

| Command | What it does |
|---------|----------------|
| `pnpm lint` | ESLint over the workspace |
| `pnpm build` | Turbo build (`@my-org/ui` then `web3`) |
| `pnpm dev` | Turbo dev (library watch + host) |

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
| **`packages/ui`** | Shared **`@my-org/ui`** (workspace protocol) |
| **Turbo + pnpm** | `turbo run dev/build/test` |

## Quick start

```bash
pnpm install
pnpm dev
```

Open the Vite app under `apps/web3` (default port **5173**). Local lab only — no live deploy.

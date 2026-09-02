# micro_frontends

Personal **monorepo lab** (2025) for exploring how a host app and a shared UI package split frontend boundaries — a stepping stone before larger Nx / OpenAPI work in [nx-playground](https://github.com/tessOu56/nx-playground).

**Status:** Early reference implementation — not a production product or deployed demo.

## What this repo is

| Piece | Role |
|-------|------|
| **`apps/web3`** | Vite + React 19 **host** app |
| **`packages/ui`** | Shared **`@my-org/ui`** React package (e.g. `Button`) consumed via workspace protocol |
| **Turbo + pnpm** | Monorepo orchestration (`turbo run dev/build/test`) |
| **`.gitmodules`** | Submodule hook for an external SSO UI remote — **exploration only**; not wired as full module federation in the current Vite config |

The host renders a minimal shell and imports components from the shared package — the pattern you'd extend toward **micro-frontends** or ** independently deployable UI remotes**.

## What this is not

- Not module federation / Vite federation in production shape
- Not a live deployment (local dev only)
- Superseded for portfolio purposes by **[ai-search-portal](https://github.com/tessOu56/ai-search-portal)** (product) and **[nx-playground](https://github.com/tessOu56/nx-playground)** (multi-app + OpenAPI)

## Quick start

```bash
pnpm install
pnpm dev
```

Runs the Turbo pipeline; open the Vite app under `apps/web3` (default port **5173**).

## Why keep it pinned

Shows early **frontend architecture** thinking: shared packages, host/remote boundaries, monorepo tooling — before the larger event-stack and data-product demos.

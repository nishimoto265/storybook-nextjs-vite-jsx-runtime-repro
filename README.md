# Storybook nextjs-vite: Vitest addon fails on a cold cache when svgr emits `react/jsx-runtime`

Minimal reproduction with `@storybook/nextjs-vite` 10.6.1, `@storybook/addon-vitest` 10.6.1 and `vite-plugin-svgr`.

## Steps

```bash
npm install
npx playwright install chromium

# Run with an empty Vite cache (same as CI). Fails.
npm run test-storybook:cold

# Run again with the cache from the previous run. Passes.
npm run test-storybook
```

The cold run logs:

```
[vite] (client) dependency optimized: react/jsx-runtime
[vite] (client) optimized dependencies changed. reloading
[vitest] Vite unexpectedly reloaded a test. This may cause tests to fail, lead to flaky behaviour or duplicated test runs.
Invalid hook call. Hooks can only be called inside of the body of a function component.
```

`src/Counter.tsx` renders `src/icon.svg` through `vite-plugin-svgr`. Removing the SVG import, adding `@storybook/addon-docs`, or adding `optimizeDeps: { include: ['react/jsx-runtime'] }` to `vitest.storybook.config.ts` makes the cold run pass.

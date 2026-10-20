// @vitest-environment node
import { createRequire } from "node:module";
import path from "node:path";
import { expect, test } from "vitest";

test("host and package resolve @my-org/ui to the built ESM", () => {
  const self = createRequire(import.meta.url);
  expect(self.resolve("@my-org/ui")).toMatch(/[/\\]dist[/\\]index\.js$/);

  const host = createRequire(
    path.join(import.meta.dirname, "../../../apps/web3/package.json"),
  );
  expect(host.resolve("@my-org/ui")).toMatch(
    /packages[/\\]ui[/\\]dist[/\\]index\.js$/,
  );
});

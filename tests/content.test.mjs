import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const appSource = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
const htmlSource = await readFile(new URL("../index.html", import.meta.url), "utf8");

test("three design routes are registered", () => {
  for (const route of ["/deep-infrastructure", "/cloud-editorial", "/engineering-delivery"]) {
    assert.match(appSource, new RegExp(route));
  }
});

test("company and product identity are present", () => {
  assert.match(appSource, /彬剑云信息技术有限公司/);
  assert.match(appSource, /BinBot Foundation/);
  assert.match(htmlSource, /lang="zh-CN"/);
});

test("consultation demo explicitly stays local", () => {
  assert.match(appSource, /不会上传或持久化/);
  assert.doesNotMatch(appSource, /fetch\(|axios\.|XMLHttpRequest/);
});

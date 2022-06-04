import { describe, expect, it } from "vitest";
import config from "../src/vue/index";

describe("Vue config", () => {
  it("Exports an object", () => {
    expect(config).toBeTypeOf("object");
    expect(config).not.toBeNull();
  });

  it("Has a rule object", () => {
    expect(config).toHaveProperty("rules");
    expect(config.rules).toBeTypeOf("object");
  });

  it("Uses the Vue parser", () => {
    expect(config).toHaveProperty("parser", "vue-eslint-parser");
  });

  it("Adds the Vue plugin", () => {
    expect(config.plugins).toContain("vue");
  });
});

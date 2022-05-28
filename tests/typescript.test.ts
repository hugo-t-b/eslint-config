import { describe, expect, it } from "vitest";
import config from "../src/typescript/index";

describe("TypeScript config", () => {
  it("Exports an object", () => {
    expect(config).toBeTypeOf("object");
    expect(config).not.toBeNull();
  });

  it("Has a rule object", () => {
    expect(config).toHaveProperty("rules");
    expect(config.rules).toBeTypeOf("object");
  });

  it("Uses the TypeScript parser", () => {
    expect(config).toHaveProperty("parser", "@typescript-eslint/parser");
  });

  it("Adds the TypeScript plugin", () => {
    expect(config.plugins).toContain("@typescript-eslint");
  });
});

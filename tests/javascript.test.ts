import { describe, expect, it } from "vitest";
import config from "../src/index";

describe("JavaScript config", () => {
  it("Exports an object", () => {
    expect(config).toBeTypeOf("object");
    expect(config).not.toBeNull();
  });

  it("Has a rule object", () => {
    expect(config).toHaveProperty("rules");
    expect(config.rules).toBeTypeOf("object");
  });
});

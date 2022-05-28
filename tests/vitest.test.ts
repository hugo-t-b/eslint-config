import { describe, expect, it } from "vitest";
import config from "../src/vitest/index";

describe("Vitest config", () => {
  it("Exports an object", () => {
    expect(config).toBeTypeOf("object");
    expect(config).not.toBeNull();
  });

  it("Has a rule object", () => {
    expect(config).toHaveProperty("rules");
    expect(config.rules).toBeTypeOf("object");
  });

  it("Uses TypeScript", () => {
    const expectedExtendedConfigs = [
      expect.stringMatching(/typescript\/.*\..*$/)
    ];

    expect(config.extends).toEqual(expect.arrayContaining(expectedExtendedConfigs));
  });
});

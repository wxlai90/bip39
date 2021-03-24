const bip39 = require("../index");

describe("#main", () => {
  it("should generate mnemonic of 12 words give 128-bits as size", () => {
    expect(bip39(128).split(" ").length).toEqual(12);
  });

  it("should generate mnemonic of 24 words give 256-bits as size", () => {
    expect(bip39(256).split(" ").length).toEqual(24);
  });
});

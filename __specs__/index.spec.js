const bip39 = require("../index");

describe("#main", () => {
  it("should generate mnemonic of 12 words given 128-bits as size", () => {
    expect(bip39(128).split(" ").length).toEqual(12);
  });

  it("should generate mnemonic of 24 words given 256-bits as size", () => {
    expect(bip39(256).split(" ").length).toEqual(24);
  });

  it('should default to 256 bits of entropy if size is not given', () => {
    expect(bip39().split(" ").length).toEqual(24);
  })
});

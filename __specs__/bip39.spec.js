const {
  createRandomBytes,
  lpad,
  bytesToBinary,
  calculateChecksum,
  splitIntoChunks,
  mapBinaryStringToByte,
} = require("../bip39");

const BINARY = "000000010000001000000011000001000000010100000110";

const ARRAY_OF_BYTES = [1, 2, 3, 4, 5, 6];

describe("utils", () => {
  describe("lpad should pad a given string into a specified length by adding char in front", () => {
    it("should not change the string if length is already equal to specified length", () => {
      expect(lpad("abc", "x", 3)).toEqual("abc");
    });

    it("should not change the string if length is greater than specified length", () => {
      expect(lpad("abcdef", "x", 3)).toEqual("abcdef");
    });

    it("should pad using char given", () => {
      expect(lpad("abcdef", "x", 10)).toEqual("xxxxabcdef");
    });
  });

  describe("createRandomBytes", () => {
    it("should create buffer of size filled with random bytes", () => {
      const randomBuffer = createRandomBytes(128);

      expect(randomBuffer.length).toEqual(16);
    });
  });

  describe("bytesToBinary", () => {
    it("should convert array of bytes into a single concatenated binary string", () => {
      const binaryString = bytesToBinary(ARRAY_OF_BYTES);

      expect(binaryString).toEqual(BINARY);

      expect(binaryString.length).toEqual(48);
    });
  });

  describe("mapBinaryStringToByte", () => {
    it("should convert a single binary string into array of bytes", () => {
      const chunks = splitIntoChunks(BINARY, 8);

      const aob = chunks.map(mapBinaryStringToByte);

      expect(aob).toEqual(ARRAY_OF_BYTES);
    });
  });

  describe("calculateChecksum", () => {
    it("should calculate a checksum for a given entropy bits", () => {
      const checksum = calculateChecksum(
        Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
      );

      expect(checksum).toEqual("0101");
      expect(checksum.length).toEqual(4);
    });

    it("should calculate a checksum with length = bits / 32", () => {
      expect(calculateChecksum(Buffer.allocUnsafe(16)).length).toEqual(4);
      expect(calculateChecksum(Buffer.allocUnsafe(32)).length).toEqual(8);
      expect(calculateChecksum(Buffer.allocUnsafe(64)).length).toEqual(16);
      expect(calculateChecksum(Buffer.allocUnsafe(128)).length).toEqual(32);
    });
  });
});

const wordlist = require("./wordlist");

const {
  createRandomBytes,
  bytesToBinary,
  calculateChecksum,
  splitIntoChunks,
  mapBinaryStringToByte,
} = require("./utils");

const main = (size) => {
  const randomBytes = createRandomBytes(size);
  const binaryString = bytesToBinary(randomBytes);
  const checksum = calculateChecksum(randomBytes);
  const allBits = binaryString + checksum;
  const chunks = splitIntoChunks(allBits, 11);
  const indices = chunks.map(mapBinaryStringToByte);
  const mnemonic = indices.map((i) => wordlist[i]).join(" ");

  return mnemonic;
};

module.exports = main;

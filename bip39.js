const crypto = require("crypto");

const createRandomBytes = (size) => {
  const buffer = Buffer.allocUnsafe(size / 8);

  crypto.randomFillSync(buffer);

  return buffer;
};

const lpad = (str, padChar, len) => {
  while (str.length < len) {
    str = padChar + str;
  }

  return str;
};

const bytesToBinary = (bytes) => {
  let binaryString = "";

  for (let i = 0; i < bytes.length; i++) {
    binaryString += lpad(bytes[i].toString(2), "0", 8);
  }

  return binaryString;
};

const calculateChecksum = (bytesBuffer) => {
  const checksumLength = bytesBuffer.length / 4;

  const hash = crypto.createHash("sha256").update(bytesBuffer).digest();

  return bytesToBinary(hash).slice(0, checksumLength);
};

const splitIntoChunks = (binaryString, chunkSize) => {
  const chunks = [];

  for (let i = 0; i < binaryString.length; i += chunkSize) {
    chunks.push(binaryString.slice(i, i + chunkSize));
  }

  return chunks;
};

const mapBinaryStringToByte = (binaryString) => {
  return parseInt(binaryString, 2);
};

module.exports = {
  createRandomBytes,
  lpad,
  bytesToBinary,
  calculateChecksum,
  splitIntoChunks,
  mapBinaryStringToByte,
};

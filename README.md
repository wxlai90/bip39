# BIP39 Generator

> BIP39 is the use of a mnemonic phrase -- a group of easy to remember words -- to serve as a back up to recover your wallet and coins in the event your wallet becomes compromised, lost, or destroyed. This is also known as a mnemonic seed, seed phrase, recovery phrase, wallet back up, master seed, etc.

<img src="https://coinguides.org/wp-content/uploads/2020/10/bip39-wallets.jpg" alt="sample of bip39" >

- Cryptographically secure
- Ease of use

# Interoperable

BIP39 Mnemonic phrase is interoperable across all hardware wallets - Ledger Nano X/S, Trezor etc.

# Usage

```js
const bip39 = require("./index.js");

// defaults to 256 bits, 24 words entropy
console.log(bip39());
```

> Sample output: demise meat two twenty select arctic apple merge chat soup autumn sunny custom yellow reveal mixture sauce direct hockey rabbit clerk gap penalty joke

```js
// specify bitsize, e.g. 128 bits, 12 words entropy
console.log(bip39(128));
```

> Sample output: rib bring shine vanish jaguar into gravity educate where raise wild float

## Test Coverage

| File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ----------- | ------- | -------- | ------- | ------- | ----------------- |
| All files   | 100     | 100      | 100     | 100     |
| bip39.js    | 100     | 100      | 100     | 100     |
| index.js    | 100     | 100      | 100     | 100     |
| wordlist.js | 100     | 100      | 100     | 100     |

```

```

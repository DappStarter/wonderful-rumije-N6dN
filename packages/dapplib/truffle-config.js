require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar purity install hero fold sleep'; 
let testAccounts = [
"0xbf98fbe4d56d605267e10d8557b4daa3eb5659ef6493f1a1d0ad93927bcc61a4",
"0xba3f09ed8835dd0effd42710b2a690d3c265f6d444e997aa99df6cc450d83b29",
"0x038cf02477eda5e2cf7d952bebb57389567db5d22b6412cc994bc708efb8aa05",
"0x3f2de9562a6cdaec3d885403b238235020e335ea2132dafa57bc7046ae6ab334",
"0x170433d46898a902d6988630f1719debf45d15f73391434287404a8cbbbd87f4",
"0xca019a4d7d3daa22fd4007311b86f1c96bde5eafaeaac90e6842c41948941f55",
"0xd3e871e372811374ef32921d0e9283628cf09055d708fafa4598c6efbe0269f1",
"0xe2603efaa5dcf6cc94c79605960018a96cd459f012f7a7023311dfb5ebe5c97f",
"0xe7becaa5a0f89d3b816eb8bc3ab8be918f1eac86ea97ee2b4ea33dc6c72667c9",
"0xeec2b6731b5317bf01b25787fb9d77c68c9986ff9679e07056bce9ebff5ac51b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


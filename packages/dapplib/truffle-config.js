require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain proud inflict arm bubble soon'; 
let testAccounts = [
"0x3647b37969d46ef22bb3e63ba6553d1e5b0b71d739d2fc032b0bedaec35d0c98",
"0x9bb66d68405d06a3149a61c2261ea54a0a2eae57f026973d000355a8b3d24035",
"0x0546aa25587d3211ec1f41c4174434253a505eb2479aad8c86dc413372d75e80",
"0x9200e619bc97619c52f301f63c9f1adc6755cfb464a34c4a881d594bb91f122d",
"0x7dd1945e8bc0b3f980a7147d2ffd39a30353c8fa4e91c53457e272122069a11c",
"0xf0f311868da3e23cc44f31e34653da89469f762b128136c9986b07ad7f35ca73",
"0x9928827a40d14bce287302b1c9a2a5b0c22052435d2864a2e250e6f23c0e688c",
"0xebfbc1331f1cc5eca2235cd1f931f11bbfb0ff513634dd0d29bc2b129e2f73bf",
"0xb75b40ec309a981c897ba9aff093206ef49cb65b896d57ecbd2045773ab9b504",
"0xbfe524555ddb127d68b5be144bae87040e4e418c342df93e0309eb56dd33c625"
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
            version: '^0.5.11'
        }
    }
};

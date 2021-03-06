import Web3 from 'web3';
import web3 from '../ethereum/web3.js';

// Import Truffle files
import MetaCoin from '../smart-contracts/build/contracts/MetaCoin.sol.js';
import ConvertLib from '../smart-contracts/build/contracts/ConvertLib.sol.js';

// Load Truffle file
const provider = new Web3.providers.HttpProvider('http://localhost:8545')
ConvertLib.setProvider(provider)

// Display through Truffle deployed ConvertLib
var convertLib = ConvertLib.deployed();
console.log(convertLib);

// Deploy a new ConvertLib contract
const fromAddr = web3.eth.coinbase;
const gasPrice = 100000000000;
const gas = 2500000;
ConvertLib.new({ from: fromAddr, gasPrice: gasPrice, gas: gas });

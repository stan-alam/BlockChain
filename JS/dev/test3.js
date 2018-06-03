const Blockchain = require('./blockchain');

const dogecoin = new Blockchain();

dogecoin.createNewBlock(1234, '0INA90SDNF90N', '90ANSD9F0N9009N');

dogecoin.createNewTransaction(100, 'Ben5000200A', 'DarrikDumas50');

dogecoin.createNewBlock(2340, '0INA90SDNZ245N', '1XXXXXXXXXN');

//console.log(dogecoin);
console.log(dogecoin.chain[1]); //this should print the second block in the chain
//terminal output of dogecoin

/*
$ node test3.js
{ index: 2,
  timestamp: 1528042571556,
  transactions:
   [ { amount: 100,
       sender: 'Ben5000200A',
       recipient: 'DarrikDumas50' } ],
  nonce: 2340,
  hash: '1XXXXXXXXXN',
  previousBlockHash: '0INA90SDNZ245N' }
*/

const Blockchain = require('./blockchain');

const dogecoin = new Blockchain();

dogecoin.createNewBlock(1234, '0INA90SDNF90N', '90ANSD9F0N9009N');

dogecoin.createNewTransaction(100, 'Ben5000200A', 'DarrikDumas50');

console.log(dogecoin);
//terminal output of dogecoin
/*
$ node test2.js
Blockchain {
  chain:
   [ { index: 1,
       timestamp: 1528041331148,
       transactions: [],
       nonce: 1234,
       hash: '90ANSD9F0N9009N',
       previousBlockHash: '0INA90SDNF90N' } ],
  pendingTransactions:
   [ { amount: 100,
       sender: 'Ben5000200A',
       recipient: 'DarrikDumas50' } ] }
*/

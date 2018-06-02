const Blockchain = require('./blockchain');

const dogecoin = new Blockchain();
dogecoin.createNewBlock(1234, '0INA90SDNF90N', '90ANSD9F0N9009N');
dogecoin.createNewBlock(1211, '11ZA90FDNF90R', '8ZANSD9F0N9119Z');
dogecoin.createNewBlock(5555, '444490FDNF90V', '0ZANSD9F0N9119H');
console.log(dogecoin); //cli outtput Blockchain { chain: [], newTransactions: [] }


/*
$ node test.js
Blockchain {
  chain:
   [ { index: 1,
       timestamp: 1527974135805,
       transactions: [],
       nonce: 1234,
       hash: '90ANSD9F0N9009N',
       previousBlockHash: '0INA90SDNF90N' },
     { index: 2,
       timestamp: 1527974135805,
       transactions: [],
       nonce: 1211,
       hash: '8ZANSD9F0N9119Z',
       previousBlockHash: '11ZA90FDNF90R' },
     { index: 3,
       timestamp: 1527974135805,
       transactions: [],
       nonce: 5555,
       hash: '0ZANSD9F0N9119H',
       previousBlockHash: '444490FDNF90V' } ],
  newTransactions: [] }
*/

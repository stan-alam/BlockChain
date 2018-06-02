const Blockchain = require('./blockchain');

const dogecoin = new Blockchain();
dogecoin.createNewBlock(1234, '0INA90SDNF90N', '90ANSD9F0N9009N');
console.log(dogecoin); //cli outtput Blockchain { chain: [], newTransactions: [] }

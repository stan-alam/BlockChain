const Blockchain = require('./blockchain');

const dogecoin = new Blockchain();

dogecoin.createNewBlock(1234, '0INA90SDNF90N', '90ANSD9F0N9009N');

dogecoin.createNewTransaction(100, 'Ben5000200A', 'DarrikDumas50');

console.log(dogecoin); //cli outtput Blockchain { chain: [], newTransactions: [] }

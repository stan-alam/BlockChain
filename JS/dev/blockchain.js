function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash,hash){
  const newBlock = {
    index : this.chain.length + 1,
    timestamp : Date.now(),
    transactions : this.newTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.newTransactions  = []; // empty the array to contain new transactions
  this.chain.push(newBlock); //this will put those transactions into the array

  return newBlock;
}

Blockchain.prototype.getLastBlock = function()  {
  return this.chain[this.chain.length - 1];
}
module.exports = Blockchain;

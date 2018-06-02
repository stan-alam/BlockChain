# BlockChain
ball and blockchain baby

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-36.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-37.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-38.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-39.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-40.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-41.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-42.svg" width="80%" height="80%">
</a>

```js
//simple constructor function in JS

function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

```
<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-43.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-44.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-45.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-46.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-47.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-48.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-49.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-50.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-50.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-51.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-52.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-53.svg" width="80%" height="80%">
</a>
```js

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

```
<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-54.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-55.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/BlockChain/blob/develop/JS/svg_files/01/Notebook-56.svg" width="80%" height="80%">
</a>

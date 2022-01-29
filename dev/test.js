const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();



const bc1 = {
"chain": [
{
"index": 1,
"timestamp": 1643409407181,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1643409424601,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1643409479778,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "350e47abcf0144cd9dda019c9079b320",
"transactionId": "a428f911d5194c498710f87dbb5b3560"
},
{
"amount": 3640,
"sender": "fbfbffefefefARGARGA3454sEFEFSwefs",
"recipient": "koklfewsdfesfesfESFSEG4443RGR",
"transactionId": "87e979d9b3244f3e87e68cf5029db86d"
},
{
"amount": 340,
"sender": "fbfbffefefefARGARGA3454sEFEFSwefs",
"recipient": "koklfewsdfesfesfESFSEG4443RGR",
"transactionId": "896bd3923592414ba8d8dcdffdc8b64b"
},
{
"amount": 30,
"sender": "fbfbffefefefARGARGA3454sEFEFSwefs",
"recipient": "koklfewsdfesfesfESFSEG4443RGR",
"transactionId": "bb06490a472c4c7aafb083c94f7218a0"
}
],
"nonce": 54791,
"hash": "0000d850de446b5e0caa5e9ab3b36c37b14c3ab8f4626c6483dcc092077a2b91",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1643409517330,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "350e47abcf0144cd9dda019c9079b320",
"transactionId": "6f823e453bf848729daadc8837ada3ff"
},
{
"amount": 30,
"sender": "fbfbffefefefARGARGA3454sEFEFSwefs",
"recipient": "koklfewsdfesfesfESFSEG4443RGR",
"transactionId": "e4ffc42a84d0453ea33cdef3e7d768e8"
},
{
"amount": 30,
"sender": "fbfbffefefefARGARGA3454sEFEFSwefs",
"recipient": "koklfewsdfesfesfESFSEG4443RGR",
"transactionId": "a4e68b12fef14c4a8aa61b099c258240"
}
],
"nonce": 48730,
"hash": "0000a925b081fa0eb6d7095b6a8a39da6e91dc41744dad5250bcfb8dfb270940",
"previousBlockHash": "0000d850de446b5e0caa5e9ab3b36c37b14c3ab8f4626c6483dcc092077a2b91"
},
{
"index": 5,
"timestamp": 1643409536190,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "350e47abcf0144cd9dda019c9079b320",
"transactionId": "b3d983a4a13a4710b89c6c5feab888f9"
}
],
"nonce": 7169,
"hash": "0000d6ea1e9494045fb44de057db61ba44b8b983dda28966043439a86a7e32b0",
"previousBlockHash": "0000a925b081fa0eb6d7095b6a8a39da6e91dc41744dad5250bcfb8dfb270940"
},
{
"index": 6,
"timestamp": 1643409537172,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "350e47abcf0144cd9dda019c9079b320",
"transactionId": "87380b621d3a4c8894b69e819d663ebf"
}
],
"nonce": 38729,
"hash": "0000a635de63f001143eb363ab5382a52d7d7c8e19c9ef9e9704cabd680ce5dd",
"previousBlockHash": "0000d6ea1e9494045fb44de057db61ba44b8b983dda28966043439a86a7e32b0"
},
{
"index": 7,
"timestamp": 1643409538122,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "350e47abcf0144cd9dda019c9079b320",
"transactionId": "cfef761e6a5e4f41b839cdb329dc6cd4"
}
],
"nonce": 34915,
"hash": "00007d026170e38cca295e3d2855cbcbeae7803625fd178c9cafc68fe479197e",
"previousBlockHash": "0000a635de63f001143eb363ab5382a52d7d7c8e19c9ef9e9704cabd680ce5dd"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "350e47abcf0144cd9dda019c9079b320",
"transactionId": "2d7f3f5cbb5c49509ff3707372f6b58c"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

console.log('VALID:',bitcoin.chainIsValid(bc1.chain));


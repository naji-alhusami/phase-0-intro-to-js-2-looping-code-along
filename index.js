// Code your solutions in this file
const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";
const newNames = [];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return newNames;
}

function countDown(coDown = 0) {
  while (coDown >= 0) {
    console.log(coDown--);
  }
}

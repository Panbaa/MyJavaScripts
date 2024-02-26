// Here is a code which ciphers a string by the known rot13 cipher which basicly siwtches all chars by 13 in the alphabet

let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let ans = "";
  for (let i = 0; i < message.length; i++) {
    if (alphabet.indexOf(message[i].toLowerCase()) !== -1) {
      let newIndex = (alphabet.indexOf(message[i].toLowerCase()) + 13) % alphabet.length;
      ans += message[i].toUpperCase() === message[i] ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
    } else {
      ans += message[i];
    }
  }
  return ans;

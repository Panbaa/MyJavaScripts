// An isogram is a word in which no letter appears twice. The Challenge was given to write a function to check that for a given string

// the first approach of mine is always to just solve the question first:
/* THIS IS THE FIRST 'DIRTY' APPROACH

function isIsogram(str){
  let seen = new Set();
  str = str.toLowerCase();
  for(let char of str){
     if(seen.has(char)){
      console.log(seen);
      seen.clear();
      return false;
    }else{
      seen.add(char);
    }
  }
  console.log(seen);
  return true;
}

*/

// And then I try to refactor the Code and make it more efficient (This time simply abusing the characteristics of 'Set' which cant contain the same value twice...): 

function isIsogram(str){
  return new Set(str.toLowerCase()).size === str.length;
}

var word1 = "bob";
var word2 = "bobb";
var word3 = "bbobb"
var word4 = "Was it a car or a cat I saw?";
var word5 = "No 'x' in Nixon";
var word6 = "This is not a Palindrome!";
var word7 = "!abcdefghijklm nop# !"
var word8 = "Doc, note: I dissent. A fast never prevents a fatness. I diet on cod."

function palindromeCheck (word) {
  var w = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toUpperCase();

  for (var i = 0; i < w.length; i++) {
    var j = w.length - (i + 1);
    if (w[i] === w[j]) {
      continue;
    } else {
      console.log("String: " + word + "\nResult: Failure\n");
      return false;
    }
  }

  console.log("String: " + word + "\nResult: Success\n");
  return true;
}

palindromeCheck(word1);
palindromeCheck(word2);
palindromeCheck(word3);
palindromeCheck(word4);
palindromeCheck(word5);
palindromeCheck(word6);
palindromeCheck(word7);
palindromeCheck(word8);

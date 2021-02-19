function reverseSent(sentence){
    var result = " ";
    var splitStr = sentence.split(" ");
  
    for (var i = splitStr.length - 1; i >= 0; i--){
      result += splitStr[i] + " ";
      var words = result;
    }
    return words;
  }
  console.log(reverseSent("hello world"));
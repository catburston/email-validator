var inputBox = document.getElementById('input-text');
var resultBox = document.getElementById('cleaned-text');
var cleanerButton = document.getElementById('clean-button');

cleanerButton.addEventListener('click', function() {
    var text = inputBox.value;
    normalizeCamouflagedEmails(text);
    resultBox.innerHTML = cleanedText;
});







var illegalTextBlocks = ['-AT-','(AT)','*AT*'];




function normalizeCamouflagedEmails(text){

  var cleanText;

  if (checkTextForIllegalTextBlocks(text)) {
        for(var x in illegalTextBlocks){
          cleanText = text.replace(illegalTextBlocks[x],"@");}
  } else {
    cleanText = text;
    return cleanText;
  };
  return cleanText;
};





function checkTextForIllegalTextBlocks(text) {
  if((text.indexOf("-AT-") != -1 || text.indexOf("(AT)") != -1 || text.indexOf("*AT*") != -1) &&
        text.indexOf(".") >0 &&
        text.indexOf(" -AT-") == -1 &&
        text.indexOf(" (AT)") == -1) {
    return true;
  } else {
    return false;
  }
}





















function transformer1(text){
  for (var x in illegalChunks){

    if(text.indexOf(illegalChunks[x]) != -1 &&
      text.indexOf(".") >0 &&
      text.indexOf(" -AT-") == -1) {
      text = text.replace(illegalChunks[x],"@");
    } else {
      console.log("here: "+text);
    };
      return text;
  };

}
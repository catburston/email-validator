/*var inputBox = document.getElementById('input-text');
var resultBox = document.getElementById('cleaned-text');
var cleanerButton = document.getElementById('clean-button');

cleanerButton.addEventListener('click', function() {
    var text = inputBox.value;
    normalizeCamouflagedEmails(text);
    resultBox.innerHTML = cleanedText;
});

*/

var illegalTextBlocks = ['-AT-','(AT)','*AT*'];

function normalizeCamouflagedEmails(text){

  var cleanText;

  if (checkTextForIllegalTextBlocks(text)==true) {

        for(var x in illegalTextBlocks){
          cleanText = text.replace(illegalTextBlocks[x],"@");
          console.log(cleanText);}

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
    console.log("Contains")
    return true;
  } else {
    console.log("doesnt")
    return false;
  }
}


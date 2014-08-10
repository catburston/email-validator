var illegalTextBlocks = ['-AT-', '(AT)', '*AT*'];

function normalizeCamouflagedEmails(text) {
  var cleanText;
  for (var i = 0; i < illegalTextBlocks.length; i++) {
    var tempText;
    if (text.indexOf(" " + illegalTextBlocks[i]) != -1) {
      // check for space in front of illegal string
      text = text;
    // } else if (text.indexOf(illegalTextBlocks[i]) > 0) {
    //   // check for illegal block
    //   cleanText = text;
    } else if (text.indexOf(illegalTextBlocks[i]) != -1 && text.indexOf(".") > 0) {
      // check for illegal string
      tempText = text.replace(illegalTextBlocks[i],"@");
    } else {
      text = text;
    }
  }

  if (tempText != undefined) {
    cleanText = tempText;
  } else {
    cleanText = text;
  }
  return cleanText;
}


// accept text string
// look for illegal blocks
// check if there is a space before the block
// check if the . index is > 0
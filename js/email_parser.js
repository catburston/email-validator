var illegalTextBlocks = ['-AT-','(AT)','*AT*'];

function normalizeCamuflatedEmails(text){
  if (checkTextForIllegalTextBlocks(text)) {
        for(var x in illegalTextBlocks){text = text.replace(illegalTextBlocks[x],"@");}
  } else {
    return text;
  };
  return text;
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
function startListening(btn){
  btn.addEventListener('click', function(event){
    parseText();
  });
}


var illegalChunks = ['-AT-','(AT)','*AT*'];

function transformer(text){
  if ((text.indexOf("-AT-") != -1 || text.indexOf("(AT)") != -1 || text.indexOf("*AT*") != -1) &&
      text.indexOf(".") >0 &&
      text.indexOf(" -AT-") == -1) {

        for(var x in illegalChunks){text = text.replace(illegalChunks[x],"@");}

    //return text.replace("-AT-", "@");
  } else {
    return text;
  };

  return text;

}
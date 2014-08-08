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





/*
function transformer(text){
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

*/

//for (var x in illegaChunks){

//  if(text.indexOf(illegaChunks[x]) != -1 && 
//    text.indexOf(".") >0 &&
//    text.indexOf(" -AT-") == -1){

//    text = text.replace(illegalChunks[x],"@");
//  }
//};
//return text;
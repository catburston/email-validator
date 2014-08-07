function startListening(btn){
  btn.addEventListener('click', function(event){
    parseText();
  });
}

function transformer(text){
  if (text.indexOf("-AT-") != -1) {
    return text.replace("-AT-", "@");
  } else {
    return text;
  }
}
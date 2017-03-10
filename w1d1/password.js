function obfuscate(str){
  console.log('Orogonal Password', str)
    var password = ""
    for (var i=0; i < str.length; i ++ ){
      var letter;
      if (str[i] === "a") {
        letter = "4"
      }
      else if (str[i] === "e"){
        letter = "3";
      }
      else if (str[i] === "o"){
        letter = "0";
      }
      else if (str[i] === "l"){
        letter = "1";
      }
      else {
        letter = str[i]
      }
      password = password + letter
      console.log ("New password:", password)
    }
    return(password);
}

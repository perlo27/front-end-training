function checkSpam(text) {
  return text.toLowerCase().indexOf("viagra") != -1 || text.toLowerCase().indexOf("xxx") != -1; 
}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

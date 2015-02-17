{"filter":false,"title":"script.js","tooltip":"/script.js","undoManager":{"mark":1,"position":1,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":28,"column":1},"action":"insert","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').text(string);","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":28,"column":1},"action":"remove","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').text(string);","}"]},{"start":{"row":0,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":["/*When the document loads.*/","logStatus(\"You're in a dark alley.\");","$('#buttonAreaDiv')","  .append(\"<button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_begForSpice\\\"> Beg for Spice </button>\");","$('#buttonAreaDiv')","  .append(\"</br><br><button type=\\\"button\\\" class=\\\"actionButton\\\" id=\\\"btn_store\\\"> Store </button>\");","","/**"," * Event to handle when the button for begging"," * for spice is clicked."," */","$('#btn_begForSpice').on('click', function(){","  var cur_salt = parseInt($('#val_salt').text()); ","  if(Math.floor(Math.random() * 101) < 20) ","  {","    logStatus(\"You beg for spice. Some kind stranger gave you some.\");","    cur_salt = cur_salt + 5;","    $('#val_salt').text(cur_salt);","  }","  else","    logStatus(\"You beg for spice. You were ignored.\");","});","","/**"," * A function to display the user's current status in"," * the game's log."," */","function logStatus(string)","{","  $('#log').text(string);","}"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":18},"end":{"row":25,"column":18},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1424181512000,"hash":"dfd6f3616db305f93c7389a476ec292d9dc0d0a7"}
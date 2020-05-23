// JavaScript Document
$(document).ready(function(e) {
  /* Todo:
      * Create typing effect with timed boot sequence...
      * Figure out why there's an odd error every time a key is pressed after the first command is entered.  Does not seem to cause functional issues.
  */
   console.clear();

  /*
   Custom Text Syntax
   Links:      
      [URLPATH](NAME) - regular
      [^URLPATH](NAME) - open in new tab
      
   Styles:
      *TEXT* - bold text
      E! - Text is an error/notification
      A! - spaces are converted to non-breaking spaces (it's for ascii art - after all, this is a text based website)
  */

  function init() {
    setInterval(time);
    console.clear();
    console.log(new Date().getTime());
    log("Core", "A!_______  ________            ____ _______   ");
    log("Core", "A!\\   _  \\ \\______ \\          /_   |\\      \\  ");
    log("Core", "A!/  /_\\  \\ |    |  \\   ______ |   |/   |   \\ ");
    log("Core", "A!\\  \\_/   \\|    `   \\ /_____/ |   /    |    \\");
    log("Core", "A! \\_____  /_______  /         |___\\____|__  /");
    log("Core", "A!       \\/        \\/                      \\/ ");
    log("Core", "");
    log("Core", "Core Components boot sequence initializing... Initialized!");
    log("Core", "E!Booting Information Databases... Complete!");
    log("Core", "E!Booting Semantic Memory Buffer... Complete!");
    log("Core", "E!Booting Language Processing Unit... Complete!");
    log("Core", "E!Booting External Components... Complete!");
    log("Core", "");
    log("Core", "Central Executive boot sequence intializing... Initialized!");
    log("Core", "E!Information Databases... Online!");
    log("Core", "E!Semantic Memory Buffer... Online!");
    log("Core", "E!Language Processing Unit... Online!");
    log("Core", "E!External Components... Online!");
    log("Core", "");
    log("Client", "For help say '/help'");
    window.location.hash="#editable";
  }

  const commandlist = [
    ["/help", "Show commands"],
    ["/clear", "Clear the console"],
    ["/stats", "Display system statistics"],
    ["/skills", "Display integrated AI skillset"],
    ["/loadout", "Display current loadout"],
    ["/mods", "Display installed components"],

  ];

  const stats = [
    ["BODY", "7"],
    ["MIND", "5"],
    ["SOCI", "6"],
    ["RESI", "0"]
  ];

  const skills = [
    ["PERS", "1"],
    ["PERF", "4"],

  ];

  const loadout = [
    ["Gungnir", "Highly modified "]
  ];

  let previouscommands = [];
  let currentcommand = 0;

  $(".editline .edit").keydown(function(e) {
    let text = $(".editline .edit").text();
    let keypress = e.which;
    console.log(keypress);
    if(e.which == 13 && text !== "") {
      let commands = text.split(' ');
      let output = "";
      if (commands[0] == "help") {
        text = "/" + text;
      }

      $(".editline .edit").text("");
      log("User", text);

      previouscommands[currentcommand] = text;
      currentcommand = previouscommands.length;

      $(".editline .edit").keydown(35);
      cmd(commands[0], text, commands);

    }
  });

  function log(name, information) {
    let d = new Date();
    let hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
    let minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
    let seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
    let color = "whitet";
    let textcolor = "";
    let postcolor = "";

    switch (name) {
      case "Core":
        color = "redt";
        break;
      case "Client":
        color = "bluet";
        break;
      case "User":
        color = "greent";
        break;
    }

    if(information[0] == "A" && information[1] == "!") {
      information = information.substr(2);
      information = information.replace(/ /g, '\u00A0');
    }
    if(information[0] == "E" && information[1] == "!") {
      information = information.substr(2);
      postcolor = "important";
    }

    $(".stream").append('<div class="line">' +
        '<p class="time">[' + hours + ":" + minutes + ":" + seconds + ']</p>' +
        '<p class="name ' + color + '">' + name + '</p>' +
        '<p class="information ' + postcolor + '"> ' + information + '</p>' +
        '</div');
  }

  function cmd(command, words, word) {
    switch (word[0]) {
      case "/help":
        for(let i = 0; i < commandlist.length; i++) {
          output = commandlist[i][0] + " : " + commandlist[i][1];
          log("Client", output);
        }
        break;
      case "/clear":
        $(".stream").text("");
        break;
      case "/stats":
        log("Core", "Retrieving system statistics...");
        log("Client", "");
        log("Client", "DRIVER: Remote AI");
        log("Client", "VERSION: 15.350");
        log("Client", "");
        log("Client", "System Statistics:");
        for(let i = 0; i < stats.length; i++) {
          output = "E!" + stats[i][0] + ": " + "|".repeat(stats[i][1]); 
          log("Client", output);
        }
        log("Client", "");
        break;
      case "/skills":
        log("Core", "Retrieving integrated AI skillset...");
        for(let i = 0; i < skills.length; i++) {
          output = "E!" + skills[i][0] + ": " + "|".repeat(skills[i][1]); 
          log("Client", output);
        }
        log("Client", "");
        break;
      case "/loadout":
        log("Core", "Retrieving loadout information...");
        for(let i = 0; i < loadout.length; i++) {
          output = "E!" + loadout[i][0] + ": " + louadout[i][1];
          log("Client", output);
        }
        log("Client", "");
        break;
    }
  }

  function time() {

    let timestring = "";
    
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let temptimestring = "[" + hours + ":" + minutes + ":" + seconds + "]";
    if (temptimestring != timestring) {
      timestring = temptimestring;
      $(".editline .time").text(timestring);
    }
  }

  // This fixes an annoying bug with contenteditable.

  $(function(){

    $("#editable")

    // use br instead of div div
    .on("keypress", null, function(e){
      if (e.which == 13) {
        if (window.getSelection) {
          var selection = window.getSelection(),
            range = selection.getRangeAt(0),
            br = document.createElement("br");
          range.deleteContents();
          range.insertNode(br);
          range.setStartAfter(br);
          range.setEndAfter(br);
          range.collapse(false);
          selection.removeAllRanges();
          selection.addRange(range);
          return false;
        }
      }
    });
  });

  init();

});
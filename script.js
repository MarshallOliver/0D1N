// JavaScript Document
$(document).ready(function(e) {
  /* Todo:
      * Create typing effect with timed boot sequence...
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
    log("Core", "Intializing boot sequence... Initialized!");
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
  }

  function log(name, information) {
    var d = new Date();
    var hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
    var minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
    var seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
    var color = "whitet";
    var textcolor = "";
    var postcolor = "";

    switch (name) {
      case "Core":
        color = "redt";
        break;
      case "Client":
        color = "bluet";
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

  function time() {

    var timestring = "";
    
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    var temptimestring = "[" + hours + ":" + minutes + ":" + seconds + "]";
    if (temptimestring != timestring) {
      timestring = temptimestring;
      $(".editline .time").text(timestring);
    }
  }

  init();

});
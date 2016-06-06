(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Franta72";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
            command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("/me Bacon!!!");
                }
              }
            };
            bot.commands.božíCommand = {
            command: 'boží',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                var currentDJ = API.getDJ().username;
                var user = chat.un; 
                  API.sendChat("/me @" + currentDJ + ", @" + user + " je z této písničky naprosto unešen/a, až se z toho roztekl/a a za doprovodu zmateného hekání se válí v transu na podlaze.");
                }
              }
            };
            bot.commands.sayCommand = {
            command: 'say',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'mod', //Minimum user permission to use the command
            type: 'startsWith', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.moderateDeleteChat(chat.cid);
                    API.sendChat("/me [@" + chat.un + "] " + chat.message.substr(cmd.length + 1));
                }
            }
        };

        bot.commands.hledatCommand = {
            command: 'hledat',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'startsWith', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var searchUser = chat.message.substr(cmd.length +2);
                    var found = false;
                    for (var i = 0; i < bot.room.users.length; i++) {
                        if (bot.room.users[i].username === searchUser) {
                            found = bot.room.users[i];
                            if (found.inRoom) {
                                API.sendChat("/me [@" + chat.un + "] Stačí otevřít oči! @"+searchUser+ " je tady.");
                            } else {
                                API.sendChat("/me [@" + chat.un + "] Bot naposledy viděl " + searchUser + " před " + bot.roomUtilities.msToStr(new Date().getTime() - found.lastActivity)+ "");
                            }
                            break;
                        }
                    }
                    if (!found) {
                        API.sendChat("/me Bot nemůže najít "+searchUser+". Pravděpodobně se odpojil/a před spuštěním bota.")
                    }
                }
            }
        };
            bot.commands.vysledkyCommand = {
            command: 'vysledky',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("/me Červnovou soutěž vyhrál hráč Mark Valentine.");

                }
              }
            };
            bot.commands.soutezCommand = {
            command: 'soutez',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("/me Momentálně neprobíhá žádná soutěž. Až se tak stane, dáme vám vědět včas na Facebooku!");

                }
              }
            };
            bot.commands.rollCommand = {
            command: 'kostky',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            defaultDice: [1,100],
            functionality: function (chat, cmd) {
                var params = chat.message.substr(cmd.length + 2);
                console.log(params);
                var numDice = 1;
                var typeDie = 100;
                var diceArray = this.defaultDice;
                if (params !== undefined)
                    diceArray = params.split('d');
                var capped = false;
                console.log(diceArray);
                if(diceArray && diceArray.length > 1){
                    if(!isNaN(diceArray[0])) numDice = diceArray[0];
                    if(!isNaN(diceArray[1])) typeDie = diceArray[1];
                    if(typeDie > 1000) {
                        typeDie = 1000; capped = true;
                    }
                    else if (typeDie < 1) {
                        typeDie = 1; capped = true;
                    }
                    if(numDice > 1000) {
                        numDice = 1000; capped = true;
                    }
                    else if (numDice < 1) {
                        numDice = 1; capped = true;
                    }

                }

                if(capped)
                {
                    //API.sendChat("Dice Rolls capped to < 1000d1000 & > 1d1");
                }

            }

                var diceRoll = 0;
                for(var i = 0; i < numDice; i++)
                {
                    diceRoll += Math.floor((Math.random()*typeDie)+1);
                }

                API.sendChat("@"+chat.un+" rolled a "+diceRoll);
            }
        };
        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "HJV Bot",
      language: "special",
      chatLink: "https://rawgit.com/Franta72/HJV-Bot/master/HJVczech.json",
      scriptLink: "https://rawgit.com/basicBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: false, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 5000,
      afkRemoval: false,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: false,
      voteSkipLimit: 10,
      historySkip: false,
      timeGuard: true,
      maximumSongLength: 10,
      autodisable: true,
      commandCooldown: 1,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Temporary Message of the Day",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: null,
      intervalMessages: ["Jsme rádi, že jste stále s námi. Děkujeme <heart>"],
      messageInterval: 10,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/basicBot/custom/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Franta72/HJV-Bot/master/HJV%20Bot.js", extend);

}).call(this);

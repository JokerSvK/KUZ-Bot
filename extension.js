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
            function spinSlots() {
            var slotArray = [':lemon:',
                ':tangerine:',
                ':strawberry:',
                ':pineapple:',
                ':apple:',
                ':grapes:',
                ':watermelon:',
                ':cherries:',
                ':green_heart:',
                ':bell:',
                ':gem:'];
            var slotValue = [1.5,
            2,
            2.5,
            3,
            3.5,
            4,
            4.5,
            5,
            5.5,
            6,
            6.5];
            var rand = Math.floor(Math.random() * (slotArray.length));
            return [slotArray[rand], slotValue[rand]];
        }

        function spinOutcome(bet, chat) {
            var winnings;
            var outcome1 = spinSlots();
            var outcome2 = spinSlots();
            var outcome3 = spinSlots();

            //Fix bet if blank
            if (bet == null || bet == "" || bet == " " || bet == "!slot" || bet == "!slots") {
                bet = 1;
            }

            //Determine Winnings
            if (outcome1[0] == outcome2[0] && outcome1[0] == outcome3[0]) {
                winnings = Math.round(bet * outcome1[1]);
                setTimeout(function () {
                    API.sendChat("@" + chat.un + " OGM Noob lucker reported... Wygrywasz... Pffff i tak powiecie, że było ustawione :keepo:");
                    API.moderateMoveDJ(chat.uid, 1);
                    setTimeout(function () {
                        API.moderateDeleteChat(chat.cid);
                    }, 7 * 1000, chat.cid);
                    return false;
                }, 2000);
            } else {
                winnings = 0;
            }

            return [outcome1[0], outcome2[0], outcome3[0], winnings];
        }

        //slots
        bot.commands.slotsCommand = {
            command: ['slots', 'slot', 'losuj', 'los'], //The command to be called. With the standard command literal this would be: !slots
            rank: 'user',
            type: 'startsWith',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    this.lastSlots = null;
                    var u = bot.userUtilities.lookupUser(chat.uid);
                    if (u.lastSlots !== null && (Date.now() - u.lastSlots) < 1 * 5 * 60 * 1000) {
                        API.moderateDeleteChat(chat.cid);
                        return void(0);
                    } else {
                        u.lastSlots = Date.now();
                        var msg = chat.message;
                        var space = msg.indexOf(' ');
                        var player = chat.un;
                        var bet = msg.substring(space + 1);
                        bet = Math.round(bet);
                        var updatedTokens;

                        var outcome = spinOutcome(bet, chat);
                        //updatedTokens = slotWinnings(outcome[3], player);

                        //Display Slots
                        if (space === -1 || bet == 1) {
                            //Start Slots

                            setTimeout(function () {
                                API.sendChat("@" + chat.un + " Wylosowano: " + outcome[0] + outcome[1] + outcome[2] + ". Spróbuj ponownie za 5 minut.")
                                setTimeout(function () {
                                    API.moderateDeleteChat(chat.cid);
                                }, 4 * 1000, chat.cid);
                                return false;

                            }, 1000);

                        } else if (bet > 1) {
                            //Start Slots

                            setTimeout(function () {
                                API.sendChat("@" + chat.un + " Wylosowano: " + outcome[0] + outcome[1] + outcome[2] + ". Spróbuj ponownie za 5 minut.")
                                setTimeout(function () {
                                    API.moderateDeleteChat(chat.cid);
                                }, 4 * 1000, chat.cid);
                                return false;
                            }, 1000);

                        } else {
                            return false;
                        }
                    }
                }
            }
        };
        
        //Slots---------------------------------------------------------------------------------------------------------------------------
        function spinSlots() {
            var slotArray = [':lemon:',
                             ':tangerine:', 
                             ':strawberry:', 
                             ':pineapple:', 
                             ':apple:', 
                             ':grapes:', 
                             ':watermelon:', 
                             ':cherries:', 
                             ':green_heart:', 
                             ':bell:', 
                             ':gem:', 
                             ':frog:'];
            var slotValue = [20, 
                             30, 
                             35, 
                             40, 
                             45, 
                             50, 
                             60, 
                             70, 
                             80, 
                             90, 
                             100, 
                             250];    
            var rand =  Math.floor(Math.random() * (slotArray.length));                
            return [slotArray[rand], slotValue[rand]]; 
        }
        
        function spinOutcome(bet) {
            var winnings;
            var outcome1 = spinSlots(); 
            var outcome2 = spinSlots(); 
            var outcome3 = spinSlots();   

            //Determine Winnings
            if (outcome1[0] == outcome2[0] && outcome1[0] == outcome3[0]) {
                winnings = Math.round(bet * outcome1[1]);
            }
            else if (outcome1[0] == outcome2[0] && outcome1[0] != outcome3[0]) {
                winnings = Math.round(bet * (.45 * outcome1[1]));
            }
            else if (outcome1[0] == outcome3[0] && outcome1[0] != outcome2[0]) {
                winnings = Math.round(bet * (.5 * outcome1[1]));
            }
            else if (outcome2[0] == outcome3[0] && outcome2[0] != outcome1[0]) {
                winnings = Math.round(bet * (.40 * outcome2[1]));
            }
            else{
                winnings = 0;  
            }
                        
            return [outcome1[0], outcome2[0], outcome3[0], winnings];                      
        }
        
        function checkTokens(bet, user) {
             var tokensPreBet = validateTokens(user);
             var tokensPostBet;
             var validBet = true;

             //Adjust amount of tokens
             if (bet > tokensPreBet || bet < 0) {
                  validBet = false;
                  tokensPostBet = tokensPreBet;
             }
             else {
                  tokensPostBet = tokensPreBet - bet;
             }
             
             localStorage.setItem(user, tokensPostBet);
             return [tokensPreBet, tokensPostBet, validBet];
        }
        
        function slotWinnings(winnings, user) {
             var userTokens = parseInt(localStorage.getItem(user)) + winnings;
             if (isNaN(userTokens)) {
                 userTokens = winnings;
             }
             localStorage.setItem(user, userTokens);
             return userTokens;
        }

        //slots
        bot.commands.slotsCommand = { 
            command: ['automat', 'automaty'],  //The command to be called. With the standard command literal this would be: !slots
            rank: 'user', 
            type: 'startsWith',  
            functionality: function (chat, cmd) { 
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 
                if (!bot.commands.executable(this.rank, chat)) return void (0); 
                else { 
                    var msg = chat.message; 
					var space = msg.indexOf(' ');
                    var user = chat.un; 
                    var updatedTokens;
                    var bet = parseInt(msg.substring(space + 1));
       
                    //Fix bet if blank
                    if (bet == null || isNaN(bet)) {
                        bet = 5;
                    }
                    bet = Math.round(bet);      
                                   
                    var playerTokens = checkTokens(bet, user);  
                    
                    //Prevent invalid betting
                    if (bet > playerTokens[0]) {
                        if (playerTokens[0] === 0){
                            return API.sendChat("/me @" + chat.un + " nevsadí " + bet + " žetonů, jelikož má nulové konto!"); 
                        } 
                        else if (playerTokens[0] === 1) {
                            return API.sendChat("/me @" + chat.un + " nevsadí " + bet + " žetonů, jelikož má jediný žeton."); 
                        }
                        else {
                            return API.sendChat("/me @" + chat.un + " nevsadí " + bet + " žetonů, jelikož má " + playerTokens[0] + " žetonů!"); 
                        }
                    }
                    else if (bet < 0) {
                        return API.sendChat("/me @" + chat.un + " nevsadí " + bet + " žetonů. Prosím, zkus to přiště bez nesmyslných částek.."); 
                    }
                    else if (bet === 0) { 
                        return API.sendChat("/me @" + chat.un + " se pokoušel/a hrát bez žetonů. Nemůžeš hrát zdarma."); 
                    }
                    //Process valid bets
                    else {
                        var outcome = spinOutcome(bet);
                        updatedTokens = slotWinnings(outcome[3], user);
                    }
                    
                    //Display Slots
                    if (space === -1 || bet == 5) { 
                        //Start Slots
                        API.sendChat("/me @" + chat.un + " vsadil/a 5 žetonů do automatu.");
                        setTimeout(function() {API.sendChat("/me  Automaty říkají: " + outcome[0] + outcome[1] + outcome[2])}, 5000);
                    } 
                    else if (bet > 5) { 
                        //Start Slots
                        API.sendChat("/me @" + chat.un + " vsadil/a " + bet + " žetonů do automatu.");
                        setTimeout(function() {API.sendChat("/me Automaty říkají: " + outcome[0] + outcome[1] + outcome[2])}, 5000);
                    } 
                    else {
                        return false; 
                    }
                         
                    //Display Outcome
                    if (outcome[3] == 0) {
                        if (updatedTokens === 1) {
                            setTimeout(function() {API.sendChat("/me @" + chat.un + ", prohrál/a jsi! Zbylo ti posledních 5 žetonů.")}, 7000);   
                        }  
                        else if (updatedTokens === 0) {
                            setTimeout(function() {API.sendChat("/me @" + chat.un + ", prohrál/a jsi! Už nemáš žádné žetony!")}, 7000);
                        }
                        else {
                            setTimeout(function() {API.sendChat("/me @" + chat.un + ", prohrál/a jsi! Zbylo ti " + updatedTokens + " žetonů.")}, 7000);
                        }
                    }
                    else if (outcome[3] == (bet * 7)) {
                        setTimeout(function() {API.sendChat("/me @" + chat.un + ", vyhrál/a jsi jackpot " + outcome[3] + " žetonů! Nyní máš " + updatedTokens + " žetonů. Neutrať je všechny na jednom místě!")}, 7000);      
                    }
                    else {
                        setTimeout(function() {API.sendChat("/me @" + chat.un + ", vyhrál/a jsi! Tvá výhra je " + outcome[3] + " žetonů! Nyní máš " + updatedTokens + " žetonů. Dobrá práce!")}, 7000); 
                    }
                } 
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

(function () {

    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "staticH";

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "basicBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        startupCap: 1, // 1-200
        startupVolume: 50, // 0-100
        startupEmoji: true, // true or false
        autowoot: true,
        autoskip: false,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: true,
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
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 3,
        skipReasons: [
            ["theme", "Nu prea se potrivește această melodie... "],
            ["op", "Nah,nu această melodie... "],
            ["history", "De câte ori trebuie să mai ascult asta? "],
            ["mix", "Data viitoare. "],
            ["sound", "Melodia se aude prost,sau nu se aude. "],
            ["nsfw", "Opa,melodia este interzisă! "],
            ["unavailable", "Melodia nu poate fi auzită de toți utilizatorii. "]
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
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);

}).call(this);

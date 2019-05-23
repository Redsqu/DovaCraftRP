const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("DovaCraftRP .help");
    console.log("bot on");
});

bot.login("NTgwODQ2OTc1NDc4NTMwMDY4.XOa_5w.6kW4ZcmrIVofxMs09lGhPh_e36s");

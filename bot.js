const Discord = require("discord.js");
const client = new Discord.Client();

const enmap = require("enmap");

const { prefix, token } = require("./config.json");

const axios = require('axios');


const WOKCommands = require('wokcommands')


var LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch');

const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('45.67.218.144', '27121', '76561198137070193', '424174715');




client.on("ready", () => {
  console.log(
    `O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`
  );
  client.user.setActivity(`Mad Manager // .help for commands`);
});


client.on("guildCreate", (guild) => {
  console.log(
    `O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`
  );
  client.user.setActivity(
    `Estou em ${client.guilds.cache.size} servidores. - Developed by: Hasan`
  );
});

client.on("guildDelete", (guild) => {
  console.log(
    `O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`
  );
  client.user.setActivity(
    `Serving ${client.guilds.cache.size} servers - Developed by: Hasan`
  );
});

// constante settings para o metodo do ticket
const settings = new enmap({
  name: "settings",
  autoFetch: true,
  cloneLevel: "deep",
  fetchAll: true,
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const argsteam = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const param = message.content
  .split("chat")
;



  
  // Metodo para digitar no chat
    if (argsteam[0] === "digitar") {
      if (argsteam[1] === "chat") {
      
      rustplus.sendRequest({
        sendTeamMessage: {
            message: message.author.username + ':' + param[1],
        },
    }, (message) => {
        console.log(message);
    });
      
      }
    }

    if (argsteam[0] === "oi") {

      rustplus.sendRequest({
        getTeamInfo: {}
    }, (message) => {

        // console.log(message.response.teamInfo.members.isOnline)

        var nomes = []
        var online = []
        for(x = 0; localStorage.getItem("quantidade") > x; x++) {
          nomes[x] = message.response.teamInfo.members[x].name
          online[x] = message.response.teamInfo.members[x].isOnline
        }

        localStorage.setItem("nomes", nomes)
        localStorage.setItem("online", online)

    });
    console.log("-================================-")
    var nomes = localStorage.getItem('nomes')
    var online = localStorage.getItem('online')

    console.log(online)

    message.channel.send(nomes + online)

    
    }



    if (message.content === '.register') {
      if (message.member.hasPermission('ADMINISTRATOR'))  {

      
      
      message.channel.send(`Hey there ${message.author} , you have successfully initiated the registration process. Please answer the following questions and remember to NOT include the PORT of the server in the IP section`);

          
      }
      
      else {
        message.channel.send('You do not have permission to execute this command')
      }


    // new WOKCommands(client)
    

    }


    if (argsteam[0] === "ligarteto") {
    
      rustplus.turnSmartSwitchOn(10370024, (message) => {
        console.log("getEntityInfo response message: " + JSON.stringify(message));
        // console.log(message.response.success)
        return true; 

      });
      
      if (argsteam[0] === "ligarteto") {
  message.channel.send("You have successfully turned your switch ON")
      }
    
    }

    if (argsteam[0] === "desligarteto") {
    
      rustplus.turnSmartSwitchOff(10370024, (message) => {
        console.log("getEntityInfo response message: " + JSON.stringify(message));
        return true; 
      });

      if (argsteam[0] === "desligarteto") {
        message.channel.send("You have successfully turned your switch OFF")
            }

    }

if (argsteam[0] === "tetostatus") {
var status = ''

  rustplus.getEntityInfo(10370024, (message) => {
  if (message.response.entityInfo.payload.value === false) {
      status = 'The Switch is Currently OFF'
      sendmessage(status)
    }
  else if (message.response.entityInfo.payload.value === true) {
      status = 'The Switch is Currently ON'
      sendmessage(status)
  }
    return true;
  });

  function sendmessage(msg) {
    message.channel.send(msg)
  }

  
}

























if (argsteam[0] === "ligarfora") {
    
  rustplus.turnSmartSwitchOn(10507021, (message) => {
    console.log("getEntityInfo response message: " + JSON.stringify(message));
    // console.log(message.response.success)
    return true; 

  });
  
  if (argsteam[0] === "ligarfora") {
message.channel.send("You have successfully turned your switch ON")
  }

}

if (argsteam[0] === "desligarfora") {

  rustplus.turnSmartSwitchOff(10507021, (message) => {
    console.log("getEntityInfo response message: " + JSON.stringify(message));
    return true; 
  });

  if (argsteam[0] === "desligarfora") {
    message.channel.send("You have successfully turned your switch OFF")
        }

}

if (argsteam[0] === "forastatus") {
var status = ''

rustplus.getEntityInfo(10507021, (message) => {
if (message.response.entityInfo.payload.value === false) {
  status = 'The Switch is Currently OFF'
  sendmessage(status)
}
else if (message.response.entityInfo.payload.value === true) {
  status = 'The Switch is Currently ON'
  sendmessage(status)
}
return true;
});


function sendmessage(msg) {
message.channel.send(msg)
}


}

















else if (message.content === (`${prefix}raid`)) {
  if(message.member.permissions.has('ADMINISTRATOR')) {

  for (let i = 0; i < 5; i++){
// send back "Pong." to the channel the message was sent in
message.channel.send("@everyone RAID @everyone RAID @everyone RAID @everyone @everyone RAID @everyone RAID @everyone RAID @everyone RAID @everyone @everyone RAID @everyone RAID @everyone RAID @everyone RAID @everyone @everyone RAID @everyone RAID @everyone RAID @everyone RAID @everyone @everyone RAID")
  }
}
// else {
//   message.channel.send('Você não tem permissão para usar esse comando!')

// }

}

else if (message.content.startsWith(`${prefix}ip`)) {
  message.channel.send('connect main.vitalrust.com:28015')
}
else if (message.content.startsWith(`${prefix}scrim`)){
  if(message.member.permissions.has('ADMINISTRATOR'))
  message.channel.send('@everyone SCRIM AGORA, VEM PRECISO DE MEMBRO PRA AMASSAR GRINGO RUIM ENTRA SÓ NÃO PODE SER RANDOM MAS TUDO BEM SE FOR RANDOM SÓ NÃO DIRIGE A PALAVRA AO SAK')
else{
  message.channel.send('Você não tem permissão para usar esse comando!')
}
}


});


client.on("ready", () => {
  const Guilds = client.guilds.cache.map(guild => guild.name);
  console.log(Guilds);
});



client.login(token);
rustplus.connect();

// PRA FAZER O STORAGE MONITOR 
// rustplus.on('message', (message) => {
//   if(message.broadcast && message.broadcast.entityChanged){

//       var entityChanged = message.broadcast.entityChanged;
  
//       var entityId = entityChanged.entityId;
//       var value = entityChanged.payload.value;
      
//       console.log("entity " + entityId + " is now " + (value ? "active" : "inactive"));

//   }
// });

// rustplus.on('message', (message) => {
//   if(message.broadcast && message.broadcast.entityChanged){

//       var entityChanged = message.broadcast.entityChanged;
  
//       var entityId = entityChanged.entityId;
//       var value = entityChanged.payload.value;
//       var capacity = entityChanged.payload.capacity;
//       var items = entityChanged.payload.items;
      
//       // only print info when second broadcast is received
//       if(!value){

//           console.log(`entity ${entityId} has a capacity of ${capacity}`);
//           console.log(`entity ${entityId} contains ${items.length} item(s)`);
          
//           // print out the items in this storage entity
//           items.forEach((item) => {
//               console.log(item);
//           });

//       }

//   }
// });





 
// {
//   status = 'The Switch is OFF'
//   sendmessage(status)



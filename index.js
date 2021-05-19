const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';
const fs = require('fs');
const { Server } =  require('http');
var version = 'alfa';
var servers = {};

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  
    client.commands.set(command.name, command);
};
client.on('ready', () => {
    console.log(`Estoy listo! version: ` + version);
})
// mensajes con prefijo
client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'clear'){
      client.commands.get('clear').execute(message, args);
  } else if (command === 'ponteun') {
      client.commands.get('ponteun').execute(message, args);
  } else if (command === 'leave') {
      client.command.get('leave').execute(message, args);
  }
  if (command === 'di'){
    client.commands.get('di').execute(message,args)
  }
  

});
// mensajes sin prefijo
client.on('message', message =>{
  if(message.content.startsWith('wenapo')) {
    message.channel.send('Vieja culia maraca');
  }
})
// -----------------------------------------
// -----------------------------------------

client.login('ODQwMjAyMDQ3NzQyOTM1MDQx.YJUxIg.3mwAF7YYArkrQcBnTzFwUqSwfBQ');

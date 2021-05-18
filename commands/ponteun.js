const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 
module.exports = {
    name: `ponteun`,
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return message.channel.send('Teni que estar en un canal pa usar esto');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Por alguna razon no tienes permisos');
        if (!permissions.has('SPEAK')) return message.channel.send('Por alguna razon no tienes permisos');
        if (!args.length) return message.channel.send('Dime que wea poner po');
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{


            });
 
            await message.channel.send(`<:hankhappy:834451756003360769>`)
 
            return
        }
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{

            });
 
            await message.channel.send(`<:hankhappy:834451756003360769> ***${video.title}***`)
        } else {
            message.channel.send('No se encontro niuna wea');
        }
    }
}
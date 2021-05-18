const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 
module.exports = {
    name: `di`,
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return message.channel.send('Teni que estar en un canal pa usar esto');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Por alguna razon no tienes permisos');
        if (!permissions.has('SPEAK')) return message.channel.send('Por alguna razon no tienes permisos');
        if (!args.length) return message.channel.send('Dime que wea decir po');
 
        if(args[0] === 'epico'){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://www.youtube.com/watch?v=9qSCKSStfeM&ab_channel=PraffulDagaPraffulDaga', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'ah'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/i8Sa0uUyWjI', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'bruh'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/jEBtWvaEbp0', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'diarrea'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/iy8PoE3-y2E', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'dramatic'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/boaDk-Y5veE', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'mohan'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/e1ruAy666lE', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'peo'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/V5HoqcoHCKA', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'pvzwin'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/vISjsjoVqf0', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'risaardilla'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/H00OPgE_huw', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'sus'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/9eKP9kh13ms', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'troleadoputo'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/4_jR3DCQKPo', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'yamete'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/Dkqyt-6foHk', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'risaqla'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/H00OPgE_huw', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'risaqla2'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/mtj6TTm6is8', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return


        }else if(args[0] === 'wenapo'){
            const  connection = await voiceChannel.join();
            const stream  = ytdl('https://youtu.be/CtMW9gVu2B8', {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
            });
            await message.channel.send(`<:hankhappy:834451756003360769>`)
            return
        }
        else{
            message.channel.send(`<:hankserius:834451747502030898>  Me pedi' pura wa' `)
            return
        }
    }
}
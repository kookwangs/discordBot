const{Client, Intents} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client(
        {
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_VOICE_STATES,
            ]
        }
);


client.on('ready',()=>{
    console.log('your bot is ready')
})

client.on('messageCreate', msg=>{
                
    //Tested
        if(msg.content == 'รักกวาง')
                msg.reply('ไปแดกขี้ค่า')
        if(msg.content == 'ควย')
                msg.reply('อย่าหยาบคายนะคะคุณ')

    //has prefix
        if(msg.content == '!มา')
            msg.reply('มาแล้วลูกจ๋า ชุดโกโกวาที่หนูอยากได้ โกโกวาที่หนูอยากใส่ โกโกวาคิมิซึมิด๊าาาาา')
        if(msg.content == '!แจ๋ว')
            msg.reply('ว่าไงคร๊าาาาา มีอัลไลให้รับใช้')
        if(msg.content == '!เก้า')
            msg.reply('ใจร้ายว่ะ')
        

    //startttttt
            if(msg.content == 'ลูกน้อยร้อง')
            msg.reply('ว้าว')

            if(msg.content == 'ลูกสาวร้อง')
            msg.reply('เย่')

            if(msg.content == 'ชุดโกโกวาทำไมโคตร')
            msg.reply('เท่')

            if(msg.content == 'กะเทย')
            msg.reply('มึงสิกะเทย')

            if(msg.content == 'บีบี๋')
            msg.reply('ให้แจ๋วแจ๋วตอบก่อนน้าาา เค้าเล่นเกมอยู่🥺💖')

            if(msg.content == 'ไอกวาง')
            msg.reply('อย่ามาขึ้นไอกับกวางนะ แต่ถ้าขึ้นต้นด้วยไอ ลงท้ายด้วยเลิฟยู ยอมก็ได้🥺')
            
            if(msg.content == 'ไอเหี้ยกวาง')
            msg.reply('มึงสิไอเหี้ย')

            if(msg.content == 'โง่')
            msg.reply('มึงสิโง่')

            if(msg.content == 'ใครน่ารักที่สุดในโลก')
            msg.reply('พี่ลูกกวางไงคะ พี่คนเดียวเท่านั้นในใจหนู งือๆ')

            if(msg.content == '!เก้า')
            msg.reply('ใจร้ายว่ะ')

            if(msg.content == 'พวกเราเป็นเด็ก')
                 msg.reply('ฉันเป็นนางฟ้ามากินไหตี่เหลา')

            if(msg.content == '!ล่อแจ๋ว')
                 msg.reply('🧤รับแจ๋วไปอยู่ด้วยนะคร๊\nhttps://discord.com/api/oauth2/authorize?client_id=953180685080858634&permissions=518654520384&scope=bot')
           

                 if(msg.content == 'ดึง')
                    msg.reply('ออโต้')


            if(msg.content == 'วาโล')
                 msg.reply('เข้าเกมรอเลยพี่ขา🥺')
           
            
            if(msg.content == 'valo')
                 msg.reply('สู้ๆค่ะพี่ ขอให้ชนะ')
            
             if(msg.content == 'Valo')
                 msg.reply('fighting ka bibee')

		
 if(msg.content == 'ไม่ได้ดึงแต่มันตึง')
                 msg.reply('ออโต้')

	  if(msg.content == 'valo ขาด1')
                 msg.reply('valo ขาด1 รับทราบค่ะ')    

         /*   if(msg.content == 'ไก่')
                 msg.reply('<@240089934864711681>')    

		
if(msg.content == 'testtest')
                 msg.reply('<@!981569543514234951>')    

if(msg.content == '<@240089934864711681>')
                 msg.reply('เรียกผัวหนูทำไมคระ')    */





})

client.login(process.env.TOKEN)

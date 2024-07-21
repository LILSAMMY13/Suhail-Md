const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347018347083";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347018347083";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347018347083";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_16_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDc3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDg0LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgyLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICA4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVRHIrdFlRV3FVMmVMd3ZlWjE3N0pwTFJ2cjhmMUtZS3BoY0xQNG41VzZVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItS09tQUtSNVRLZWh2bVA5OHFKdmR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlMjUxYzQ1LTlmNjctNGZiMi1iZWZhLTRjOGUwZGI2NWZkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAyNDksXG4gICAgICAzMCxcbiAgICAgIDE1NCxcbiAgICAgIDc4LFxuICAgICAgODIsXG4gICAgICA2NyxcbiAgICAgIDIxNCxcbiAgICAgIDExNyxcbiAgICAgIDI1NCxcbiAgICAgIDE5MixcbiAgICAgIDI1MyxcbiAgICAgIDcwLFxuICAgICAgNzMsXG4gICAgICA2LFxuICAgICAgMjExLFxuICAgICAgMTgwLFxuICAgICAgMTM4LFxuICAgICAgOTMsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgMzYsXG4gICAgICA3MSxcbiAgICAgIDI0MSxcbiAgICAgIDEyNCxcbiAgICAgIDI0LFxuICAgICAgMTk3LFxuICAgICAgNTcsXG4gICAgICAzOCxcbiAgICAgIDY1LFxuICAgICAgMTIzLFxuICAgICAgMjI2LFxuICAgICAgMjU0LFxuICAgICAgMjI5LFxuICAgICAgNTYsXG4gICAgICAxNixcbiAgICAgIDIyLFxuICAgICAgMzksXG4gICAgICAyNCxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjYzWVFEMlJHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDE4MzQ3MDgzOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjU4Mzc0MjAyMjQ2OTM6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSURvbmZjREVMN285TFFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3L3FPSG1VMjQ2bzhadEhMQk1aM2FVd0hIMEhIajNaeHhSalpBR2JMUXlnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpFTXZFejBTSDQ0VDZacGQ4SWdCZGM2aUpLTlVBNjg0UTBaT2VSMjZKclA0a3hBQUJxanhLY09yYk1EUVk3dmZ0TE5RRC9uT2ZxTlFGNU1FblFEdkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhzcUdXWEdoMWFEemRuTmxibVk2aUxOV05ucTBWcjU0UXNGcno4YWlqVUtsaEt0U0wyc3hRUUM5UGJzeUZxSEo3dklXRks2SnpoQ2xicDF2OFdNY0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTgzNDcwODM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1Nzg1NjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWkJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJaQi5qc29uIjogIntcImtleURhdGFcIjpcImk0a0tFZnFNL3NlS09CNVo4RHNjQlNrRnZBb2F1L01uTXBtWml2S3hGdDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1NTM1NTkwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODc4MDcyNzIzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "LILSAMMY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "online", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

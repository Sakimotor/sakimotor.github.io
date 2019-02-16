/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "[FR/EN] Kusabi Deathrun";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/c_3-resources.assets-443.png",
	"backgrounds/images/c_4b-resources.assets-67.png",
	"backgrounds/images/c_9-resources.assets-309.png",
	"backgrounds/images/LIFE_Cut45-resources.assets-330.png",
	"backgrounds/images/LIFE_Cut48-resources.assets-224.png",
	"backgrounds/images/o1_06-resources.assets-780.png",
	"backgrounds/images/Redroom02-resources.assets-152.png",
	"backgrounds/images/S_Cut13-resources.assets-757.png",
	"backgrounds/images/S_Cut20-resources.assets-906.png",
	"backgrounds/images/shirokuro-resources.assets-342.png",
	"backgrounds/images/Tyousei-resources.assets-195.png",
	"backgrounds/images/VS_04A-resources.assets-873.png",
	"backgrounds/images/VS_05A-resources.assets-877.png",
	"backgrounds/images/VS_06A-resources.assets-485.png",
	"backgrounds/images/Yuki08_3-resources.assets-913.png",
	"backgrounds/images/Yuki09-resources.assets-566.png"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 8000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "hZH17lFLtR0", name: "Investigation, 25Th Style"},
	{youtube: "Am0pvMgayho", name: "Crime Lounge"},
	{youtube: "CrMqsR9zAlU", name: "Citrus Verbena"},
	{youtube: "4PSxkcw_Vr0", name: "Finding My Way"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Kill The Past",
"JABRONI IS HORNY!",
"Did you know these backgrounds and songs are from The Silver Case?"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;

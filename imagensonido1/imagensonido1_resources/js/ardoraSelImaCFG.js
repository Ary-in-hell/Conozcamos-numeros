//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#87DE90"; colorText="#000000"; colorSele="#8682E1";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fPreg="Century Gothic, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="¡Felicidades!"; messageTime="";messageError="Intenta de nuevo";messageErrorG="Intenta de nuevo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#CAE35F"; borderTime="#FF0000";borderError="#CAE35F"; borderAttempts="#FF0000";
var actMaxWidth="400"; actMaxHeight="";indexQ=0;dirMedia="imagensonido1_resources/media/";
var quest=[["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""]];
var media=[["MQ==","","0_1.png",""],["Mg==","","0_2.png",""],["Mw==","","0_3__2_.png",""],["NA==","","0_4.png",""],["NQ==","","0_5.png",""]];
var dat=[["MQ==","MQ==","MQ==","MQ==","MA==","MA=="],["MQ==","Mg==","MA==","MQ==","MA==","MA=="],["MQ==","NA==","MA==","MQ==","MA==","MA=="],["Mw==","MQ==","MA==","MQ==","MA==","MA=="],["Mw==","Mw==","MQ==","MQ==","MA==","MA=="],["Mw==","NQ==","MA==","MQ==","MA==","MA=="],["NA==","Mg==","MA==","MQ==","MA==","MA=="],["NA==","Mw==","MA==","MQ==","MA==","MA=="],["NA==","NA==","MQ==","MQ==","MA==","MA=="],["Mg==","Mg==","MQ==","MQ==","MA==","MA=="],["Mg==","NA==","MA==","MQ==","MA==","MA=="],["Mg==","NQ==","MA==","MQ==","MA==","MA=="],["NQ==","MQ==","MA==","MQ==","MA==","MA=="],["NQ==","Mw==","MA==","MQ==","MA==","MA=="],["NQ==","NQ==","MQ==","MQ==","MA==","MA=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="aW1hZ2Vuc29uaWRvMQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1,2,3,4,5];var in_act=0;
colorText="#000000";colorButton="#0399FF";colorBack="#FFFFFF";colorSele="#FF5856";tiAval=true;
fMenssage="Century Gothic, sans-serif";fActi="Century Gothic, sans-serif";fEnun="Century Gothic, sans-serif";

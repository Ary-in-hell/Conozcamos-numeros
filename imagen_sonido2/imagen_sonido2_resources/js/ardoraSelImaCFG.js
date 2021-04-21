//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#87DE90"; colorText="#000000"; colorSele="#8682FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=0;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fPreg="Century Gothic, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="¡Felicidades!"; messageTime="";messageError="Intenta de nuevo";messageErrorG="Intenta de nuevo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="imagen_sonido2_resources/media/";
var quest=[["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el número?","X",""],["¿Cuál es el núemro?","X",""],["¿Cuál es el número?","X",""]];
var media=[["MQ==","","0_1.png",""],["Mg==","","0_2.png",""],["Mw==","","0_3__2_.png",""],["NA==","","0_4.png",""],["NQ==","","0_5.png",""],["Ng==","","0_6.png",""],["Nw==","","0_7.png",""],["OA==","","0_8.png",""],["OQ==","","0_9.png",""],["MTA=","","0_diez.PNG",""]];
var dat=[["MQ==","MQ==","MQ==","MQ==","MA==","MA=="],["MQ==","Mg==","MA==","MQ==","MA==","MA=="],["MQ==","NA==","MA==","MQ==","MA==","MA=="],["Ng==","Mw==","MA==","MQ==","MA==","MA=="],["Ng==","Ng==","MQ==","MQ==","MA==","MA=="],["Ng==","OA==","MA==","MQ==","MA==","MA=="],["Mg==","Mg==","MQ==","MQ==","MA==","MA=="],["Mg==","Nw==","MA==","MQ==","MA==","MA=="],["Mg==","OQ==","MA==","MQ==","MA==","MA=="],["NA==","NA==","MQ==","MQ==","MA==","MA=="],["NA==","Ng==","MA==","MQ==","MA==","MA=="],["NA==","OA==","MA==","MQ==","MA==","MA=="],["NQ==","MQ==","MA==","MQ==","MA==","MA=="],["NQ==","NQ==","MQ==","MQ==","MA==","MA=="],["NQ==","OA==","MA==","MQ==","MA==","MA=="],["Mw==","MQ==","MA==","MQ==","MA==","MA=="],["Mw==","Mw==","MQ==","MQ==","MA==","MA=="],["Mw==","MTA=","MA==","MQ==","MA==","MA=="],["Nw==","Mw==","MA==","MQ==","MA==","MA=="],["Nw==","NQ==","MA==","MQ==","MA==","MA=="],["Nw==","Nw==","MQ==","MQ==","MA==","MA=="],["OQ==","Mw==","MA==","MQ==","MA==","MA=="],["OQ==","NQ==","MA==","MQ==","MA==","MA=="],["OQ==","OQ==","MQ==","MQ==","MA==","MA=="],["OA==","MQ==","MA==","MQ==","MA==","MA=="],["OA==","NA==","MA==","MQ==","MA==","MA=="],["OA==","OA==","MQ==","MQ==","MA==","MA=="],["MTA=","NA==","MA==","MQ==","MA==","MA=="],["MTA=","OA==","MA==","MQ==","MA==","MA=="],["MTA=","MTA=","MQ==","MQ==","MA==","MA=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="aW1hZ2VuX3NvbmlkbzI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1,2,3,4,5,6,7,8,9,10];var in_act=0;
colorText="#000000";colorButton="#0399FF";colorBack="#FFFFFF";colorSele="#FF5856";tiAval=true;
fMenssage="Century Gothic, sans-serif";fActi="Century Gothic, sans-serif";fEnun="Century Gothic, sans-serif";

//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360;timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=8;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="INICIAR";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#03CAF6"; colorText="#000000"; colorSele="#FE794A";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=0;
var fMenssage="Century Gothic, sans-serif";
var fActi="Century Gothic, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=2; messageOk="¡Felicidades!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#004080"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="UEFSRUpBX2x2bF8y"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["","","","","","","",""];im1=["5.png","6.png","7.png","8.png","9.png","diez.PNG","",""];mp31=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","",""];
var wo2=["","","","","","","",""];im2=["diezbolas.jpg","","8bolas.png","nueve.jpg","7bolas.png","","5bolas.png","6bolas.png"];mp32=["MjU=","","MjM=","MjQ=","MjI=","","MjA=","MjE="];
var cols=4; rows=3; items=6; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjY=","Mjc=","MjQ=","MjI=","MjM=","MjA=","LTE=","LTE="];
var boardGame=[["","","",""],["","","",""],["","","",""]]; dirMedia="PAREJA_lvl_2_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
colorText="#000000";colorButton="#0399FF";colorBack="#FFFFFF";colorSele="#FF5856";tiAval=true;
fMenssage="Century Gothic, sans-serif";fActi="Century Gothic, sans-serif";fEnun="Century Gothic, sans-serif";

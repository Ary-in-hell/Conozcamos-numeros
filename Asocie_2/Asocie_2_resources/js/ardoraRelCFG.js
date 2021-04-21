//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#FEC239"; colorText="#000000"; colorSele="#FF5658";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=0;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades!"; messageTime=""; messageError="Intenta de nuevo"; messageErrorG="Intenta de nuevo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QXNvY2llXzI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img src='Asocie_2_resources/media/9.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/diez.PNG'></div>","<div  align='center'><img src='Asocie_2_resources/media/3__2_.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/4.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/5.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/6.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/7.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/8.png'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["","","","","","","",""]; ansRL=["Ng==","MQ==","Mg==","Nw==","NQ==","MA==","NA==","Mw=="];
var iR=["<div  align='center'><img src='Asocie_2_resources/media/seis.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/diez.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/tres.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/ocho.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/siete.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/cinco.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/nueve.png'></div>","<div  align='center'><img src='Asocie_2_resources/media/cuatro.png'></div>"];
var auR=[6,2,3,8,7,5,1,4];
colorText="#000000";colorButton="#0399FF";colorBack="#FFFFFF";colorSele="#FF5856";tiAval=true;
fMenssage="Century Gothic, sans-serif";fActi="Century Gothic, sans-serif";fEnun="Century Gothic, sans-serif";

function ageindays(){
    var birthday=prompt('HI bro what is your birth year ');
    var age_in_days=(2020-birthday)*356;
    var h1=document.createElement('h1');
    var p=document.createElement('p');
    var bt=document.createElement('button');
    var text_answer=document.createTextNode('your age in days is '+''+age_in_days);

    /*********************************************************/ 
     h1.setAttribute('id','ageindays');
     p.setAttribute('id','your-age');
     p.appendChild(text_answer);
     h1.appendChild(p);
     document.getElementById(p );
     document.getElementById('flex-box-result').appendChild(h1); 

   //  document.getElementById('bottons-container').appendChild(bt); 
    }
    function reset(){
        document.getElementById('ageindays').remove();}

    function generate_img(){
        var img=document.createElement("img");
        img.src="capture.PNG";
        document.getElementById('flex-box-img').appendChild(img)
    }
    /////////////////////////////////////////////////////////
    // this is the challenge 3 rock  paper scissers 
    function rpsgame(yourchoice)
{
       // console.log(yourchoice);
        var humanchoice,botchoice,results,message;
        humanchoice=yourchoice.id;
        botchoice=computerchoice();
        results = decidewinner(humanchoice,botchoice,message); 
        message=results[2];
        rpsFrontEnd(humanchoice,botchoice,message) ;
}
function computerchoice(){ return['rock','paper','scissors'][Math.floor(Math.random()*3)];}                      //this fuction for choosing number randomly
     
function decidewinner(humanchoice,botchoice,message)
{
        var rpsdatabase={
          'rock':{'scissors':1,'rock':.5,'paper':0},
          'paper':{'rock':1,'paper':.5,'scissors':0},
          'scissors':{'paper':1,'scissors':.5,'rock':0}  };// good function to decide the winner 
       var yourScore      =   rpsdatabase [humanchoice][botchoice];
       var computerScore  =   rpsdatabase [botchoice][humanchoice];
    //  return [yourScore,computerScore];
       if (yourScore==0)  { return     [yourScore,computerScore ,{'message':'you lost','color':'red'}] ;}
       if (yourScore==.5) { return    [yourScore,computerScore ,{'message':'you tied','color':'yellow'}] ;}
       else               {return     [yourScore,computerScore ,{'message':'you won','color':'green'}] ;}
}
function rpsFrontEnd(humanImgChoice,botImgChoice,finalMessage){/* this  typed into rpsFrontEnd(humanchoice,botchoice,message) */
  var imgDatabase={                // this for making data base 
         'rock':document.getElementById('rock').src,
         'paper':document.getElementById('paper').src,
         'scissors':document.getElementById('scissors').src
  }                                // this for removing all img
      document.getElementById('deleteall'). remove();
                                   // this for creating 3 div 
      var humanDiv    =document.createElement('div');   
      var botDiv      =document.createElement('div');
      var messageDiv  =document.createElement('div');
                                  
      humanDiv.innerHTML    ="<img src='"+imgDatabase[humanImgChoice]+" ' style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"; // learn how to make style using js
      messageDiv.innerHTML  = "<h1 style='color:"+finalMessage['color']+ ";font-size :30px;padding:30px;'>  " +finalMessage['message']+"</h1>";//write into html file
      botDiv.innerHTML      ="<img src='"+imgDatabase[botImgChoice]+" ' style='box-shadow:0px 10px 50px rgb(1,0,0);'>";
      /*this for put 3divs inside rps*/
      document.getElementById('RPS'). appendChild(humanDiv);
      document.getElementById('RPS'). appendChild(botDiv);
      document.getElementById('RPS'). appendChild(messageDiv);
}

/* other way to decide the winner :
function decidewinner(humanchoice,botchoice){
   if((humanchoice=='rock')&&(botchoice=='rock')){console.log("draw");}
   if(humanchoice=='rock'&&botchoice=='paper'){console.log("com win");}
   if(humanchoice=='rock'&&botchoice=='scissors'){console.log("H WIN");}
   if(humanchoice=='paper'&&botchoice=='rock'){console.log("comp win");}
   if(humanchoice=='paper'&&botchoice=='paper'){console.log("draw");}
   if(humanchoice=='paper'&&botchoice=='scissors'){console.log("comp win");}
   if(humanchoice=='scissors'&&botchoice=='rock'){console.log("comp win");}
   if(humanchoice=='scissors'&&botchoice=='paper'){console.log("H WIN");}
   if(humanchoice=='scissors'&&botchoice=='scissors'){console.log("draw");}
}*/
/*function finalMessage     ( results ) {
  if (results[0]==0) { return  {'message':'you lost','color':'red'};    }
  if (results[0]==.5) { return   {'message':'you tied','color':'yellow'}; }
  else               {return    {'message':'you won','color':'green'};   }

}//function bracket*/


/////////////////////////////////*   this is the 4th challenge : chane the button color randumly and reset it *//////////////////
 
var all_items=document.querySelectorAll(".bt");
console.log(all_items);
 var medo=[];
 var i=0;
while(i<=6){
 medo.push(all_items[i].classList[1]);
 i++;
}
 console.log(medo);
 var mmm=medo.join();
 console.log(mmm)
 /*for (var i = 0; i <all_items.length; i++) {
   
 }*/
function changebuttoncolor(choose){
if (choose.value=="red") {
  console.log("the choose is"+" " +choose.value); 
  red();}
else if (choose.value=="green") {
    console.log("the choose is"+" " +choose.value)
  green();
}
else if (choose.value=="random") {
    console.log("the choose is"+" " +choose.value)
  random();
}
else if (choose.value=="reset") {
    console.log("the choose is"+" " +choose.value)
  reset();
}
};


function red(){
  for (var i = 0; i <= 6; i++) {
    all_items[i].classList.remove(all_items[i].classList[1]);
    all_items[i].classList.add('btr');
  }
}
function green(){for (let i = 0; i <= 6; i++) {

    all_items[i].classList.remove(all_items[i].classList[1]);
    all_items[i].classList.add('btg');
  }}
function random(){
   var n;

  for (let i = 0; i <= 6; i++) {
    n=Math.floor(Math.random()*7);
    all_items[i].classList.remove(all_items[i].classList[1]);
    all_items[i].classList.add(medo[n]);
  }}
function reset(){for (let i = 0; i <= 6; i++) {
    all_items[i].classList.remove(all_items[i].classList[1]);
    all_items[i].classList.add(medo[i]);
  }}

/*this is for challenge 5 */

    var h2 = document.createElement('h2'),
    ampm ="AM",t;
    h2.setAttribute('id','clock-id');

   

    setInterval(updatetime,1000);
function updatetime(){
        t=new Date();
        var Minutes= t.getMinutes();
        var hours=t.getHours();
       var sepclass="<span  > : </span>";
      //  var sep="<span >"+sepclass+"</span>";
     
        if(t.getSeconds()%2 ===1)    {sepclass="<span style='display:none;' > : </span>";}
        if(Minutes<10)               {Minutes="0"+Minutes;}
        if(hours>12)                 {hours-=12;ampm="PM"}
        else if(hours===0)            {hours=12;}
        
          h2.innerHTML = hours+sepclass+Minutes+" "+ampm ;  
          var fatherDiv=document.getElementById("current-time-container ");
          fatherDiv.appendChild(h2);

    }
    /******************* challenge 6 black jack   ******************** */
    var you =[] ;
    var theCHoise,ImgSource;
   var computer =  [];
   var dealerCHoise,ImgdealerSorce;
    var playerScore=0 ;
    var img="";
    var finalJackmMessage="";
    var generateimg;
    var pickIMG =[ [ "1.PNG"  , "j.PNG"  ,"5.PNG"   , "9.PNG"  , "g.PNG"  , "10.PNG" , "3.PNG" , "8.PNG" , "2.PNG"  , "7.PNG" , "6.PNG" , "4.PNG" , "b.PNG"],
                   [ "4.PNG"  , "7.PNG"  ,"9.PNG"   , "3.PNG"  , "1.PNG"  , "6.PNG"  , "b.PNG" , "5.PNG" , "10.PNG" , "g.PNG" , "2.PNG" , "8.PNG" , "j.PNG"],
                   [ "10.PNG" , "b.PNG"  ,"1.PNG"   , "8.PNG"  , "7.PNG"  , "3.PNG"  , "4.PNG" , "j.PNG" , "2.PNG"  , "6.PNG" , "9.PNG" , "g.PNG" , "5.PNG"],
                   [ "9.PNG"  , "5.PNG"  ,"2.PNG"   , "j.PNG"  , "4.PNG"  , "8.PNG"  , "g.PNG" , "1.PNG" , "10.PNG" , "b.PNG" , "6.PNG" , "3.PNG" , "7.PNG"]
                 ];
                 var yourID="";
    /**/ /////////////////////////////////////////
  function blackJack(){
   
    you = randomJackScore(theCHoise,ImgSource);
    console.log("this is human score"+you);  
    var humJScore=document.getElementById("your-result");
    humJScore.innerHTML=""+you[0]+"";
    yourID="yourjack";
    generateimg =  creatCart(you[1]);
    
   }
 function creatCart(YOUU){
    var cart=document.createElement("img");
    cart.src=""+YOUU+"";
    document.getElementById(yourID).appendChild(cart) ;}

  /* stand button fuction */ 
 function computerJack(){
        yourID="dealerjack";
        playerScore=0;ImgSource="";
    for(var i=0;i<10;i++){
            computer = randomJackScore(dealerCHoise,ImgdealerSorce);  
            generateimg= creatCart(computer[1]);
      if(computer[0]<you[0]){
            computer = randomJackScore(dealerCHoise,ImgdealerSorce);  
            generateimg= creatCart(computer[1]);
            if(computer[0]>21){break;}
            if(computer[0]===you[0]){console.log("Draw");finalJackmMessage="Draw";break;}
        }
      else{break;}
        }  // for loop end 
        var compJScore=document.getElementById("computer result");
        compJScore.innerHTML=""+computer[0]+"";

   if((you[0]<computer[0])&&(computer[0]<=21)) {console.log("you lose");finalJackmMessage="you lose";}
   else if((you[0]<computer[0])&&(computer[0]>21)) {console.log("you Win");finalJackmMessage="you Win";}
   else if((computer[0]<you[0])&&(you[0]<=21)) {console.log("you  win");finalJackmMessage=" you win";}
   else if((computer[0]<you[0])&&(you[0]>21)) {console.log("you  lose");finalJackmMessage=" you lose";}
   else if((21<you[0])&&(21<computer[0])&&(you[0]<computer[0])) {console.log("you  win");finalJackmMessage=" you win";}
   else if((21<you[0])&&(21<computer[0])&&(you[0]>computer[0])) {console.log("you  lose");finalJackmMessage=" you lose";}

var Masseg=document.getElementById("Result");
Masseg.innerHTML=""+finalJackmMessage+"";
console.log("the final message in "+" "+":"+finalJackmMessage);

}//computer fun end

    function randomJackScore(theCHoise,ImgSource){
      var r=  Math.floor(Math.random()*4);
      var c=Math.floor(Math.random()*14);
//for(var k=0;k<2;k++){
        
       // return(pickIMG[r][c]);
        switch(pickIMG[r][c]){
          case "1.PNG":
           playerScore = playerScore + 11 ;
            break;
            case "2.PNG":
           playerScore = playerScore + 2 ;
            break;
            case "3.PNG":
           playerScore = playerScore + 3 ;
            break;
            case "4.PNG":
           playerScore = playerScore +  4 ;
            break;
            case "5.PNG":
           playerScore = playerScore + 5 ;
            break;
            case "6.PNG":
           playerScore = playerScore + 6 ;
            break;
            case "7.PNG":
           playerScore = playerScore + 7 ;
            break;
            case "8.PNG":
           playerScore = playerScore + 8 ;
            break;
            case "9.PNG":
           playerScore = playerScore + 9 ;
            break;
            case "10.PNG":
           playerScore = playerScore + 10 ;
            break;
            case "j.PNG":
           playerScore = playerScore + 10 ;
            break;
            case "b.PNG":
           playerScore = playerScore + 10 ;
            break;
            case "g.PNG":
          playerScore =playerScore + 10 ;
            break;
        }
ImgSource=pickIMG[r][c];
        return [ playerScore,ImgSource ];
 
      }
                 /* you.push(humanJackScor);
             console.log("this is human score"+you);*/
                 

    
   
 
 // }

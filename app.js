var scores =[0,0];

var roundscore = 0;

var activePlayer = 0;
var dice;
var gameplaying=true;
var store =0;


//document.querySelector('#current-'+ activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';

document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('current-0').textContent = '0';

function btn(){
    if(gameplaying)
    {
        dice=Math.floor(Math.random()*6)+1;


        //display
        var diceDom=document.querySelector('.dice');
        diceDom.style.display='block';
        if(dice== 1)
        {
   
   
   
        diceDom.src='dice-'+ dice+ '.png';
        //next player
        roundscore=0;
        if(activePlayer ==0)
        {
           document.querySelector('#current-'+ activePlayer).textContent = roundscore;
           document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            activePlayer =1;
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
   
        }
        else{
           document.querySelector('#current-'+ activePlayer).textContent = roundscore;
           document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            activePlayer = 0;
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
        }
   
        roundscore=0;
        store=0;
   
       
   
        
       }
   
   
        else{
           diceDom.src='dice-'+ dice+ '.jpg';
           //add score
           roundscore+=dice;
           if(dice==6 && store==6)
           {
               roundscore=0;
               if(activePlayer ==0)
               {
                  document.querySelector('#current-'+ activePlayer).textContent = roundscore;
                  document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
                   activePlayer =1;
                   document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
          
               }
               else{
                  document.querySelector('#current-'+ activePlayer).textContent = roundscore;
                  document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
                   activePlayer = 0;
                   document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
               }

           }
   
   
   
           document.querySelector('#current-'+ activePlayer).textContent = roundscore;

   
        }
        store = roundscore;
   
   
   
        // round score if only v not rolled a one
        
   
    }




}



function btn2(){
    if(activePlayer ==0)
     {
         
         scores[0]+=roundscore;
         roundscore=0;
         document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
         document.querySelector('#current-'+ activePlayer).textContent = roundscore;
        
        





         if(scores[activePlayer]>=20)
         {
             document.querySelector('#name-'+ activePlayer).textContent= 'WINNER !!!!';
             document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

            document.getElementById('score-0').textContent= scores[0];
            gameplaying=false;
        }
         else {
            activePlayer =1;
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
            document.getElementById('score-0').textContent= scores[0];

         }






        



     }
     else{
        
        
         // This is a great project. 
         scores[1]+=roundscore;
         roundscore=0;
         document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
         document.querySelector('#current-'+ activePlayer).textContent = roundscore;
         
         if(scores[activePlayer]>=20)
         {
             document.querySelector('#name-'+ activePlayer).textContent= 'WINNER !!!!';
             document.querySelector('.dice').style.display = 'none';
             document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.getElementById('score-1').textContent= scores[1];
            gameplaying=false;
         }
         else{
            activePlayer = 0;
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
            document.getElementById('score-1').textContent= scores[1];

         }
        
     }


     

}
function btn3(){
    scores=[0,0];
    roundscore=0;
    activePlayer = 0;
    document.querySelector('#current-'+ 0).textContent = '0';
    document.querySelector('#current-'+ 1).textContent = '0';
    document.getElementById('score-0').textContent= '0';
    document.getElementById('score-1').textContent= '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-'+ 0 +'-panel').classList.add('active');
    document.querySelector('.player-'+ 1 +'-panel').classList.remove('active');
    document.querySelector('#name-'+ 0).textContent= 'Player 1';
    document.querySelector('#name-'+ 1).textContent= 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.add('active');
    gameplaying=true;





}


document.querySelector('.btn-hold').addEventListener('click',btn2);
document.querySelector('.btn-roll').addEventListener('click',btn);

document.querySelector('.btn-new').addEventListener('click',btn3);






















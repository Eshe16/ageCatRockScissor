

//claculat age in days
function ageindays(){
    var birthinyear=prompt("what is your birth year");
    var ageindayss=(2020-birthinyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('your age '+ageindayss+' days of old');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}
function reset(){
    document.getElementById('ageindays').remove();
}

//cat generator
function generateCat(){
    var imge=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    imge.src="images/cat.jpg";
    div.appendChild(imge);
}

//Challenge three rock paper and scissor

function rpsgame(yourChoice){
console.log(yourChoice);

var humChoice, botChoice;
humChoice=yourChoice.id;

botChoice=numberTochoice(randtoInt());
console.log('computer choice',botChoice);

results=decidewinner(humChoice, botChoice);

console.log(results);

message=finalMessage(results);
console.log(message);
rpsFrontEnd(yourChoice.id,botChoice,message);

}



function randtoInt(){
    return Math.floor(Math.random()*3);
}

function numberTochoice(number){
    return['rock','paper','scissor'][number]
}
function decidewinner(yourChoice,computerChoice){
    var rpsDtabase={
        'rock':{'scissor':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissor':0},
        'scissor':{'paper':1, 'scissor':0.5, 'rock':0}

    }
    var yourScore=rpsDtabase[yourChoice][computerChoice];
    var compScore=rpsDtabase[computerChoice][yourChoice];
    return[yourScore,compScore];
}

function finalMessage([yourScore,compScore]){
    if(yourScore === 0){
        return{'message':'you lost', 'color': 'red'};
    } else if(yourScore === 0.5){
        return{'message':'you tied', 'color': 'yellow'};
    } else {
        return{'message':'you win', 'color': 'green'};
                
        }   
    }

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
//remove images
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissor').remove();

var humanDiv=document.createElement('div');
var botDiv=document.createElement('div');
var messageDiv =document.createElement('div');


humanDiv.innerHTML= "<img src='" + imageDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
messageDiv.innerHTML="<h1 style='color:" +finalMessage['color']+";font-size:60px; padding:30px;'>"+finalMessage['message']+"</h1>"
botDiv.innerHTML= "<img src='" + imageDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
 
document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);
}


































    
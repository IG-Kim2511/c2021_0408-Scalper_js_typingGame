let Game_time= 9;

let score = 0;
let time = Game_time;
let isPlaying = false;
let  timeInterval;
let words=[];

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');        // js 10 
const button = document.querySelector('.button');


// js 12 initiate value

init();

function init(){
    getWords()
    wordInput.addEventListener('input',checkMatch())            //js 12
}
function getWords() {
    words = ['hello', 'apple','cherry']
    
}


// js 2, when those values are same, score++

// wordInput.addEventListener('input',checkMatch())             //js 12

function checkMatch() {
    if(wordInput.value.toLowerCase() === wordDisplay.innerHTML.toLowerCase()){
        score++;
        scoreDisplay.innerHTML = score;
        wordInput.value="";
        
    }
    
}

/* wordInput.addEventListener('input',()=>{
    
    if(wordInput.value.toLowerCase() === wordDisplay.innerHTML.toLowerCase()){
        score++;
        scoreDisplay.innerHTML = score;
        wordInput.value="";
        
    }
}) */

 
// js 8 buttonChange
buttonChange('game start');

function buttonChange(a_text) {
    button.innerHTML = a_text;
    a_text === 'game start' ? button.classList.remove('loading')  : button.classList.add('loading');
    
}



//  js  4, click button, and countdown
function countDown() {
    time > 0 ? time-- : isPlaying = false;

    if (isPlaying) {
        clearInterval(timeInterval)       //  js 4-2           
    }

    timeDisplay.innerHTML = time;  
    
    
}

// js 4-3

button.addEventListener('click',run());

function run() {
    // isPlaying=true;
    time= Game_time;
   timeInterval = setInterval(countDown, 1000);    // js 4-2
    
}



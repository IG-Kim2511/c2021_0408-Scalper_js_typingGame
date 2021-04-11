let Game_time= 5;

let score = 0;
let time = Game_time;
let isPlaying = false;
let timeInterval;
let words=[];
let checkInterval;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');        // js 10 
const button = document.querySelector('.button');

const header = document.querySelector('.header');



// js 12 initiate value

init();

function init(){
    getWords()
    wordInput.addEventListener('input',checkMatch())            //js 12
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

function checkStatus() {               //js 12-4          
    if(isPlaying && time === 0){
        buttonChange('end')
        clearInterval(checkInterval)      //js 12-4  
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
// buttonChange('game start');          //js 12

function buttonChange(a_text) {
    button.innerHTML = a_text;
    a_text === 'game start' ? button.classList.remove('loading')  : button.classList.add('loading');
    
}



//  js  4, click button, and countdown
async function countDown() {
    time > 0 ? time-- : isPlaying = false;

    if (isPlaying) {
        clearInterval(timeInterval)       //  js 4-2           
    }

    timeDisplay.innerHTML = time;

}

countDown().then( ()=>{ let time = Game_time;}
    )
// js 4-3


function run() {
    // isPlaying=true;
    time= Game_time;
   timeInterval = setInterval(countDown, 1000);    // js 4-2
   checkInterval = setInterval(checkStatus,50)            //js 12-4       
    
}

button.addEventListener('click',run(), countDown(),buttonChange('loading'));


// js 16 axios & words array
function getWords() {

    axios.get('https://random-word-api.herokuapp.com/word?number=1000')
    .then(function (response) {
        // handle success
        // console.log(response.data);
        // words=response.data;

        response.data.forEach(a_word => {
            if (a_word.length<10) {
                words.push(a_word);                
            }            
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        header.style.innertext('Error');
    })
    .then(function () {
        // always executed
    });

  words = ['hello', 'apple','cherry']
  
  console.log(words)
  
  buttonChange('game start');              //js 12


}
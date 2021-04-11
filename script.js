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
const buttonStop = document.querySelector('.button_stop');
const header = document.querySelector('.header');



// js 2, when those values are same, score++

// wordInput.addEventListener('input',checkMatch())             //js 12

/* function checkMatch() {
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
    
} */


//  js  4, click button, and countdown

/* async function countDown() {
    time > 0 ? time-- : isPlaying = false;

    if (isPlaying) {
        clearInterval(timeInterval)       //  js 4-2           
    }

    timeDisplay.innerHTML = time;

}

countDown().then( ()=>{ let time = Game_time;}
    ) */


// js 4-3

/* function run() {
    // isPlaying=true;
    time= Game_time;
   timeInterval = setInterval(countDown, 1000);    // js 4-2
   checkInterval = setInterval(checkStatus,50)            //js 12-4           
}
button.addEventListener('click',run(), countDown(),buttonChange('loading'));
 */


button.addEventListener('click', run);

function run(){
    /* 1. 버튼이 게임중으로 표시
    2. 카운트 다운
        2-1 . 맞추면 스코어 , 틀리면 다음단어로
    3 . new word show
    4. 단어 맞추면 스코어 */
    buttonChange('gaming...');
    button.classList.add('loading');

    countDown()
}

function countDown() {
    
    // if (time > 0) {
    //     time--;        
    // }  
    // timeDisplay.innerHTML = time;
    timeDisplay.innertext = time;
}



// js 5 Stop game

buttonStop.addEventListener('click',stop);

function stop(params) {
    
}


// js 8 buttonChange

function buttonChange(a_text) {
    button.innerHTML = a_text;
        
}




// buttonChange('game start');          //js 12

/* function buttonChange(a_text) {
    button.innerHTML = a_text;
    a_text === 'game start' ? button.classList.remove('loading')  : button.classList.add('loading');
    
}
 */


// js 12 initiate value

/* init();

function init(){
    getWords()
    wordInput.addEventListener('input',checkMatch())            //js 12
}

 */


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
  
//   buttonChange('game start');              //js 12


}
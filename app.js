const score=document.querySelector('.score');
const startScreen=document.querySelector(".startScreen")
const gameArea=document.querySelector('.gameArea')


// key identification (keydown , keyup)
// whichever key is pressed we can get from
// eventDetails.key  <---will store which key was pressed
// we care about 4 keys [ArrowUp,ArrowDown,Right,Left]


// lets define the keys
const keys={
    ArrowUp:false,
    ArrowDown:false,
    ArrowRight:false,
    ArrowLeft:false
}
document.addEventListener('keydown',keyPress)
document.addEventListener('keyup',keyReleased)
function keyPress(eventDetails){
    let pressedKey=eventDetails.key;
    // The in operator checks if a specified property exists in an object 
    if(pressedKey in keys){
        // otherwise ney keys are added in the
        // object 
    keys[pressedKey]=true;
    }
} 
function keyReleased(eventDetails){
    let releasedKey=eventDetails.key;
    if(releasedKey in keys){
    keys[eventDetails.key]=false;
    
    }
}
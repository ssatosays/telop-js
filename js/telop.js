let count = 0;
let i = 0;
let time;
let list = new Array();
list = ['Hello', 'foooo', 'barrrrrrrr']; 

const stopX = 10;
const stopTime = 400;
const startX = document.body.scrollWidth;

const setMessageTxt = () => {
    let speed = 10;
    let currentX = startX - count * speed;
    const trg = 'target="_blank"';

    if (currentX < stopX){
        currentX = stopX;
    }
    const drift = '<div style="position:absolute;left:' 
        + currentX 
        + 'px"><a href="" '
        + trg
        + ' onmouseover="javascript:clearTimeout(time)" onmouseout="setTimer()" >' 
        + list[i]
        + '</a></div>';
    return drift;
}

const setMessageLine = () => {
    document.getElementById('target').innerHTML = setMessageTxt();
    count++;

    if (count > stopTime){
        count = 0;
        i++;
        if (i == list.length){
            i = 0;
        }
    }
    setTimer();
}

const setTimer = () => {
    setTimeout('setMessageLine()', 20);
}

window.onload = () => {
    setMessageLine();
}

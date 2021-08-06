let count = 0;
let i = 0;
let time;
let list = new Array();

const stopX = 10;
const stopTime = 400;
const startX = document.body.scrollWidth;

const getJSON = () => {
    let res;
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200){
            const data = JSON.parse(req.responseText);
            res = data;
        }
    }
    req.open("GET", "../data/data.json", false);
    req.send(null);
    return res;
}

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
    const res = getJSON();
    res.forEach((ele, index) => {
        list.push(ele.txt);
    });
    setMessageLine();
}

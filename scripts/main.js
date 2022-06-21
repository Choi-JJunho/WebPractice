let myImages = document.querySelector('img');

myImages.onclick = function() {
    let imgsrc = myImages.getAttribute('src');
    if(imgsrc === 'images/firefox-icon.png') {
        myImages.setAttribute('src', 'images/firefox2.png');
    } else {
        myImages.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

function setUserName () {
    let myName = prompt('plz input your name :D');
    if(!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeader.textContent = 'Hello! ' + myName + '!';
}

if(!(localStorage.getItem('name'))) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeader.textContent = 'hi' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
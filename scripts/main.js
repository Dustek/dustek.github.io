let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/protoss.jpg') {
        myImage.setAttribute('src','images/zerg.jpg');
    } else if (mySrc === 'images/zerg.jpg') {
            myImage.setAttribute('src','images/terran.jpg');
    } else {
        myImage.setAttribute('src','images/protoss.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
  }

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUsername();  
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'The cheese of starcraft, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'The cheese of starcraft, ' + storedName;
  }
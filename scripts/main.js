let myImage = document.querySelector('img');
myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/pet-dog') {
        myImage.setAttribute('src', 'images/dog-2.jfif')
    } else {
        myImage.setAttribute('src', 'images/pet-dog');
    }
}

let myButton = document.querySelector('button');
let myTitle = document.querySelector('h1');

function setusername() {
    let myName = prompt('Please enter,your name');
    if (!myName) {
        setusername();
    } else {
        localStorage.setItem('name', myName);
        myTitle.textContent = 'Dog are col,' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setusername();
} else {
    let nameStorage = localStorage('name');
    myTitle.textContent = 'Dog are col,' + nameStorage;
}

myButton.onclick = function () {
    setusername()
}

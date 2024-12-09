const KEY_MY_NAME = "name";
localStorage.setItem(KEY_MY_NAME, "");

const myImage = document.querySelector("img");
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

myImage.onclick = () => {
    const mySrcAttr = myImage.getAttribute("src");
    if (mySrcAttr === "images/firefox_logo.png") {
        myImage.src = "images/firefox_logo_black.png";
    } else {
        myImage.src = "images/firefox_logo.png";
    }
}

if (!localStorage.getItem(KEY_MY_NAME)) {
    promptUserName()
} else {
    const storedName = localStorage.getItem(KEY_MY_NAME);
    setUserNameToHeading(storedName);
}

myButton.onclick = () => {
    promptUserName()
}

function promptUserName() {
    const myName = prompt("あなたの名前は？");

    if (myName === "" || myName === null) return;

    storeUserName(myName);
    setUserNameToHeading(myName);
}

function storeUserName(myName) {
    localStorage.setItem(KEY_MY_NAME, myName);
}

function setUserNameToHeading(myName) {
    myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
}
console.log("Developer-Zahid");
// Get DOM Elements
const playerWrapper = document.querySelector(".player-wrapper");
const playerBackWrapper = document.querySelector(".player-back-wrapper");
const playerMiddleWrapper = document.querySelector(".player-middle-wrapper");
const playerBatteryCover = document.querySelector(".player-battery-cover");
const playerBatteryCoverHead = document.querySelector(".player-battery-cover-head");
const playerVolume = document.querySelector(".player-volume");
const playerButtons= document.querySelectorAll(".player-buttons");
const singleButtons= document.querySelectorAll(".buttons");

// Set how many div you want
let playerWrapperDivElement = 400;
let playerMiddleWrapperDivElement = 80;
let playerButtonsDivElement = 40;

// Create and Append divs into the selected elements
for(let i=1; i <= playerWrapperDivElement; i++){
    let playerWrapperDiv = document.createElement("div");
    let playerBackWrapperDiv = document.createElement("div");
    playerWrapperDiv.classList.add("player-side");
    playerBackWrapperDiv.classList.add("player-side");
    playerWrapper.appendChild(playerWrapperDiv);
    playerBackWrapper.appendChild(playerBackWrapperDiv);
    playerWrapperDiv.style.transform = `translate3d(0,0,${i* (-0.1)}px)`;
    playerBackWrapperDiv.style.transform = `translate3d(0,0,${i* (0.1)}px)`;
}

// Create and Append divs into the selected elements
for(let i=1; i <= playerMiddleWrapperDivElement; i++){
    let batteryCoverDiv = document.createElement("div");
    let batteryCoverHeadDiv = document.createElement("div");
    let playerVolumeDiv = document.createElement("div");
    let playerMiddleDiv = document.createElement("div");
    batteryCoverDiv.classList.add("player-battery-cover-side");
    batteryCoverHeadDiv.classList.add("player-battery-cover-side");
    playerVolumeDiv.classList.add("player-volume-side");
    playerMiddleDiv.classList.add("player-middle-side");
    playerBatteryCover.appendChild(batteryCoverDiv);
    playerBatteryCoverHead.appendChild(batteryCoverHeadDiv);
    playerVolume.appendChild(playerVolumeDiv);
    playerMiddleWrapper.appendChild(playerMiddleDiv);
    playerVolumeDiv.style.transform = `translate3d(0,0,${i* (-0.11)}px)`;
    playerMiddleDiv.style.transform = `translate3d(0,0,${i* (-0.11)}px)`;
    batteryCoverDiv.style.transform = `translate3d(0,0,${i* (0.11)}px)`;
    batteryCoverHeadDiv.style.transform = `translate3d(0,0,${i* (0.11)}px)`;
}

// Create and Append divs into the selected elements
playerButtons.forEach(playerButtonsItems =>{
    for(let i=1; i <= playerButtonsDivElement; i++){
        let div = document.createElement("div");
        div.classList.add("player-buttons-side");
        playerButtonsItems.appendChild(div);
        div.style.transform = `translate3d(0,0,${i* (-0.15)}px)`;
    }
})

// Create and Append divs into the selected elements
singleButtons.forEach(singleButtonsItems =>{
    for(let i=1; i <= playerButtonsDivElement; i++){
        let div = document.createElement("div");
        div.classList.add("buttons-side");
        singleButtonsItems.appendChild(div);
        div.style.transform = `translate3d(0,0,${i* (-0.15)}px)`;
    }
})
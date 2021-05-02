// const playingField = document.getElementById("playing-field")
// const down=document.getElementById("down")
//console.log(down)
//console.log(playingField)
//console.log(down.innerHTML)

//down.innerHTML = "Down"
//console.log(playingField.style.backgroundColor)
//const ball=document.getElementById("block")
//ball.style.backgroundColor="yellow"
// const moveRight = function(){
//     const block = document.getElementById("block")
//     let left = parseInt(block.style.left) || 0
//     left += 15
//     block.style.left = left + "px"
//   }
//   //spot 4
//   const subHeared=document.createElement("h2")
//   subHeared.innerHTML="AAA BBBB HHHH JJJSSS  KKDKK"
//   subHeared.setAttribute("class","sub-header")
//   document.body.appendChild(subHeader)
//====================== spot 5====================

//   const box = document.getElementById("box")

// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }

const block = document.getElementById("block")
const down = document.getElementById("down")
const up = document.getElementById("up")
const right = document.getElementById("right")
const left = document.getElementById("left")
document.addEventListener('keydown', move);

function move(e) {
    if (e.code == "ArrowUp") {
        const block = document.getElementById("block")
        let top = parseInt(block.style.top) || 0
        top -= 15
        block.style.top = top + "px"
    }
    if (e.code == "ArrowDown") {
        const block = document.getElementById("block")
        let top = parseInt(block.style.top) || 0
        top += 15
        block.style.top = top + "px"
    }
    if (e.code == "ArrowLeft") {
        const block = document.getElementById("block")
        let left = parseInt(block.style.left) || 0
        left -= 15
        block.style.left = left + "px"
    }
    if (e.code == "ArrowRight") {
        const block = document.getElementById("block")
        let left = parseInt(block.style.left) || 0
        left += 15
        block.style.left = left + "px"
    }
}

right.onclick = function() {
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
}

left.onclick = function() {
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left -= 15
    block.style.left = left + "px"
}

down.onclick = function() {
    const block = document.getElementById("block")
    let top = parseInt(block.style.top) || 0
    top += 15
    block.style.top = top + "px"
}

up.onclick = function() {
    const block = document.getElementById("block")
    let top = parseInt(block.style.top) || 0
    top -= 15
    block.style.top = top + "px"
}
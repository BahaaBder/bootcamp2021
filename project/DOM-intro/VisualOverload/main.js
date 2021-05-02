
let arr = []
const getRandomColor = function () {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}
///===============================================================================
const checkTheBoxes = function (array) {
  let minBox=0
  let flag=false
  for (let i = 0; i < array.length; i++) {
  
  }
  if(flag){
    let Message=document.createElement("div")
    Message.innerHTML="Nice Job"
    Message.style.background="red"
    document.body.appendChild (Message)
  }
}
//==============================================================================
const makeDivs = function () {
  for (let i = 0; i < 6; i++) {
    let newDiv = document.createElement("div")
    newDiv.style.height = "50px"
    newDiv.style.width = "50px"
    newDiv.style.display = "inline-block"
    newDiv.style.margin = "2px"
    newDiv.style.border = "2px solid black"
    newDiv.onmouseover = function () {
      newDiv.style.backgroundColor = getRandomColor()
      arr.push(newDiv.style.backgroundColor)
      checkTheBoxes(arr)
      console.log(newDiv.style.backgroundColor)
    }
    newDiv.style.backgroundColor = getRandomColor()
    document.getElementById("container").appendChild(newDiv)

  }
}
makeDivs()
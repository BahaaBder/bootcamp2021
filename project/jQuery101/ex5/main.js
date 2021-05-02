const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
]

for (let index of fruits) {
    let newColor = $(`<div class="${index.color}"> ${index.name} </div>`)
    $(index.color).css("background-color", index.color)
    $("body").append(newColor)
}
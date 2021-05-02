let story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
story = "ccc"
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}
let main_check = function (str) {
    let newString = ""
    for (let i = 0; i < str.length; i++) {
        while (str[i] != " ") {
            newString = newString + str[i]
            if(j<str.length)
            {i++}
        }
        add(newString)
        add(" ")
        newString = ""
    }
}

let add = function (str) {
    wordCounts[str]++
}

main_check(story)
console.log(wordCounts)
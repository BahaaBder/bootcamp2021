const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let newGenes=[genes[0],genes[1],genes[4],genes[3],genes[2]]
console.log(newGenes)
newGenes.splice(3,3)
newGenes.push("AZIN2","AZIN2")
newGenes.unshift("FXT")
console.log(newGenes)

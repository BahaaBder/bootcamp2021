let randomByRange = {
    start: 0,
    end: 10,
    [Symbol.iterator]() {
        return {
            current: this.start,
            last: this.end,
            next() {
                if (this.current <= this.last) {
                    this.current++
                    return { done: false, value: Math.ceil(Math.random() * 100) }
                }
                else {
                    return { done: true }
                }
            }
    
    
        }
    }
}

for (let num of randomByRange){
    if(num %2==0){
        console.log(num)
    }
}
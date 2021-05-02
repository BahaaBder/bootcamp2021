const Bank = function() {
    let _startOff = 500
    const depositCash = function(cash) {
        _startOff += cash
    }
    const checkBalance = function() {
        console.log(_startOff)
    }
    return { deposit: depositCash, showBalance: checkBalance }
}

const bank = Bank()
    //console.log(bank._startOff)
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
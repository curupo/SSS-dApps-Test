const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TADAGTEEVR4BF5QL367F5PVSXXFCW3SO63HSZRA")

console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)

const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()

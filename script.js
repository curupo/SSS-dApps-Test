const symbol = require('/node_modules/symbol-sdk')

const GENERATION_HASH = '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836'
const EPOCH = 1637848847
const XYM_ID = '3A8416DB2D53B6C8'
const NODE_URL = 'https://bonsai.anodebank.net:3001'
const NET_TYPE = symbol.NetworkType.TEST_NET

const address = symbol.Address.createFromRawAddress("TADAGTEEVR4BF5QL367F5PVSXXFCW3SO63HSZRA")

console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)

const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()

const repositoryFactory = new symbol.RepositoryFactoryHttp(NODE_URL)
const accountHttp = repositoryFactory.createAccountRepository()

accountHttp.getAccountInfo(address)
  .toPromise()
  .then((accountInfo) => {
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === XYM_ID) {
        const dom_xym = document.getElementById('wallet-xym')
        dom_xym.innerText = `XYM Balance : ${m.amount.compact() / Math.pow(10, 6)}`
      }
    }
  })

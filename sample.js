// JavaScriptの変数制限は３種類
var name = "WEBCAMP"
let name1 = "WEBCAMP"
const name2 = "WEBCAMP"

// 再宣言が可能(let,constは不可)
var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)
// console.logを使用するとデベロッパーツールのConsoleで値が確認できる


// 再代入が可能(constは不可)
var nickname_1 = "taro"
console.log(nickname_1)
nickname_1 = "jiro"
console.log(nickname_1)

let nickname_2 = "taro"
console.log(nickname_2)
nickname_2 = "jiro"
console.log(nickname_2)


// スコープ（有効範囲）,定義した変数の有効範囲
var str = "webcamp" //グローバルスコープ(どこからでも参照できる変数)
function foo() {
  console.log(str)
  var y = "hello" //関数スコープ(有効範囲は関数内のみ)
}
foo()
// console.log(y)←有効範囲外のため、エラーが発生する

// let,constは、ブロックスコープ（ローカルスコープ）の変数を宣言できる
// ブロック：() 、{}で区切られもの
function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
    console.log(y)
  }
  console.log(x)
}
foo()

for (let i = 0; i < 10; i++) {
  console.log(i)
}

function foo() {
  const a = "webcamp"
  {
    const b = "hello webcamp"
    console.log(b)
  }
  console.log(a)
}
foo()















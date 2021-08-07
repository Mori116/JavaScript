let hello = 'Hello World';
alert(hello);
alert('Hello' + 'World');

let orange = 100;
let apple = 120;
if(orange < apple){
  alert('みかんの値段がりんごより安い')
} else if(orange == apple){
  alert('みかんとりんごが同じ値段')
} else {
  alert('みかんの値段がりんごより高い')
}

// 条件式が真（true）である間は繰り返し処理が実行される = falseになると終了
let max = 100;
let num = 1;
let count = 0;
while(num < max){
  num = num * 2;
  count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 決められた回数の処理を繰り返す
// for ( 初期値; 条件式; 増減値 ){
//   繰り返し処理
// }
let i;
let num = 0;
for(i = 1; i < 11; i++){
  num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');

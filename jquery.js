// HTMLと紐づけする必要がある
// HTMLの読み込みが終わってからjQueryが実行されるように記述する必要がある

$(document).ready(function () {
  // $( セレクタ ).メソッド ( パラメータ );
  $('body').html('<h1>Hello jQuery!!</h1>');
});

// 省略形
// $(function(){
//   jQueryプログラムの内容
// });


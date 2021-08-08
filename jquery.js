// // HTMLと紐づけする必要がある
// // HTMLの読み込みが終わってからjQueryが実行されるように記述する必要がある

// $(document).ready(function () {
//   // $( セレクタ ).メソッド ( パラメータ );
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// // 省略形
// // $(function(){
// //   jQueryプログラムの内容
// // });

// cssメソッド複数
$(function(){
  $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px'
  });
});

// cssメソッド１つの場合
$(function(){
  $('.box1').css('background-color','#0000FF');
});

$(function(){
  $('.box1').slideDown();
  // $('.box1').slideUp();
  // $('.box1').hide();
  // $('.box1').show();
  // $('.box1').css({'background-color': '#FF0000'});
});
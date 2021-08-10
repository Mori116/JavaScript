$(function() {
  $('#back a').on('click',function(event){
    // eventはイベントオブジェクトというもので、今回はclickイベントが発生した際の様々な情報をeventという名前の引数に渡される
    $('body, html').animate({
      // animate() は、アニメーション効果を設定するjQueryの関数
      scrollTop:0 // スクロール位置を取得できるメソッド
    }, 800); // 800ミリ秒間（0.8秒間）かけてページの最上部まで移動する
    event.preventDefault(); // aタグの機能を無効にするメソッド
  });
});

// $('.セレクタ名').on('click', function(event) {
//  $('セレクタ名').animate({
//  変化対象のプロパティ名:変化値
//  }, アニメーションの動作時間);
// });
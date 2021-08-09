$(function(){
  // $('.セレクタ名').イベント名(function(){
  //   イベント発生時に行われる処理
  // });
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color':'#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color':'#FF0000'});
  });
});
// box1にマウスオーバーされたときに、処理内容が実行される


// マウスオーバー/マウスアウト時にclass属性が追加、解除されるようにする
$(function(){
  $('.box2').mouseover(function(){
    $('.box2').addClass('box2-ext');
  });
  $('.box2').mouseout(function(){
    $('.box2').removeClass('box2-ext');
  });
});

// マウスクリック時のイベント
$(function(){
  $('.box3').on('click', function(){
    $('.box3').addClass('box3-ext');
  });
  $('.box3').mouseout(function(){
    $('.box3').removeClass('box3-ext');
  });
});

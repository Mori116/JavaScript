$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});
// .children()は、HTML要素直下のすべての子要素を取得する
// ここでのchildrenは「ul要素の子要素」→li要素が対象となる
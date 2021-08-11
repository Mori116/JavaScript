// id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になる
$('#tab-contents .tab[id != "tab1"]').hide();
// $('要素[属性]')：特定の属性を持つ要素のみ取得したい場合
// $('要素[属性 = "値"]')：属性値が特定の値に等しい要素だけを取得したい場合
// $('要素[属性 != "値"]')：属性値が特定の値に等しくない要素だけを取得したい場合


$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active"); // クラスを削除するメソッド
  $(this).addClass("active"); // クラス属性を追加できるメソッド
  $($(this).attr("href")).show(); //href属性を取得し、href属性内の中身を表示する
  event.preventDefault();
});
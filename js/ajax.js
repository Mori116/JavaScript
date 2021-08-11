API_KEY = "be5b2dc24dac50955816b620cfb4993f";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({ //Ajaxを実装するメソッド
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY, // APIにリクエストするURLを指定
      dataType : 'jsonp', // レスポンスとして取得したいデータの型を指定(今回はJSON)
    }).done(function (data){ // done:通信に成功した場合のメソッド
      //通信成功
      // 位置
      $('#place').text(data.name); // $('#id名').text(JSONから欲しい値)
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
       // $(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加される

    }).fail(function (data) { // fail:失敗した場合に記述するメソッド
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});
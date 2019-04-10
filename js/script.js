//外部サイトにジャンプする
function jump(URL){
  //必要に応じて以下のコメントアウトを解除
  /*//jump関数を用いて作成された外部リンクへのクリックイベントをgoogleアナリティクスで取得します。
  gtag('event', URL, {
    'app_name': 'click',
    'screen_name': URL
  });*/
  
  window.open(URL);
}

//サイト内移動をする
function move(fileName){
  location.href = fileName;
}
//外部サイトにジャンプする
function jump(URL){
  //googleアナリティクス
  gtag('event', URL, {
    'app_name': 'click',
    'screen_name': URL
  });
  
  window.open(URL);
}

//サイト内移動をする
function move(fileName){
  location.href = fileName;
}
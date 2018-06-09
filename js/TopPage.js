function toOldPages(){
  if(confirm("旧サイトへジャンプしますか？\n※スマホからはアクセスできません。") == true){
    location.href = "http://shimadaiyouth.bufsiz.jp/";
  }
}

function viewReason(){
  if(confirm("このサイトが作られた理由を見ますか？") == true){
    if(confirm("本当に見ますか？")==true){
      location.href = "../about.html";
     }
  }
}
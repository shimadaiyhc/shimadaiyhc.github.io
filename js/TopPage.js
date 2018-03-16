function enter(){
    pass = prompt("パスワードを入力してください","");
    if(pass != "" && pass != null){
        location.href = pass + '/';
    }
}

function toOldPages(){
    oldpage = confirm("旧サイトへジャンプしますか？\n※スマホからはアクセス不可能です")
    if(oldpage == true){
        location.href = "http://shimadaiyouth.bufsiz.jp/";
    }else{
        alert("キャンセルされました");
    }
}
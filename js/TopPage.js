function enter(){
    pass = prompt("パスワードを入力してください","");
    if(pass != "" && pass != null){
        location.href = pass + '/';
    }
}

function toOldPages(){
        if(confirm("旧サイトへジャンプしますか？\n※スマホからはアクセスできません。") == true){
        location.href = "http://shimadaiyouth.bufsiz.jp/";
    }else{
        alert("キャンセルされました");
    }
}

function viewReason(){
        if(confirm("このサイトが作られた理由を見ますか？") == true){
        if(confirm("本当に見ますか？")==true){
            location.href = "../about.html";
        }else{
            alert("キャンセルされました");
        }
    }else{
        alert("キャンセルされました");
    }
}
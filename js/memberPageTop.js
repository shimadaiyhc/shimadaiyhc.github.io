if(document.referrer.length !=0){
    ref = document.referrer;
    //「https://shimadaiyhc.github.io/」以外からアクセスされた時
    if(ref.indexOf("https://shimadaiyhc.github.io/") != 0){
        document.write("外部サイトからアクセスされました");　//デバッグ用
        document.write(ref);　//デバッグ用
        otherAccessError();
        function otherAccessError(){
            location.href="../error/otherAccessError.html";
        }
    }
    
//URLから直接アクセスされた時
}else{
    document.write("ダイレクトアクセスを確認");　//デバッグ用
    //  /*
    directAccessError();
    function directAccessError(){
        location.href="../error/directAccessError.html";
    }
    //  */
}
document.write("<h1>島大ユース部員専用ページへようこそ！</h1>",
               "<h2>このページは準備中です(._.`)ｺﾞﾒﾝﾈ</h2>",
               "<p>こちらのページには、部則などを載せようかと考えています。<br>尚、こちらのページは、情報漏えい防止の都合上、JavaScriptで記述されています。<br>コーディングしてる中の人の技術が上がるまで、見た目がシンプルなままだと思います。</p>",
               "<h3>© 2017 ShimadaiY.H.C.</h3>");
document.close();
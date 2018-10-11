function toOldPages(){
  if(confirm("旧サイトへジャンプしますか？\n※OBが運営するサーバーに接続します") == true){
    location.href = "http://shimadaiyouth.bufsiz.jp/";
    /*
      ジャンプ先のサイトは既に閉鎖しており、独自ドメインであるhttp://shimadaiyouth.tk/にジャンプするようになっている。
      しかし、2018年10月11日現在、独自ドメインURLにアクセスできなくなっているため、
      .tkドメインの制約によってドメインが失効したか、あるいはサーバー側からアクセスを拒否されているようです。
    */
  }
}
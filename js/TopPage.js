function enter(){
    pass = prompt("パスワードを入力してください","");
    if(pass != "" && pass != null){
        location.href = pass + '/';
    }
}
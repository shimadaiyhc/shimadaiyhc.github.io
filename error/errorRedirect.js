document.write("10秒後、トップページに移動します");
setTimeout("errorRedirect()", 10000);
function errorRedirect(){
    location.href="../";
}
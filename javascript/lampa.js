var image = document.getElementById("lampa");
function bekapcsol(){
    image.src = "pic_bulbon.gif";
    document.getElementById("fel").disabled = true;
    document.getElementById("le").disabled = false;
}
function kikapcsol(){
    image.src = "pic_bulboff.gif";
    document.getElementById("fel").disabled = false;
    document.getElementById("le").disabled = true;
}
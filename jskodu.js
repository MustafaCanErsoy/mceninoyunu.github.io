var yuvarlak = document.getElementById("yuvarlak");
var oyun = document.getElementById("oyun");
var sayici = 0;
var olanSatir = [];
var aralik;
var duble = 0;
function solaDon(){
    var left = parseInt(window.getComputedStyle(yuvarlak).getPropertyValue("left"));
    if(left>0){
        yuvarlak.style.left = left - 2 + "px";
    }
}
function sagaDon(){
    var left = parseInt(window.getComputedStyle(yuvarlak).getPropertyValue("left"));
    if(left<380){
        yuvarlak.style.left = left + 2 + "px";
    }
}
document.addEventListener("keydown", event => {
    if(duble==0){
        duble++;
        if(event.key==="ArrowLeft"){
            aralik = setInterval(solaDon, 1);
        }
        if(event.key==="ArrowRight"){
            aralik = setInterval(sagaDon, 1);
        }
    }
})
document.addEventListener("keyup", event => {
    clearInterval(aralik);
    duble=0;
});
var blocks = setInterval(function(){
    var blockLast = document.getElementById("block"+(sayici-1));
    var boslukLast = document.getElementById("bosluk"+(sayici-1));
    if(sayici>0){
        var blokYukarii = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var boslukYukarii = parseInt(window.getComputedStyle(boslukLast).getPropertyValue("top"));
    }
    if(blokYukarii<400||sayici==0){
        var block = document.createElement("div");
        var bosluk = document.createElement("div");
        block.setAttribute("class", "block");
        bosluk.setAttribute("class", "bosluk");
        block.setAttribute("id", "block"+sayici);
        bosluk.setAttribute("id", "bosluk"+sayici);
        block.style.top = blokYukarii + 100 + "px";
        bosluk.style.top = boslukYukarii + 100 + "px";
        var random = Math.floor(Math.random() * 360);
        bosluk.style.left = random + "px";
        oyun.appendChild(block);
        oyun.appendChild(bosluk);
        olanSatir.push(sayici);
        sayici++;
    }
    var yuvarlakTop = parseInt(window.getComputedStyle(yuvarlak).getPropertyValue("top"));
    var yuvarlakSol = parseInt(window.getComputedStyle(yuvarlak).getPropertyValue("left"));
    var dusme = 0;
    for(var i = 0; i < olanSatir.length;i++){
        let akis = olanSatir[i];
        let blok = document.getElementById("block"+akis);
        let bosluk = document.getElementById("bosluk"+akis);
        let blokyukari = parseFloat(window.getComputedStyle(blok).getPropertyValue("top"));
        let boslukSol = parseFloat(window.getComputedStyle(bosluk).getPropertyValue("left"));
        blok.style.top = blokyukari - 0.5 + "px";
        bosluk.style.top = blokyukari - 0.5 + "px";
        if(blokyukari < -20){
            olanSatir.shift();
            blok.remove();
            bosluk.remove();
        }
        if(blokyukari-20<yuvarlakTop && blokyukari>yuvarlakTop){
            dusme++;
            if(boslukSol<=yuvarlakSol && boslukSol+20>=yuvarlakSol){
                dusme = 0;
            }
        }
    }
})
var count = 0;
var star = 0;
var diiv = document.getElementById("mydiv");
diiv.innerHTML = dat.getMinutes() + ":" + dat.getSeconds() + "." + dat.getMilliseconds();

function update() {
    diiv.innerHTML = count;
    count++;
    }

function starting() {
  var now = new Date(now - start);
  var dat = new Date();
    var start = new Date();
    setInterval(100);
     //nous donne le nombre de seconde a l'horloge
}

function stop(){
  clearTimeout(sto)
}

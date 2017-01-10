var snOpen = document.getElementById("sn-open");
console.log(snOpen);

var snClose = document.getElementById("sn-close");
console.log(snClose);

var sn = document.getElementById("sn");
console.log(sn);


snOpen.addEventListener("click", snAnimOpen);
snClose.addEventListener("click", snAnimClose);

function snAnimOpen(){
  sn.classList.add("open");
}

function snAnimClose(){
  sn.classList.remove("open");
}

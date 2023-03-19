function validateInput() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  
  if (isNaN(a) || isNaN(b)) {
    alert("Mohon masukkan angka !!!");
    return false;
  }
  
  return true;
}

function tambah(){ 
  if (validateInput()) {
    var a = eval(document.getElementById("a").value);
    var b = eval(document.getElementById("b").value);
    var c = a + b;
    document.getElementById("c").value = c;
  }
}

function kurang(){ 
  if (validateInput()) {
    var a = eval(document.getElementById("a").value);
    var b = eval(document.getElementById("b").value);
    var c = a - b;
    document.getElementById("c").value = c;
  }
}

function kali(){ 
  if (validateInput()) {
    var a = eval(document.getElementById("a").value);
    var b = eval(document.getElementById("b").value);
    var c = a * b;
    document.getElementById("c").value = c;
  }
}

function bagi(){ 
  if (validateInput()) {
    var a = eval(document.getElementById("a").value);
    var b = eval(document.getElementById("b").value);
    var c = a / b;
    document.getElementById("c").value = c;
  }
}
function pangkat(){
  if (validateInput()) {
    var a = eval(document.getElementById("a").value);
    var b = eval(document.getElementById("b").value);
    var c = Math.pow(a, b);
    document.getElementById("c").value = c;
  }
}
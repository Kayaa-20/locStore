//localStorage ile yapılan işlemler
//locStorage.js

const notlar=JSON.parse(localStorage.getItem("notes")) || [];

var tIcerik=document.getElementById('icerik');//textarea id
var tblBody=document.getElementById("tblBody");//body table

function create_box(i){
  var colBox=document.querySelector(".colBox");

  var box=document.createElement("div");
    box.setAttribute("class","box");

  var box_1=document.createElement("div");
    box_1.setAttribute("class","box_1");

  var box_2=document.createElement("div");
    box_2.setAttribute("class","box_2");

  var silBtn = document.createElement("button");
    silBtn.setAttribute("id", i);
    silBtn.setAttribute("class", "btnSil");
    silBtn.setAttribute("silId", i);
    silBtn.setAttribute("onclick", "sil("+i+")");//Sil butonu için

  var editBtn = document.createElement("button");
    editBtn.setAttribute("editId", i);
    editBtn.setAttribute("id", i);
    editBtn.setAttribute("class", "eBtn");
    editBtn.setAttribute("onclick", "editShow("+i+")");//Güncelle butonu için 

  var metin=document.createTextNode(notlar[i]); 

  var silIcon= document.createElement("i");
    silIcon.setAttribute("class","fas fa-trash");

  var editIcon=document.createElement("i");
    editIcon.setAttribute("class","far fa-edit");

  silBtn.appendChild(silIcon);
  editBtn.appendChild(editIcon);

  box_1.appendChild(metin);

  box_2.appendChild(editBtn);
  box_2.appendChild(silBtn);

  box.appendChild(box_2);
  box.appendChild(box_1);
  colBox.appendChild(box);
}

box_ekle();
function box_ekle(){
  for (var i = 0 ; i < notlar.length; i++) {
      create_box(i);
    }
}


//SİL İŞLEMLERİ İÇİN
function sil(sil_id){
  var id=sil_id;
  var box= document.querySelector(".box");
    box_sil();
    notlar.splice(id,1);

    localStorage.setItem("notes", JSON.stringify(notlar));
    box_ekle();
    alert("Notunuz silindi !");

    //Güncelleme işlemi yapıldıktan sonra silme işlemi yapıldığında ekle butonunun gelmesi için
    document.getElementById("ekleBtn").style.display="block";
    document.getElementById("eBtn").style.display="none";
}

function box_sil() {
  //tek tek sildiği için döngüye aldım
  for (var i = notlar.length - 1; i >= 0; i--) {
    var box= document.querySelector(".box");
    var colBox=document.querySelector(".colBox");
    colBox.removeChild(box);
  }
}

//GÜNCELLE İŞLEMLERİ
function editShow(edit_id){
  tIcerik.value=notlar[edit_id];
  var btn=document.getElementById("eBtn");
  document.getElementById("ekleBtn").style.display="none";
  btn.style.display="block";
     btn.setAttribute("onclick", "edit("+edit_id+")");
}

function edit(edit){
  notlar[edit]=tIcerik.value;
  localStorage.setItem("notes",JSON.stringify(notlar));
  box_ekle();
  box_sil();
  document.getElementById("ekleBtn").style.display="block";
  document.getElementById("eBtn").style.display="none";
  tIcerik.value="";
  alert("İçeriğiniz başarıyla düzenlendi :)");
}


//EKLE İŞLEMLERİ
function ekle(){
  notlar.push(icerik.value);
  localStorage.setItem("notes", JSON.stringify(notlar));
  tIcerik.value="";
  consoleShow();
  createElement();
}

function createElement(){
   var i;
    i=notlar.length-1;
    create_box(i);
}

function consoleShow(){
  var gelenNotlar=JSON.parse(localStorage.getItem("notes"));
  console.log(gelenNotlar);
}




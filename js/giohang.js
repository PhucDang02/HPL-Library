document.getElementById("showcart").style.display = "none";
var giohang = new Array();
showgiohang();

function themgiohang(x){
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].children[0].src;
    var ten = boxsp[1].children[0].innerText;
    var gia = boxsp[1].children[4].children[0].children[1].innerText;
  
    var sp = new Array(hinh, ten, gia);
    giohang.push(sp);   
    // console.log(giohang);
    localStorage.setItem('giohang',JSON.stringify(giohang));
    showcountsp();
}

function showcountsp(){
    document.getElementById("countsp").innerHTML=giohang.length;
}
function showcart(){
  var x =  document.getElementById("showcart");
  if(x.style.display=="block"){
      x.style.display="none";
  }else{
      x.style.display="block";
  }
  showmycart();
}

function showmycart(){
    var tong = 0;
    var tong1 = 0;
    var ttgh = "";
    for(let i = 0;i<giohang.length;i++){   
      tong +=  parseInt(giohang[i][2])*1000;
      tong1 = tong.toLocaleString('de-DE');
        ttgh+='<tr>'+
        '<td>'+(i +1)+'</td>'+
        '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
        '<td>'+giohang[i][1]+'</td>'+
        '<td>'+giohang[i][2]+'</td>'+
        '<td>'+giohang[i][2]+'</td>'+
        '<td>'+'<button onclick="xoa(this)">Xóa</button>'+'</td>'+
      '</tr>';
    }

    ttgh += '<tr>'+
    '<th colspan="5">Tổng tiền</th>'+
    '<th>'+tong1+'đ</th>'+
    '</tr>';
    document.getElementById("mycart").innerHTML=ttgh;
}

function xoa(x){
  var tr = x.parentElement.parentElement;
  var ten = tr.children[2].innerText;
  tr.remove();
  for(let i = 0;i<giohang.length;i++){
    if(giohang[i][1] == ten){
      giohang.splice(i,1);
    }
  }
  showmycart();
  showcountsp();
  localStorage.setItem('giohang',JSON.stringify(giohang));
}

function xoatatca(){
  giohang = [];
  showmycart();
  showcountsp();
  localStorage.setItem('giohang',JSON.stringify(giohang));
}

function showgiohang(){
    var gh =  localStorage.getItem('giohang');
    var giohang = JSON.parse(gh);
    var tong3 = 0;
    var tong2 = 0;
    var ttgh = "";
    for(let i = 0;i<giohang.length;i++){
        
      tong3 +=  parseInt(giohang[i][2])*1000;
      tong2 = tong3.toLocaleString('de-DE');
        ttgh+='<tr>'+
        '<td>'+(i +1)+'</td>'+
        '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
        '<td>'+giohang[i][1]+'</td>'+
        '<td>'+giohang[i][2]+'</td>'+
        '<td>'+giohang[i][2]+'</td>'+
        
      '</tr>';
    }

    ttgh += '<tr>'+
    '<th colspan="4">Tổng tiền</th>'+
    '<th>'+tong2+'đ</th>'+
    '</tr>';
    document.getElementById("mycart1").innerHTML=ttgh;
}
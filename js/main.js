function hiddenMenu() {
    var hidden = document.getElementById('page__menu--right');
    if (hidden.style.display === 'none') {
        hidden.style.display = 'block';
    } else hidden.style.display = 'none';
}
$(function() {
    $("#page__menu").load("/html/menu.html");
});
$(function() {
    $("#page__footer").load("/html/footer.html");
});
$(function() {
    $("#page__partner").load("/html/partner.html");
});
$(function() {
    $("#page__partner--slide").load("/html/slide.html");
});

function chuyenTrang(){
    window.location="/html/home_index.html";
};

function checkRegisEmail(){
    var data = new Array();
    data[0] = document.getElementById('name').value;
    data[1] = document.getElementById('surname').value;
    data[2] = document.getElementById('Email').value;
    data[3] = document.getElementById('pass').value;
    data[4] = document.getElementById('repass').value;
    
    var myerror = new Array();
    myerror[0] = "Bạn chưa nhập Tên";
    myerror[1] = "Bạn chưa nhập Họ";
    myerror[2] = "Bạn chưa nhập Email";
    myerror[3] = "Bạn chưa nhập Mật khẩu";
    myerror[4] = "Bạn chưa xác nhận lại mật khẩu";

    var nearby = new Array("notname", "notsurname", "notemail", "notpass", "notrepass");
    
    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        }else{
            document.getElementById(div).innerHTML = "";
        }
    }
    if ((i=4)&& (data[i]==data[i-1])){
        document.getElementById('notrepass').innerHTML = "<span style='color:black'>Mật khẩu đã khớp</span>";
    }else {
        document.getElementById('notrepass').innerHTML = "Mật khẩu chưa khớp";
    }

    if ( document.getElementById('accept').checked ==true){
        document.getElementById('notaccept').innerHTML ="<span style='color:black'>Bạn đã chấp nhận điều khoản sử dụng của công ty</span>";
        }
        else{
            document.getElementById('notaccept').innerHTML ="Bạn chưa chấp nhận điều khoản sử dụng của công ty";
        } 
}

function checkRegisPhone(){
    var data = new Array();
    data[0] = document.getElementById('name').value;
    data[1] = document.getElementById('surname').value;
    data[2] = document.getElementById('Phone').value;
    data[3] = document.getElementById('pass').value;
    data[4] = document.getElementById('repass').value;
    
    var myerror = new Array();
    myerror[0] = "Bạn chưa nhập Tên";
    myerror[1] = "Bạn chưa nhập Họ";
    myerror[2] = "Bạn chưa nhập Số di động";
    myerror[3] = "Bạn chưa nhập Mật khẩu";
    myerror[4] = "Bạn chưa xác nhận lại mật khẩu";

    var nearby = new Array("notname", "notsurname", "notphone", "notpass", "notrepass");
    
    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        }else{
            document.getElementById(div).innerHTML = "";
        }
    }
    if ((i=4)&& (data[i]==data[i-1])){
        document.getElementById('notrepass').innerHTML = "<span style='color:black'>Mật khẩu đã khớp</span>";
    }else {
        document.getElementById('notrepass').innerHTML = "Mật khẩu chưa khớp";
    }

    if ( document.getElementById('accept').checked ==true){
        document.getElementById('notaccept').innerHTML ="<span style='color:black'>Bạn đã chấp nhận điều khoản sử dụng của công ty</span>";
        }
        else{
            document.getElementById('notaccept').innerHTML ="Bạn chưa chấp nhận điều khoản sử dụng của công ty";
        }
}

function checkRegisEmail(){
    var data = new Array();
    data[0] = document.getElementById('name').value;
    data[1] = document.getElementById('surname').value;
    data[2] = document.getElementById('Email').value;
    data[3] = document.getElementById('pass').value;
    data[4] = document.getElementById('repass').value;
    
    var myerror = new Array();
    myerror[0] = "Bạn chưa nhập Tên";
    myerror[1] = "Bạn chưa nhập Họ";
    myerror[2] = "Bạn chưa nhập Email";
    myerror[3] = "Bạn chưa nhập Mật khẩu";
    myerror[4] = "Bạn chưa xác nhận lại mật khẩu";

    var nearby = new Array("notname", "notsurname", "notemail", "notpass", "notrepass");
    
    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        }else{
            document.getElementById(div).innerHTML = "";
        }
    }
    if ((i=4)&& (data[i]==data[i-1])){
        document.getElementById('notrepass').innerHTML = "<span style='color:black'>Mật khẩu đã khớp</span>";
    }else {
        document.getElementById('notrepass').innerHTML = "Mật khẩu chưa khớp";
    }

    if ( document.getElementById('accept').checked ==true){
        document.getElementById('notaccept').innerHTML ="<span style='color:black'>Bạn đã chấp nhận điều khoản sử dụng của công ty</span>";
        }
        else{
            document.getElementById('notaccept').innerHTML ="Bạn chưa chấp nhận điều khoản sử dụng của công ty";
        } 
}

function checkSignEmail(){
    var data = new Array();
    data[0] = document.getElementById('Email').value;
    data[1] = document.getElementById('pass').value;
    
    var myerror = new Array();
    myerror[0] = "Bạn chưa nhập Email";
    myerror[1] = "Bạn chưa nhập Mật khẩu";
    
    var nearby = new Array("notemail", "notpass");
    
    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        }else{
            document.getElementById(div).innerHTML = "";
        }
    }
}

function checkSignPhone(){
    var data = new Array();
    data[0] = document.getElementById('Phone').value;
    data[1] = document.getElementById('pass').value;
    
    var myerror = new Array();
    myerror[0] = "Bạn chưa nhập Số di động";
    myerror[1] = "Bạn chưa nhập Mật khẩu";
    
    var nearby = new Array("notphone", "notpass");
    
    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        }else{
            document.getElementById(div).innerHTML = "";
        }
    }
}





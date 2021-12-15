// check();

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

function chuyenTrang() {
    window.location = "/html/home_index.html";
};

function checkRegisEmail() {
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
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "";
        }
    }
    if ((i = 4) && (data[i] == data[i - 1])) {
        document.getElementById('notrepass').innerHTML = "<span style='color:black'>Mật khẩu đã khớp</span>";
    } else {
        document.getElementById('notrepass').innerHTML = "Mật khẩu chưa khớp";
    }

    if (document.getElementById('accept').checked == true) {
        document.getElementById('notaccept').innerHTML = "<span style='color:black'>Bạn đã chấp nhận điều khoản sử dụng của công ty</span>";
    } else {
        document.getElementById('notaccept').innerHTML = "Bạn chưa chấp nhận điều khoản sử dụng của công ty";
    }
}

function checkRegisPhone() {
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
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "";
        }
    }
    if ((i = 4) && (data[i] == data[i - 1])) {
        document.getElementById('notrepass').innerHTML = "<span style='color:black'>Mật khẩu đã khớp</span>";
    } else {
        document.getElementById('notrepass').innerHTML = "Mật khẩu chưa khớp";
    }

    if (document.getElementById('accept').checked == true) {
        document.getElementById('notaccept').innerHTML = "<span style='color:black'>Bạn đã chấp nhận điều khoản sử dụng của công ty</span>";
    } else {
        document.getElementById('notaccept').innerHTML = "Bạn chưa chấp nhận điều khoản sử dụng của công ty";
    }
}

function checkRegisEmail() {
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
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "";
        }
    }
    if ((i = 4) && (data[i] == data[i - 1])) {
        document.getElementById('notrepass').innerHTML = "<span style='color:black'>Mật khẩu đã khớp</span>";
    } else {
        document.getElementById('notrepass').innerHTML = "Mật khẩu chưa khớp";
    }

    if (document.getElementById('accept').checked == true) {
        document.getElementById('notaccept').innerHTML = "<span style='color:black'>Bạn đã chấp nhận điều khoản sử dụng của công ty</span>";
    } else {
        document.getElementById('notaccept').innerHTML = "Bạn chưa chấp nhận điều khoản sử dụng của công ty";
    }
}

function checkSignEmail() {
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
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "";
        }
    }
}

function checkSignPhone() {
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
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "";
        }
    }
}

function check() {
    app.use(express.static('public'));
}
/*hiện thị inforTours*/
function loadInforTours(n) {
    fetch("../json/inforTours.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
            if (n === 0) {
                n = data.inforTours.length;
            }
            for (let i = 0; i < n; i++) {
                p = data.inforTours[i];
                var left = document.createElement("div");
                left.className = 'tour--item';
                left.innerHTML = '<div class="tour--item-pic"><img src="' + p.img + '" alt=""></div>' +
                    '<div class="tour--item--content"><div class="middle--item-content flexrow"><div class="tour--item--content--left">' + '<p class="title text-center">' + p.title + '</p>' +
                    '<p class="title_province text-center"><i class="fas fa-map-pin" style="color: brown;"></i> ' + p.province + '</p>' +
                    '</div><div class="tour--item--content--right price">' + p.price + ' </div></div>' +
                    '<p class="title-script">' + p.script + '</p>' + '</div>' + '<div class="btn-detail btn-medium btn"><a href="' + p.detail + '">DETAILS</a></div>';
                document.getElementById("jsonData").appendChild(left);
            }
        }).catch(function(error) {
            alert("Error:" + error.message);
        })
}
// Check nội dung send now
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var mess = document.getElementById("message").value;
   if (name == null || name == "") {
      document.getElementById("namespan").innerHTML = "<b>" + 'Bạn vui lòng điền tên' + "</b>";
          return false;
   } else if (email == null || email == "") {
      document.getElementById("emailspan").innerHTML = "<b>" + 'Bạn vui lòng điền email' + "</b>";
          return false;
   } else if (phone == null || phone == "") {
      document.getElementById("phonespan").innerHTML = "<b>" + 'Bạn vui lòng điền số điện thoại' + "</b>";
          return false;
   }else if (mess == null || mess == "") {
      document.getElementById("messspan").innerHTML = "<b>" + 'Bạn vui lòng điền nội dung' + "</b>";
          return false;
   }

   
   var regExp =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
   var regExp1 = /^(0[234][0-9]{8}|1[89]00[0-9]{4})$/;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   if (!regExp.test(email)) {
       document.getElementById("emailspan").value ="";
       document.getElementById("emailspan").innerHTML = "<b>" + 'email không hợp lệ' + "</b>";
      document.getElementById("email").value ="";
      document.getElementById("email").focus();

      return false;
   } else if (!regExp1.test(phone)){
       document.getElementById("phonespan").value ="";
       document.getElementById("phonespan").innerHTML = "<b>" + 'phone không hợp lệ' + "</b>";
      document.getElementById("phone").value ="";
      document.getElementById("phone").focus();

      return false;
   }
   else {

      document.getElementById("sendnow").innerHTML = "<b>" + 'Cảm ơn về tin nhắn này' + "</b>"
      
   }
}
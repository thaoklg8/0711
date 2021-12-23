// check();
function signout() {
    localStorage.clickcount = 0;
}



/*ẩn hiện menu*/
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

//kiểm tra đăng nhập bằng Email
function checkSigninEmail() {
    var dataInput = new Array();
    dataInput[0] = document.getElementById('Email').value;
    dataInput[1] = document.getElementById('pwd').value;

    var myerror = new Array();
    myerror[0] = "Bạn chưa nhập Email";
    myerror[1] = "Bạn chưa nhập Mật khẩu";

    var nearby = new Array("notemail", "notpwd");
    for (i in dataInput) {
        var error = myerror[i];
        var div = nearby[i];
        if (dataInput[i] == "") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "";
            fetch("/json/users.json")
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error("HTTP error, status: " + response.status)
                    }
                    return response.json();
                })
                .then(function(data) {
                    let n = data.users.length;
                    for (let j = 0; j < n; j++) {
                        let emailUser = data.users[j];
                        let pwdUser = data.users[j];
                        if ((dataInput[0] == emailUser.email) && (dataInput[1] == pwdUser.password)) {
                            localStorage.clickcount = 1;
                            localStorage.email = dataInput[0];
                            window.location = "/html/home_index.html";
                            break;
                        } else {
                            if (j == n - 1) {
                                document.getElementById("notpwd").innerHTML = "Tài khoản không chính xác";
                            }
                        }
                    }
                });
        }
    }
};

//kiểm tra đăng nhập Signin bằng Số di động
function checkSigninPhone() {
    var dataInput = new Array();
    dataInput[0] = document.getElementById('Phone').value;
    dataInput[1] = document.getElementById('pwd').value;

    var myerror = new Array();
    myerror[0] = "Bạn chưa nhập Số di động";
    myerror[1] = "Bạn chưa nhập Mật khẩu";

    var nearby = new Array("notphone", "notpwd");

    for (i in dataInput) {
        var error = myerror[i];
        var div = nearby[i];
        if (dataInput[i] == "") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "";
            fetch("/json/users.json")
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error("HTTP error, status: " + response.status)
                    }
                    return response.json();
                })
                .then(function(data) {
                    let n = data.users.length;
                    for (let j = 0; j < n; j++) {
                        let phoneUser = data.users[j];
                        let pwdUser = data.users[j];
                        if ((dataInput[0] == phoneUser.phone) && (dataInput[1] == pwdUser.password)) {
                            localStorage.clickcount = 1;
                            window.location = "/html/home_index.html";
                            break;
                        } else {
                            if (j == n - 1) {
                                document.getElementById("notpwd").innerHTML = "Tài khoản không chính xác";
                            }
                        }
                    }
                });
        }
    }
};

//kiểm tra đăng ký
function checkRegister() {
    var data = new Array();
    data[0] = document.getElementById('name').value;
    data[1] = document.getElementById('Email').value;
    data[2] = document.getElementById('Phone').value;
    data[3] = document.getElementById('pwd').value;
    data[4] = document.getElementById('repwd').value;

    var myerror = new Array();
    myerror[0] = "Bạn chưa nhập Tên";
    myerror[1] = "Bạn chưa nhập Email";
    myerror[2] = "Bạn chưa nhập Số điện thoại";
    myerror[3] = "Bạn chưa nhập Mật khẩu";
    myerror[4] = "Bạn chưa xác nhận lại mật khẩu";

    var nearby = new Array("notname", "notemail", "notphone", "notpwd", "notrepwd");

    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "";
            if ((i = 4) && (data[i] == data[i - 1]) && (data[i] != "")) {
                if (document.getElementById('accept').checked == true) {
                    localStorage.clickcount = 1;
                    window.location = "/html/home_index.html";
                } else {
                    document.getElementById('notaccept').innerHTML = "Bạn chưa chấp nhận điều khoản sử dụng của công ty";
                }
            } else {
                document.getElementById('notrepwd').innerHTML = "Mật khẩu chưa khớp";
            }
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
                    '<div class="tour--item--content"><div class="middle--item-content flexrow"><div class="tour--item--content--left">' + '<p class="title text-center"id="t11111">' + p.title + '</p>' +
                    '<p class="title_province text-center"><i class="fas fa-map-pin" style="color: brown;"></i> ' + p.province + '</p>' +
                    '</div><div class="tour--item--content--right price">' + p.price + ' </div></div>' +
                    '<p class="title-script">' + p.script + '</p>' + '</div>' + '<div class="btn-detail btn-medium btn" onclick="sendIDTour(p.title)"><a href="' + p.detail + '">DETAILS</a></div>';
                document.getElementById("jsonData").appendChild(left);
            }
        }).catch(function(error) {
            alert("Error:" + error.message);
        });
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
    } else if (mess == null || mess == "") {
        document.getElementById("messspan").innerHTML = "<b>" + 'Bạn vui lòng điền nội dung' + "</b>";
        return false;
    }


    var regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var regExp1 = /^(0[234][0-9]{8}|1[89]00[0-9]{4})$/;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if (!regExp.test(email)) {
        document.getElementById("emailspan").value = "";
        document.getElementById("emailspan").innerHTML = "<b>" + 'Email không hợp lệ' + "</b>";
        document.getElementById("email").value = "";
        document.getElementById("email").focus();

        return false;
    } else if (!regExp1.test(phone)) {
        document.getElementById("phonespan").value = "";
        document.getElementById("phonespan").innerHTML = "<b>" + 'Phone không hợp lệ' + "</b>";
        document.getElementById("phone").value = "";
        document.getElementById("phone").focus();

        return false;
    } else {

        document.getElementById("sendnow").innerHTML = "<b>" + 'Cảm ơn về tin nhắn này!' + "</b>"

    }
}

function hiddenSend() {
    var hidden = document.getElementById('hidden')
    if (hidden.style.display === 'none') {
        hidden.style.display = 'block';
    } else hidden.style.display = 'none';
}

//search ở menu
function searchTour() {
    var data = document.getElementById("dataSearch").value;
    if (data.length > 0) {
        var div = document.createElement("div");
        div.className = 'page__content--tour';
        div.id = 'jsonData';
        document.getElementById("parent").appendChild(div);
        var parent = document.getElementById("parent");
        var child = document.getElementById("jsonData");
        parent.replaceChild(div, child);
        loc();
    } else {
        alert("Vui lòng nhập địa điểm để tìm kiếm!");
    }
}

function loc() {
    var result = true;
    fetch("../json/inforTours.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
            var textInput = document.getElementById("dataSearch").value;
            p = data.inforTours;
            let n = p.length;
            var province;
            var title;
            var script;
            for (let i = 0; i < n; i++) {
                province = p[i].province.toUpperCase().search(textInput.toUpperCase());
                title = p[i].title.toUpperCase().search(textInput.toUpperCase());
                script = p[i].script.toUpperCase().search(textInput.toUpperCase());
                if (province > 0 || title > 0 || script > 0) {
                    loadInforToursID(i);
                    result = false;
                }
            }
            if (result) {
                alert("Không có tour phù hợp, thử từ khóa khác!");
                loadInforTours(0);
            }
        }).catch(function(error) {
            alert("Error:" + error.message);
        });


}

/*hiện thị inforTours theo ID*/
function loadInforToursID(id) {
    fetch("../json/inforTours.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
            p = data.inforTours[id];
            var left = document.createElement("div");
            left.className = 'tour--item';
            left.innerHTML = '<div class="tour--item-pic"><img src="' + p.img + '" alt=""></div>' +
                '<div class="tour--item--content"><div class="middle--item-content flexrow"><div class="tour--item--content--left">' + '<p class="title text-center" >' + p.title + '</p>' +
                '<p class="title_province text-center"><i class="fas fa-map-pin" style="color: brown;"></i> ' + p.province + '</p>' +
                '</div><div class="tour--item--content--right price">' + p.price + ' </div></div>' +
                '<p class="title-script">' + p.script + '</p>' + '</div>' + '<div class="btn-detail btn-medium btn" onclick="sendIDTour(p.title)"><a href="' + p.detail + '">DETAILS</a></div>';
            document.getElementById("jsonData").appendChild(left);
        }).catch(function(error) {
            alert("Error:" + error.message);
        });
}
//
function loadUserName() {
    fetch("/json/users.json")
        .then(response => response.json())
        .then(
            function(data) {
                for (let i = 0; i < data.users.length; i++) {
                    u = data.users[i];
                    if (u.email == localStorage.email)
                        localStorage.userName = u.userName;
                }
            }
        );

    if (localStorage.clickcount == 1) {
        // window.onload = function() {
        document.getElementById("sign--register").innerHTML = "";
        document.getElementById("sign--register1").innerHTML = "<span style='color:red; margin-top:11px;margin-left:-15px'>" + localStorage.userName + "</span>";
        document.getElementById("button__signout").innerHTML = "Sign out";
        document.getElementById("button__signout--submenu").innerHTML = "Sign out";
        //}
    }
}

function signout() {
    localStorage.clickcount = 0;
}

//trang DETAIL
//load detail cua tour theo id duoc chon

function sendIDTour(input) { /*lỗi ở đâyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy*/
    fetch("../json/details.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
            p = data.details;
            let n = p.length;
            var num;
            for (let i = 0; i < n; i++) {
                num = p[i].title.search(input);
                console.log(num);
                if (num > -1) {
                    localStorage.idtour = i;
                    break;
                }
            }
        }).catch(function(error) {
            alert("Error: " + error.message);
        });
}


function loadDetailTour() {
    // var div = document.createElement("div");
    // div.className = 'page__content--discription part--left';
    // div.id = 'detailTour';
    // div.innerHTM = "hi";
    // document.getElementById("parent").appendChild(div);
    // var parent = document.getElementById("parent");
    // var child = document.getElementById("detailTour");
    // parent.replaceChild(div, child);

    fetch("../json/details.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
            p = data.details[localStorage.idtour];
            var left = document.createElement("div");
            left.innerHTML = '<h1>' + p.title + '</h1><p>' +
                p.content + '</p><br><p>' +
                p.timeOfTour + '</p><p>' +
                p.timeline + '</p>';
            document.getElementById("detailTour").appendChild(left);
        }).catch(function(error) {
            alert("Error: " + error.message);
        });
}
/*hien thi cac tour duoc mua nhieu nhat */
function showStar(quantity) {
    let string = "";
    for (let i = 0; i < quantity; i++) {
        string += '<i class="fas fa-star" style="color: yellow;"></i>';
    }
    return string;
}

function loadHotTours() {
    fetch("../json/quantity.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
            var n = data.quantity.length;
            for (let i = 0; i < n; i++) {
                p = data.quantity[i];
                p = data.quantity[i];
                var left = document.createElement("div");
                left.className = 'review--item';
                left.innerHTML = '<p class="text-center">' + p.title +
                    '</p><p class="text-center">' + '<p class="title text-center">' + showStar(p.rate) + '</p><p style="text-align: right;">' + p.quantity +
                    ' tours đã bán</p>';
                document.getElementById("rate").appendChild(left);
            }
        })
        .catch(function(error) {
            alert("Error:" + error.message);
        });
}
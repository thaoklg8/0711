// check();
<<<<<<< HEAD
=======
function signout() {
    localStorage.clickcount = 0;
}



>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
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
                            localStorage.setItem("email", dataInput[0]);
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
                            localStorage.setItem("phone", dataInput[0]);
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
                    localStorage.setItem("email", data[1]);
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
<<<<<<< HEAD
                    '</div><div class="tour--item--content--right price">' + p.price + ' VNĐ' + ' </div></div>' +
                    '<p class="title-script">' + p.script + '</p>' + '</div>' + '<div class="btn-detail btn-medium btn" onclick="sendIDTour(' + p.id + ')"><a href="' + p.detail + '">Chi tiết</a></div>';
=======
                    '</div><div class="tour--item--content--right price">' + p.price + ' </div></div>' +
                    '<p class="title-script">' + p.script + '</p>' + '</div>' + '<div class="btn-detail btn-medium btn" onclick="sendIDTour(p.title)"><a href="' + p.detail + '">DETAILS</a></div>';
>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
                document.getElementById("jsonData").appendChild(left);
            }
        }).catch(function(error) {
            alert("Error:" + error.message);
        });
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
<<<<<<< HEAD
                '</div><div class="tour--item--content--right price">' + p.price + ' VNĐ' + ' </div></div>' +
                '<p class="title-script">' + p.script + '</p>' + '</div>' + '<div class="btn-detail btn-medium btn" onclick="sendIDTour(' + p.id + ')"><a href="' + p.detail + '">Chi tiết</a></div>';
=======
                '</div><div class="tour--item--content--right price">' + p.price + ' </div></div>' +
                '<p class="title-script">' + p.script + '</p>' + '</div>' + '<div class="btn-detail btn-medium btn" onclick="sendIDTour(p.title)"><a href="' + p.detail + '">DETAILS</a></div>';
>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
            document.getElementById("jsonData").appendChild(left);
        }).catch(function(error) {
            alert("Error:" + error.message);
        });
}
<<<<<<< HEAD

//hàm thay thế Signin
function replaceSignin() {
    var a = document.createElement("a");
    a.className = 'a-signin';
    a.id = 'signin';
    a.innerHTML = '<style="color: red;">' + localStorage.getItem("userName") + '</style>';
    document.getElementById("btn-signin1").appendChild(a);
    var divParent = document.getElementById("btn-signin1");
    var divChild = document.getElementById("signin");
    divParent.replaceChild(a, divChild);
}

//hàm thay thế Register
function replaceRegister() {
    var a = document.createElement("a");
    a.className = 'a-register';
    a.id = 'register';
    a.innerHTML = '<a href="" onclick="signout()">Sign out</a>'
    document.getElementById("btn-register1").appendChild(a);
    var divParent = document.getElementById("btn-register1");
    var divChild = document.getElementById("register");
    divParent.replaceChild(a, divChild);
}

//load UserName
=======
//
>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
function loadUserName() {
    fetch("/json/users.json")
        .then(response => response.json())
        .then(
            function(data) {
                for (let i = 0; i < data.users.length; i++) {
                    u = data.users[i];
<<<<<<< HEAD
                    if ((u.email == localStorage.getItem("email")) || (u.phone == localStorage.getItem("phone"))) {
                        localStorage.setItem("userName", u.userName);
                        break;
                    }
=======
                    if (u.email == localStorage.email)
                        localStorage.userName = u.userName;
>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
                }
            }
        );

    if (localStorage.clickcount == 1) {
<<<<<<< HEAD
        replaceSignin();
        replaceRegister();
    }
}

//hàm Signout
function signout() {
    localStorage.clickcount = 0;

}

//trang DETAIL
//load detail cua tour theo id duoc chon
function sendIDTour(input) {
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
            for (let i = 0; i < n; i++) {
                if (p[i].id == input) {
                    localStorage.idtour = i;
                }
            }
        }).catch(function(error) {
            alert("Error: " + error.message);
        });
}

function loadDetailTour() {
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
                p.content + '</p><br><p style="font-weight: bold;">' +
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
=======
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
>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
<<<<<<< HEAD
            var n = data.quantity.length;
            for (let i = 0; i < n; i++) {
                p = data.quantity[i];
                p = data.quantity[i];
                var left = document.createElement("div");
                left.className = 'review--item';
                left.innerHTML = '<p>' + p.title +
                    '</p><p>' + '<p>' + showStar(p.rate) + '</p><p>' + p.quantity +
                    ' vé đã bán</p>';
                document.getElementById("rate").appendChild(left);
            }
        })
        .catch(function(error) {
            alert("Error:" + error.message);
        });
}

function loadDetail_page() {
    window.location = "/html/detail.html";
}

/*BOOK NOW */
function loadUserInfor() {
    if (localStorage.clickcount == 1) {
        var userNameInput = document.getElementById("btn-signin1").innerText;
        fetch("/json/users.json")
            .then(response => response.json())
            .then(function(data) {
                let n = data.users.length;
                for (let i = 0; i < n; i++) {
                    if (data.users[i].userName == userNameInput) {
                        document.getElementById("name").value = data.users[i].userName;
                        document.getElementById("email").value = data.users[i].email;
                        document.getElementById("phone").value = data.users[i].phone;
                        loadTourClicked();
                    } else {}
                }
            });
    } else {

    }
}

function loadTourClicked() {
    fetch("../json/inforTours.json")
=======
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
>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
<<<<<<< HEAD
            p = data.inforTours[localStorage.idtour];
            document.getElementById("place_book").value = p.title;
            document.getElementById("price").value = p.price;
            let price = parseInt(p.price);
            localStorage.price = price;
            var img = document.createElement('img');
            img.src = p.img;
            document.getElementById('img').appendChild(img);
=======
            p = data.details[localStorage.idtour];
            var left = document.createElement("div");
            left.innerHTML = '<h1>' + p.title + '</h1><p>' +
                p.content + '</p><br><p>' +
                p.timeOfTour + '</p><p>' +
                p.timeline + '</p>';
            document.getElementById("detailTour").appendChild(left);
>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
        }).catch(function(error) {
            alert("Error: " + error.message);
        });
}
<<<<<<< HEAD

function sum() {
    var sl = document.getElementById("number_book").value;
    if (sl > 0) {
        sl = parseInt(sl, 10);
        var b2 = sl * parseInt(localStorage.price);
        document.getElementById("total").value = b2 + " VNĐ";
    } else {
        alert("Khong hop le");
    }
}

//Trang review
function loadImgReview() {
    fetch("../json/reviews.json")
=======
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
>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
<<<<<<< HEAD
            let n = data.reviews.length;
            for (let i = 0; i < n; i++) {
                let r = data.reviews[i];
                var left = document.createElement("div");
                left.innerHTML = '<a href="/html/review_sample.html" id="' + i + '" target="myreview"><img src="' + r.img + '" alt="" title="huế" onClick="getIDReview(' + i + ')"></a>';
                document.getElementById("review").appendChild(left);
            }
        }).catch(function(error) {
            alert("Error:" + error.message);
        });
}

function getIDReview(id) {
    localStorage.idReview = id;
}

function loadReview() {
    let id = localStorage.idReview;
    fetch("../json/reviews.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("HTTP error, status: " + response.status)
            }
            return response.json();
        })
        .then(function(data) {
            p = data.reviews[id];
            var left = document.createElement("div");
            left.className = 'container-reviewofcustomer__content';
            left.innerHTML = '<h2>' + p.title + '</h2><p>' + p.content + '</p><div class="content__date--cusreview"><p>' + p.date + '</p></div>';
            document.getElementById("review_sample").appendChild(left);
        }).catch(function(error) {
=======
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
>>>>>>> fde0da68bc7f3eed2c285660ccc27ffe3586c878
            alert("Error:" + error.message);
        });
}
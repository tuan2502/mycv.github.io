'use strict';


function $getClass(param) {
    return document.querySelector(param);
}

function $getId(param) {
    return document.getElementById(param);
}

function $getAllClass(param) {
    return document.querySelectorAll(param);
}



// Hiển thị thông tin người dùng bằng cách nhập mail
// Gọi biến


//Display message
function displayMessage(message) {
    return $getClass('.err-msg').textContent = message;
}

// Check regex
function regexInput(input) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    console.log(regexEmail.test(input));
    return regexEmail.test(input);
}

$getClass('.btn-email').addEventListener('click', function () {
    const getEmail = $getClass('.email').value;

    //Check regex email xem đúng chưa?
    if (!regexInput(getEmail)) {
        // Nếu sai thì xóa display: none và hiển thị error msg
        $getClass('.err-msg').classList.remove('d-none');
        displayMessage('⛔️ Email is not valid!');
    } else {
        // Nếu đúng thì thêm display: none, ẩn class.enter-email và thêm table vào trong class.profile để hiển thị thông tin
        $getClass('.err-msg').classList.add('d-none');
        $getClass('.enter-email').classList.add('d-none');
        $getClass('.profile').innerHTML = `
        <table class="info-table">
            <tr>
              <th>Ngày sinh</th>
              <td>25/02/2001</td>
            </tr>
            <tr>
              <th>Giới tính</th>
              <td>Nam</td>
            </tr>
            <tr>
              <th>Điện thoại</th>
              <td>(+84) 865644162</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>tuannhpfx42049@funix.edu.vn</td>
            </tr>
            <tr>
              <th>Địa chỉ</th>
              <td>Hà Tĩnh, Việt Nam</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>https://abc.tech</td>
            </tr>
          </table>
          <div class="info-social">
            <a href="#"><i class="icon-twitter"></i></a>
            <a href="#"><i class="icon-facebook-1"></i></a>
            <a href="#"><i class="icon-google"></i></a>
            <a href="#"><i class="icon-linkedin"></i></a>
          </div>
        `;
    }
})

//Hiển thị thông tin khi click vào button 'Xem thêm'

const expItems = $getAllClass('.item');
const showBtn = $getClass('.view-more-btn');
const expDetail = $getClass('.exp-detail');

for (let i = 0; i < expItems.length; i++) {
    const btn = expItems[i].querySelector('.view-more-btn');
    let showMore = false;
    //Hiển thị nút button khi hover vào bảng Kỹ năng
    expItems[i].addEventListener('mouseover', function () {
        btn.classList.remove('d-none');
    });

    //Ẩn nút button khi không hover vào bảng Kỹ năng
    expItems[i].addEventListener('mouseout', function () {
        btn.classList.add('d-none');
    });

    //Hiển thị thông tin khi click vào button 'Xem thêm'
    btn.addEventListener('click', function () {
        expItems[i].querySelector('.exp-detail').classList.toggle('d-none');
        showMore = !showMore;
        //nếu showMore bằng true thì hiển thị || false thì rút gọn
        if (showMore) {
            expItems[i].querySelector('.exp-item').style.height = 'auto';
            expItems[i].querySelector('.view-more-btn').textContent = '🔼 Rút gọn'
        } else {
            expItems[i].querySelector('.exp-item').style.height = '190px';
            expItems[i].querySelector('.view-more-btn').textContent = '🔽 Xem thêm'
        }
    });
}




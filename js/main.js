/**BÀI 1
 * GIẢ SỬ: NGƯỜI DÙNG NHẬP VÀO 3 SỐ NGUYÊN VÀ TRẢ VỀ KẾT QUẢ SỐ TĂNG DẦN (VD: 1<3<5)
 * --------------------------------
 * -ĐẦU VÀO: Người dùng nhập vào 3 số nguyên a, b, c
 * -XỬ LÝ: Sử dụng if else để xét các trường hợp để trả kết quả.
 * +Các trường hợp: a  > b > c;a  > c > b ;b  > a > c ;b  > c > a ;c  > b > a ;c  > a > b
 * -ĐẦU RA: dựa vào trường hợp xảy ra, kết quả xẻ trả về trường hợp tương ứng.
 */

document.getElementById("btnOrder").onclick = function () {
  //   LẤY BA SỐ TỪ NGƯỜI DÙNG
  var a = document.getElementById("num1").value * 1;
  var b = document.getElementById("num2").value * 1;
  var c = document.getElementById("num3").value * 1;
  var order = "";
  // XỬ LÝ
  if (a > b && b > c) {
    order = a + " > " + b + " > " + c;
  } else if (a > c && c > b) {
    order = a + " > " + c + " > " + b;
  } else if (b > a && a > c) {
    order = b + " > " + a + " > " + c;
  } else if (b > c && c > a) {
    order = b + " > " + c + " > " + a;
  } else if (c > a && a > b) {
    order = c + " > " + a + " > " + b;
  } else {
    order = c + " > " + b + " > " + a;
  }
  //   ĐẦU RA
  document.getElementById("orderList").innerHTML =
    "<p>Thứ tự của 3 số là: " +
    "<span class='text-danger'>" +
    order +
    "</span>" +
    "</p>";
};

/**BÀI 2: GỬI LỜI CHÀO ĐẾN NGƯỜI SỬ DỤNG MÁY
 *
 * GIẢ SỬ: NGƯỜI DÙNG CHỌN AI LÀ NGƯỜI ĐANG SỬ DỤNG VÀ MÁY SẼ CHÀO VỚI DANH TÍNH TƯƠNG ỨNG
 * ----------------------------------------
 * -ĐẦU VÀO: Người dùng chọn từ droplist là ai đang sử dụng
 * -XỬ LÍ: Xem xét user là ai để trả kết quả
 * -ĐẦU RA: Gửi lời chào đến người dùng
 */

document.getElementById("btnHello").onclick = function () {
  var user = document.getElementById("user").value;
  if (user == "ba") {
    helloUser = "Ba";
  } else if (user == "me") {
    helloUser = "Mẹ";
  } else if (user == "anh") {
    helloUser = "Anh Trai";
  } else if (user == "em") {
    helloUser = "Em gái";
  } else {
    helloUser = "Guest";
  }
  document.getElementById("helloZone").innerHTML =
    "<p>Xin chào " +
    "<span class='text-danger'>" +
    helloUser +
    " !!!</span" +
    "</p>";
};

/**
 * BÀI 3: ĐẾM SỐ CHẴN LẺ
 * -GIẢ SỬ: Người dùng nhập vào 3 số nguyên, chương trình sẽ đếm và trả về kết quả có bao nhiêu số chẵn và bao nhiêu số lẻ.
 * -------------------------------------------
 * -ĐẦU VÀO: Ngưuời dùng nhập vào 3 số nguyên int1, int2, int3
 * -XỬ LÝ:
 * + Tạo một biến even (số chẵn) = 0
 * + Tạo một biến odd (số lẻ) = 0
 * + Lần lượt cho 3 số int1, int2, int3 % 2
 * + Nếu int % 2 == 0 thì là số chẵn -> chạy lệnh even += 1 -> odd = 3 - even
 * -ĐẦU RA:
 * + Có even số chẵn, odd số lẻ
 */

document.getElementById("btnCount").onclick = function () {
  var int1 = document.getElementById("int1").value * 1;
  var int2 = document.getElementById("int2").value * 1;
  var int3 = document.getElementById("int3").value * 1;
  var even = 0;
  var odd = 0;

  if (int1 % 2 == 0) {
    even += 1;
  } else {
    odd += 1;
  }
  if (int2 % 2 == 0) {
    even += 1;
  } else {
    odd += 1;
  }
  if (int3 % 2 == 0) {
    even += 1;
  } else {
    odd += 1;
  }

  document.getElementById("countDone").innerHTML =
    "<p> Có " +
    "<span class='text-danger font-weight-bold'>" +
    even +
    "</span>" +
    " số chẵn và " +
    "<span class='text-danger font-weight-bold'>" +
    odd +
    "</span>" +
    " số lẻ " +
    "</p>";
};

/**BÀI 4: ĐÂY LÀ TAM GIÁC GÌ
 * -GIẢ SỬ: Người dùng nhập vào chiều dài 3 cạnh của 1 tam giác và sẽ trả về đây là tam giác gì.
 * -----------------------------------------
 * -ĐẦU VÀO: Người dùng nhập vào 3 chiều dài len1, len2, len3
 * -XỬ LÝ:
 * + Cho 3 chiều dài vào các biến len1, len2, len3
 * + Tạo biến triagle là kết quả
 * + Xét các điều kiện sau để xác định là tam giác gì:
 * 1. len1 == len2 && len1 == len3 -> Tam giác đều
 * 2. len1 == len2 || len1 == len3 || len2 == len3-> Tam giác cân (Lưu ý đặt dưới trường hợp 1 vì if sẽ dừng nếu điều kiện đã thoả mãn)
 * 3. Math.pow(len3 , 2) == Math.pow((len1+len2), 2) -> Tam giác vuông (Pytago)
 * -ĐẦU RA: Đây là tam giác + triagle
 */

document.getElementById("btnTria").onclick = function () {
  var len1 = document.getElementById("len1").value * 1;
  var len2 = document.getElementById("len2").value * 1;
  var len3 = document.getElementById("len3").value * 1;
  var triagle = "";

  if (len1 == len2 && len1 == len3) {
    triagle = " tam giác <span class='text-danger font-weight-bold'>đều</span>";
  } else if (len1 == len2 || len1 == len3 || len2 == len3) {
    triagle =
      " tam giác <span class='text-danger font-weight-bold'>cân<span class='text-danger font-weight-bold'></span>";
  } else if (
    (Math.pow(len1, 2) == Math.pow(len2, 2) + Math.pow(len3, 2) &&
      len2 == len3) ||
    (Math.pow(len2, 2) == Math.pow(len1, 2) + Math.pow(len3, 2) &&
      len1 == len3) ||
    (Math.pow(len3, 2) == Math.pow(len1, 2) + Math.pow(len2, 2) && len1 == len2)
  ) {
    triagle =
      " tam giác <span class='text-danger font-weight-bold'>vuông cân</span>";
  } else if (
    Math.pow(len1, 2) == Math.pow(len2, 2) + Math.pow(len3, 2) ||
    Math.pow(len2, 2) == Math.pow(len1, 2) + Math.pow(len3, 2) ||
    Math.pow(len3, 2) == Math.pow(len1, 2) + Math.pow(len2, 2)
  ) {
    triagle =
      " tam giác <span class='text-danger font-weight-bold'>vuông</span>";
  } else {
    triagle =
      " loại <span class='text-danger font-weight-bold'>tam giác nào đó</span>";
  }
  document.getElementById("triaResult").innerHTML =
    "<p>" + "Đây là " + triagle + "</p>";
};

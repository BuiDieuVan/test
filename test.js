console.log('tadaaa');
const x = 1;  // khai báo lần thứ nhất thành công.
const x = 0;  // khai báo lần thứ hai sinh lỗi vì cùng trong khu vực biến toàn cục(hoặc cùng khối lệnh).
if(true) {
  const x = 2; // khai báo thành công do đang trong khối lệnh if.
  const y = 1; // khai báo thành công y trong khối lệnh if.
  console.log(x,y); // in ra: "2 1" vì khai báo thành công.
}
// Nếu tiếp tục khai báo y sau đây
const y = 2; // vì trong phạm vi toàn cục chưa có y được khai báo nên không sinh lỗi.
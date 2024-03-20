# Khai Báo Biến 
* var
# Thuật ngữ Built-in ( func được xây dựng sẵn )
* alert ( hộp thoại thông báo )
* Console ( Show mọi kiểu dữ liệu )
* Confirm ( hộp thoại yes/no )
* Promt ( hộp thoại nhập giá trị )
* Set timeout ( cách 1 giây chạy 1 lần ) - tham số truyền vào là (function, time)
* Set interval ( cách 1 giây sẽ chạy mãi ) - tham số truyền vào là (function, time)
# Kiểu dữ liệu
* Dữ liệu nguyên thuỷ ( Primitive Data )
  * Number
  * String
  * Boolean
  * Undefined
  * Null
  * Symbol
~~~
ví dụ:
var a = 10; vùng nhớ được tạo nhưng không thể thay đổi
a = 15; gán chỉ tạo vùng nhớ mới chứ không thể thay đổi
~~~
* Dữ liệu phức tạp ( Complex Data )
  * Function
  * Object
# Truthy và Falsy
* Falsy
  * false - 0 - 'chuỗi rỗng' - null - undefined - NaN
* Tất cả còn lại là Truthy
# Object
* Object constructor
~~~
function User(name) {
  this.name = name;
}
var user = new User('Phuc') OR user.name='Phuc'
~~~
* Object date
~~~
var date = new Date();
~~~
* Object math
~~~
Math.PI //3.14..
Math.round(1.5) //làm tròn thành 2
Math.abs(-2) //chuyển thành số nguyên 2
Math.ceil(1.0001) //làm tròn thành 2 dù nhỏ nhất
Math.floor(1.999) //làm tròn dưới thành 2
Math.random() //ra số ngẫu nhiên
Math.min(1,2,3) //nhỏ nhất 1
Math.max(1,2,3) //lớn nhất 3
~~~
# For
* For...in
~~~
for (var key in myInfo) { console.log(myInfo[key]) }
~~~
* For...of
~~~
for (var key of myInfo) { console.log(key) } //lấy thẳng value
~~~
# Array
* map ( tham số truyền vào (function) và trong func nhận 3 tham số value,index, array gốc )
~~~
array.map( function (data,index,originArray) {
 console.log(data)
}) 
~~~
* reduce ( tham số truyền vào (function, iniTial value) và trong func nhận 4 tham số initial value,value,index, array gốc )
~~~
array.reduce( function (initialValue,data,index,originArray) {
 return 100;
},2)
//luon tra ve initial va initial truyền kiểu dữ liệu nào trả về dữ liệu đó string,array...
~~~
* includes ( tham số truyền vào (any kiểu dữ liệu,index ) )
~~~
array.includes(data) //kiểm tra có hay không và trả về boolean
array.includes(data,1) //kiểm tra từ 1 trở đi, nếu data ở index 0 thì false
~~~
* filter ( tham số truyền vào (function) và trong func nhận 3 tham số value,index, array gốc )
~~~
const ages = [32, 33, 16, 40]
ages.filter( function (data,index) { return data >= 18; } //output 32,33,40
~~~
* concat ( tham số truyền vào [], nhiệm vụ nối mảng ) thường xử lý Depth array mảng sâu
~~~
array.concat(any array)
~~~

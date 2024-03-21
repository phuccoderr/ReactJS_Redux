# Browser: HTML -> DOM -> Web API
# DOM Events: https://www.w3schools.com/jsref/dom_obj_event.asp
# Promise
  * Sync: code nào viết trước chạy trước show trước
  * Async: code viết trước nhưng chạy sau, ví dụ: fetch,setTimeOut,setInterval...
  * Promise:
  ~~~
  var promise = new Promise( function (resolve,reject) {
    //logic
    //thành công: resolve()
    //thất bại: reject()
  })
  promise
    .then(func)
    .catch(func)
    .finally(func);
  ~~~
  * API: cổng giao tiếp giữa các phần mềm
  * fetch:
  ~~~
  fetch(API)
    .then( func(resp) {
      return resp.json();
      // trả về 1 promise
      //JSON.parse: Json -> Javascript types
    })
    .then(func(data) {
      console.log(data); //kiểu dữ liệu javascript
    })
  ~~~
# ECMAScript 6:
  * Template literals (nội suy): \`... ${js}\`
  * Arrow func:
  ~~~
  () => ... //không cần return
  (a,b) => ({a: a}) //thêm () để return
  () => { return ...; } // có {} phải return
  ~~~
  * Classes:
  ~~~
  class Course {
    constructor(name,price) {
      this.name = name;
      this.price = price;
    }
  }
  var java = new Course('java',100);
  ~~~
  * Destructuring:
  ~~~
  var array = ['java','js','python'];
  var [a, ...rest] = array;
  // output a = 'java'
  // output rest = ['js','python']
  var {name} = object;  có key là name
  // nếu là object thì để tên key
  ~~~
  * Optional chaining:
  ~~~
  data?.name //nghi ngờ thuộc tính name không có
  ~~~

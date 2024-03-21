# React.createElement
~~~
const ul = React.createElement('ul',
          attr,
          React.createElement('li',attr,'Java'))
~~~
# JSX render
* Sử dụng babel để render React viết dễ dàng hơn
~~~
const ul = (
  <ul>
      <li>Java</li>
  </ul>
)
~~~
# Yarn và Npm
* Yarn: lưu module thư viện trong việc tải lần đầu và kiểm tra để tải được nhanh hơn ( nhược điểm tốn dung lượng do lưu trữ )
* Npm: mọi việc đều cài từ đầu
# React Hooks
* useState
~~~
const [state,setState] = useState(1);
setState(prevState => prevState + 1); để nhận giá trị mới liền
~~~
* useEffect
~~~
 - nếu có value trong [] thì sẽ bị gọi lại nếu value thay đổi - [value]
 - render trước rồi effect mới chạy sau ( bất đồng bộ )
useEffect(func,[]);
~~~
* useLayoutEffect
~~~
 - cách chạy như useEffect nhưng xử lý đồng bộ qua việc chạy trước render UI sau cùng
~~~
* useRef
~~~
 - lưu vùng nhớ, khi render lại thì không bị underfined
let timer = useRef();
~~~
* memo
~~~
  - render xem component có chứa memo có bị thay đổi hay không, nếu không thì không phải load lại
export default memo(Component);
~~~
* useCallback
~~~
  - khi chúng ta truyền props cho component con, khi có memo vẫn bị render lại
  - khi có useCallback thì nó sẽ tham chiếu hàm trước đó chứ không tạo thêm hàm mới trong component con
const handleCount = useCallback( func,[] );
~~~
* useMemo
~~~
  - khi onChange thứ gì đó thì render lại một số hàm dù không chạy vẫn bị render lại, điều này gây ra không tối ưu
  - khi gọi handleTotal thì nó mới render lại hoặc trong [value] bị thay đổi
const handleTotal = useMemo(func,[]);
~~~
* useContext
~~~
  - thường khai báo ở file index.js, khai báo theme
export const UserContext = React.createContext("root");
  - component con nhận bằng cách  useContext và truyền tên trong nó -  useContext(UserContext)
const receiveContext = useContext(UserContext);
~~~

### `Giới thiệu hook useState`

\_ chức năng giúp cho functional component có thể sử dụng được state

nó là 1 cái hàm input là intialState (giá trị mặc định)
output là một cái mảng có state và một cái hàm giúp mình cập nhật lại cái state

\_Đối với class component khi tạo state sẽ this.state trong constructor
bên class là object chứa nhiều state

\_ lưu useState() sử dụng replacing thay vì merging
có nghĩa nếu merging thì khi setState thì nó sẽ truyền đứa thay đổi
và in ra đứa đó với thuộc tính thay đổi

\_nhưng với replacing thì khi truyền đứa bị thay đổi thì nó lấy mỗi đứa
bị thay đổi thôi

thì trong function component thì nó sẽ là replacing
còn trong class component thì nó sẽ là merging

nếu trong funtion muốn biến từ replacing sang merging

thì mình lấy thêm thằng cũ

### ví dụ const [person , setPerson] = useState({name: 'Hau' , color : 'red'})

### setPerson({...person , color: 'green'})

----> {name: 'hau' , color: 'green'}

### `Thằng inital state chỉ dùng cho lần đầu , những lần sau nó bị bỏ rơi`

ví dụ const [color , setColor] = useState(initColor)

### nếu như lần đầu tiên render thằng color được set bằng initColor

### qua lần thứ 2 thằng initcolor không còn ý nghĩa gì

thế nên mình nên vỏ nó là 1 cái callBack
const [color , setColor] = useState(() =>{
const initColor = getComplicated();
return initColor
đảm bảo chỉ render đúng lần đầu tiên
nếu con số hay chuỗi gì không đáng ngại
nếu tính toán thì mình nên bỏ vào callBack cho nó chạy đúng 1 lần thôi
})

### `nếu để chế độ strictmode thì nó sẽ chạy 2 lần`

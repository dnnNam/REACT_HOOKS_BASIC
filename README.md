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

---

### `Những điều cần biết về useEffect() hook`

Presented by: Hau Nguyen | Easy Frontend
. `Side effect` là gì? Có bao nhiêu loại?
. Giới thiệu hook `useEffect()`
. Dùng `useEffect()` kèm điều kiện
. Dùng `useEffect()` không có cleanup
. Dùng `useEffect()` có cleanup
. Chuyển từ life cycles sang useEffect() hook
. 📝 Những lưu ý cần nhớ
. Next step

1. `Side effects` là gì? Có bao nhiêu loại?
   Side effects là những thứ nằm bên ngoài component của mình
   Gọi API lấy dữ liệu.
   Tương tác với DOM.
   Subscriptions.
   setTimeout, setInterval.
   Theo tài liệu chính thức thì chia làm 2 loại side effects:
   . Effects `không cần clean up`: gọi API, tương tác DOM
   . Effects `cần clean up`: subscriptions, setTimeout, setInterval.
   nếu nó vẫn tiếp tục chạy thì nó sẽ xảy ra lỗi
   Ref: https://reactjs.org/docs/hooks-effect.html
2. Giới thiệu hook `useEffect()`
   Là một hook cơ bản trong React hooks.
   Sử dụng cho side effects.
   Mỗi hook gồm 2 phần: side effect và clean up (optional)
   Được thực thi sau mỗi lần render.
   Được thực thi ít nhất một lần sau lần render đầu tiên.
   Những lần render sau, chỉ được thực thi nếu có dependencies thay đổi.
   Effect cleanup sẽ được thực thi trước run effect lần tiếp theo hoặc unmount.

   trường hợp đầu tiên là không có dependencies : thì ý nghĩa là
   nó luôn luôn được thực hiện sau mỗi lần render

   trường hợp 2 : nếu như bạn để một cái mảng empty : tức là bạn muốn
   chạy đúng 1 lần sau lần render đầu tiên

   trường hợp 3 : nếu như dependencies nếu có dữ liêu thì : nếu filters
   này thay đổi thì nó mới thực hiện

## debounce là gì

`Khi sự kiện liên tục xảy ra, debounce sẽ hủy bỏ các lần gọi trước đó và chỉ thực thi hàm sau một khoảng thời gian xác định kể từ lần cuối sự kiện diễn ra.`
`Nếu sự kiện xảy ra trước khi khoảng thời gian này kết thúc, bộ đếm thời gian sẽ được đặt lại. `

# useEffect

## Side Effect là gì?

Side Effect (hay tác dụng phụ) đề cập đến bất kỳ thao tác nào ảnh hưởng đến bất kỳ thứ gì nằm ngoài phạm vi của chức năng (hàm) đang được thực thi, hay có nghĩa là Impure Functions, ví dụ:

-   Sửa đổi DOM
-   Thay đổi giá trị của biến bên ngoài
-   Gọi APIs
-   Đặt lịch cho một hàm
-   ...

Bất kỳ side effects nào như vậy phải được đặt vào `useEffect`, nếu không có thể gây ra một số lỗi hay hành vi không đúng khi React render giao diện.

Có 2 kiểu side effect:

-   Side effect không cần dọn dẹp, ví dụ thay đổi DOM, gọi APIs, ... đơn giản là thực thi một đoạn code sau khi khi render
-   Side effect cần phải dọn dẹp, ví dụ một bộ đếm, hoặc đăng ký/hủy đăng ký từ một nguồn, ...

`useEffect()` nhận vào một hàm (effect), hàm đó sẽ được chạy sau khi component đã được render trên giao diện.

Mặc định, `useEffect()` sẽ chạy sau mỗi lần render component, tuy nhiên có thể thay đổi hành vi này bằng cách chỉ định các giá trị phụ thuộc (dependencies) cụ thể và `useEffect()` chỉ chạy lại khi một trong các giá trị đó thay đổi.

Khi so sánh với Lifecycle trong Class Component, `useEffect()` tương tự với `componentDidMount()`, `componentDidUpdate()`, và `componentWillUnmount()`, tuy nhiên khác với `componentDidMount()` và `componentDidUpdate()`, `useEffect()` chạy sau khi render xong.

# React Hooks

## Hooks là gì?

[Hooks](https://reactjs.org/docs/hooks-overview.html) là một tính năng mới của React từ phiên bản 16.8.

Hooks là các hàm đặc biệt cho phép Function Components có thể sử dụng các tính năng như State và Lifecycle. Hooks **không hoạt động trong Class Components**, nó cho phép xây dựng các ứng dụng React mà không cần các Classes.

React cung cấp một số hooks có sẵn để sử dụng, đồng thời chúng ta cũng có thể tự tạo các hooks của riêng mình.

## Các quy tắc khi sử dụng Hooks

Hooks chỉ là các hàm JavaScript, tuy nhiên, để sử dụng hooks, chúng ta cần tuân thủ 2 quy tắc:

1. Chỉ gọi hooks ở cấp độ mã cao nhất của hàm, không gọi hooks trong vòng lặp, các khối lệnh như if else, hay trong một hàm con. Xem giải thích chi tiết [ở đây](https://reactjs.org/docs/hooks-rules.html#explanation)
2. Chỉ gọi hooks trong Function Components, hoặc Custom hooks

## Built-in hooks

### Các hooks cơ bản

-   [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
-   [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
-   [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

### Các hooks khác

-   [useReducer](https://reactjs.org/docs/hooks-reference.html#usestate)
-   [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
-   [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
-   [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
-   [useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
-   [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
-   [useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)

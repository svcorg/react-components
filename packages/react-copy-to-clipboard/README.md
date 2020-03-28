# `@svc/react-copy-to-clipboard`

With the help of `@svc/react-copy-to-clipboard` the text can be copied from a HTMLElement/HTMLInputElement

## Example
[Codesandbox](https://codesandbox.io/s/svcreact-copy-to-clipboard-example-vig78)

```jsx
import copyToClipboard from "@svc/react-copy-to-clipboard";

export default function App() {
  const [spanRef, setClipboardFromH1] = copyToClipboard();
  const [inputRef, setClipboardFromInput] = copyToClipboard();
  return (
    <div className="App">
      <div>
        <h1 ref={ref}>Hello CodeSandbox</h1>
        <button onClick={setClipboardFromH1}>
          Start editing to see some magic happen!
        </button>
      </div>
      <div>
        <h1 ref={ref}>Hello CodeSandbox</h1>
        <button onClick={setClipboardFromH1}>
          Start editing to see some magic happen!
        </button>
      </div>
    </div>
  );
}
```

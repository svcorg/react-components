# `@svc/react-copy-to-clipboard`

With the help of `@svc/react-copy-to-clipboard` the text can be copied from a HTMLElement/HTMLInputElement

## Installing

Using npm: `npm i @svc/react-copy-to-clipboard`

Using yarn: `yarn add @svc/react-copy-to-clipboard`

## Example
[Codesandbox](https://codesandbox.io/s/svcreact-copy-to-clipboard-example-vig78)

```jsx
import React from "react";
import copyToClipboard from "@svc/react-copy-to-clipboard";

export default function App() {
  const [h1ref, setClipboardFromH1] = copyToClipboard();
  const [inputRef, setClipboardFromInput] = copyToClipboard();

  return (
    <div className="App">
      <div>
        <h1 ref={h1ref}>Hello CodeSandbox</h1>
        <button onClick={setClipboardFromH1}>Copy Text from H1</button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={setClipboardFromInput}>Copy Text from input</button>
      </div>
    </div>
  );
}

```

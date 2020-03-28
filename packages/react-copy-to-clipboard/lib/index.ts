import * as React from 'react';
import copyText from './CopyText';

function CopyToClipboard <T extends (HTMLInputElement | HTMLSpanElement)>() {
  const ref = React.useRef<T>(null);
  const setClipboard = () => {
    if(ref !== null && ref.current !== null) {
      if(ref.current instanceof HTMLInputElement) {
        copyText(ref.current.value)
      } else if(ref.current instanceof HTMLSpanElement) {
        copyText(ref.current.textContent);
      }
    }
  };
  return [ref, setClipboard];
}

export default CopyToClipboard;
import * as React from 'react';
import copyText from './CopyText';

function CopyToClipboard <T extends (HTMLInputElement | HTMLElement)>() {
  const ref = React.useRef<T>(null);
  const setClipboard = () => {
    if(ref !== null && ref.current !== null) {
      if(ref.current instanceof HTMLInputElement) {
        copyText(ref.current.value)
      } else if(ref.current instanceof HTMLElement) {
        copyText(ref.current.textContent);
      }
    }
  };
  return [ref, setClipboard];
}

export default copyToClipboard;
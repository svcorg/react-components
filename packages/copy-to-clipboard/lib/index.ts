import * as React from 'react';
import copyText from './CopyText';

const copyToClipboard = <T extends (HTMLInputElement | HTMLElement)>() => {
  const ref = React.useRef<T>(null);
  const setClipboard = () => {
    let status = false;
    if(ref !== null && ref.current !== null) {
      if(ref.current instanceof HTMLInputElement) {
        status = copyText(ref.current.value)
      } else if(ref.current instanceof HTMLElement) {
        status = copyText(ref.current.textContent);
      }
    }
    return status;
  };
  return [ref, setClipboard];
}

export default copyToClipboard;
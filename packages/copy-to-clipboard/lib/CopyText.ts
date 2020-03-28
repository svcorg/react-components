const copyText = (text: string) => {
  let range: Range, selection: Selection, mark: HTMLSpanElement;
  let success = false;
  const { body } = document;
  
  const copyElement: HTMLSpanElement = document.createElement('span');
  copyElement.appendChild(document.createTextNode(text));
  copyElement.style.opacity = '0';
  copyElement.style.webkitUserSelect = "text";
  copyElement.style.msUserSelect = "text";
  copyElement.style.userSelect = "text";
  copyElement.style.userSelect = "pre";
  body.appendChild(copyElement);
    
  try {
    range = document.createRange();
    range.selectNode(copyElement);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    success = document.execCommand("copy");
    if (!success) {
      throw new Error("copy command was unsuccessful");
    }
    body.removeChild(copyElement);
  
  } catch (err) {
    console.error("unable to copy using execCommand: ", err);
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    body.removeChild(copyElement);
  }

  return success;
};

export default copyText;
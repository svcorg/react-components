const copyText = (text: string) => {
  let 
    range: Range,
    selection: Selection,
    mark: HTMLSpanElement,
    success = false;
  try {
    // range = document.createRange();
    // selection = document.getSelection();

    // mark = document.createElement("span");
    // mark.textContent = text;
    // // reset user styles for span element
    // // prevents scrolling to the end of the page
    // mark.style.position = "fixed";
    // mark.style.clip = "rect(0, 0, 0, 0)";
    // // used to preserve spaces and line breaks
    // mark.style.whiteSpace = "pre";
    // // do not inherit user-select (it may be `none`)
    // mark.style.webkitUserSelect = "text";
    // mark.style.msUserSelect = "text";
    // mark.style.userSelect = "text";

    // document.body.appendChild(mark);

    // range.selectNodeContents(mark);
    // selection.addRange(range);

    const { body } = document;
    if (body !== null) {
      const copyElement: HTMLSpanElement = document.createElement('span');
      copyElement.appendChild(document.createTextNode(text));
      copyElement.style.opacity = '0';
      copyElement.style.webkitUserSelect = "text";
      copyElement.style.msUserSelect = "text";
      copyElement.style.userSelect = "text";
      copyElement.style.userSelect = "pre";

      body.appendChild(copyElement);
      
      const range = document.createRange();
      
      range.selectNode(copyElement);

      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      body.removeChild(copyElement);
    }
  /*
   * Disabling flow as its not a valid check on document.selection
   */
  // TODO: keep checking and remove the $FlowFixMe once flow fixes the types for DOM
  // $FlowFixMe
  
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

    if (mark) {
      document.body.removeChild(mark);
    }
  }

  return success;
};

export default copyText;
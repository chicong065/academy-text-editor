let undoStack = [''];
let redoStack = [];

const editor = document.getElementById('editor');
const undoDiv = document.getElementById('undo');
const redoDiv = document.getElementById('redo');

function autoSave() {
  const text = document.getElementById('editor').value;

  // Save every 5 characters
  if (text.length % 5 === 0) {
    undoStack.push(text);
    undoDiv.innerHTML = `<p>${text}</p>` + undoDiv.innerHTML;
  }
}

function clearAll() {
  redoStack = [];
  undoStack = [''];
  document.getElementById('editor').value = '';

  undoDiv.innerHTML = '<p></p>'
  redoDiv.innerHTML = '';
}

function redo() {
  if (redoStack.length) {
    const lastState = redoStack.pop();
    redoDiv.removeChild(redoDiv.firstChild);

    undoStack.push(editor.value);
    undoDiv.innerHTML = `<p>${editor.value}</p>` + undoDiv.innerHTML;

    editor.value = lastState;
  }
}

function undo() {
  if (undoStack.length) {
    const lastState = undoStack.pop();
    undoDiv.removeChild(undoDiv.firstChild);

    redoStack.push(editor.value);
    redoDiv.innerHTML = `<p>${editor.value}</p>` + redoDiv.innerHTML;

    editor.value = lastState;
  }
}

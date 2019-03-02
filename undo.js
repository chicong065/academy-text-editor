let undoStack = [''];
let redoStack = [];
const editor = document.getElementById('editor');

// You can access the textarea value by
// editor.value
// and set the textarea value by
// editor.value = 'Lorem ipsum'

// Stack operation in js are
// stack.push(data)
// stack.pop()

function autoSave() {
  const text = editor.value;

  // Save every 5 characters
  console.log('SAVING', text);
  // Your save code goes here
}

function clearAll() {
  console.log('CLEAR');
  // Your clear code goes here
}

function redo() {
  console.log('REDO');
  // Your redo code goes here
}

function undo() {
  console.log('UNDO');
  // Your undo code goes here
}

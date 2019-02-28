let undoStack = [''];
let redoStack = [];

function autoSave() {
  const text = document.getElementById('editor').value;

  // Save every 5 characters
  if (text.length % 5 === 0) {
    console.log('SAVING');
    // Your save code goes here
  }
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

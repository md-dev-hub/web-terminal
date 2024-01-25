// main.js
// when document is ready and loaded do stuffs....
$(document).ready(function () {

    let commandHistory = [];
    let commandHistoryIndex = -1;

    document.getElementById('input').addEventListener('keydown', function (event) {
      // process the command typed in the input field when enter key is pressed  
      if (event.key === 'Enter' && !event.shiftKey) { // if enter key is pressed and shift is not pressed
          event.preventDefault(); // prevent default behaviour of enter key
          commandHistoryIndex = -1; // reset command history index
          processCommand(this.value); // process the command and return output to video
          this.value = ''; // clean the text area input
        } 
        // scroll the command history up
        else if (event.key === 'ArrowUp') {
          event.preventDefault(); // prevent default behaviour of enter key
          if(commandHistory.length === 0) return; // if command history is empty, do nothing
          if(commandHistoryIndex + 1 >= commandHistory.length) return; // if we have reached the top of history, do nothing (out of bounds
          commandHistoryIndex++; // increment command history index
          this.value = commandHistory[commandHistoryIndex]; // get the last command from history
        } 
        // scroll the command history down
        else if (event.key === 'ArrowDown') {
          event.preventDefault(); // prevent default behaviour of enter key
          if(commandHistory.length === 0) return; // if command history is empty, do nothing
          if(commandHistoryIndex - 1 < -1) return; // if we have reached the top of history, do nothing (out of bounds)
          commandHistoryIndex--; // increment command history index
          this.value = commandHistoryIndex >= 0? commandHistory[commandHistoryIndex] : ''; 
        }
      });

      function processCommand(command) {
        commandHistory.unshift(command);
        // Simulate command processing here
        let outputSection = document.getElementById('output');
        // outputSection.textContent += '> ' + command + '\nOutput: Command executed successfully\n\n';

        let response = evaluateCommand(command);

        outputSection.textContent += '> ' + response + '\n';
        outputSection.scrollTop = outputSection.scrollHeight;
      }
});


  

  
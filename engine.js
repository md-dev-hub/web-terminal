// main.js
// when document is ready and loaded do stuffs....
$(document).ready(function () {
    document.getElementById('input').addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          processCommand(this.value);
          this.value = '';
        }
      });

      function processCommand(command) {
        // Simulate command processing here
        let outputSection = document.getElementById('output');
        // outputSection.textContent += '> ' + command + '\nOutput: Command executed successfully\n\n';

        let response = evaluateCommand(command);

        outputSection.textContent += '> ' + response + '\n';
        outputSection.scrollTop = outputSection.scrollHeight;
      }
});


  

  
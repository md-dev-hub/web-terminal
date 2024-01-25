# Web Terminal Emulator

A simple web-based terminal emulator engine that allows users to enter commands, parse them, and execute custom command logics.
![image](https://github.com/md-dev-hub/web-terminal/assets/79063001/bd6ad763-1abe-4e47-b9c4-4581f4babd6c)

## Features

### 1. Terminal Emulator Engine

- Simulates a terminal environment on a web page.
- Allows users to enter commands in a text box.

### 2. Command Parsing

- Parses the entered commands for further processing.

### 3. Custom Command Logics

- Users can define custom command logics for each command.
- Command logics are implemented in the `terminal.js` file.

### 4. Core Functionality in `engine.js`

- The `engine.js` file contains the core functionality for making the terminal emulator work.
- Handles key presses and overall terminal functionality.

## Getting Started

Follow these steps to set up and run the project locally.

```bash
# Clone the repository
git clone https://github.com/your-username/web-terminal.git

# Change into the project directory
cd web-terminal

# Open `index.html` in your web browser
```

# Usage
1. Open `index.html` in a web browser.
2. Type commands in the provided text box.
3. Observe the terminal emulator parsing and executing commands based on the custom logics defined in terminal.js.

# Custom Command Logics
To add or modify command logics, edit the `evaluateCommand()` function in the `terminal.js` file.  
Follow the existing structure and add your own functions for handling specific commands.

```javascript
// Example command logic for "customCommand"
function evaluateCommand(cmd)
{
  // split cmd string by ' ' char
  let cmdArr = cmd.split(' ');

  // print text to terminal
  if(cmdArr[0] === 'print')
  {
      let response = cmdArr.slice(1).join(' ');
      return response;
  }
  // add your custom logics here
  // ...
}
```

# Contributing
If you would like to contribute to this project, please follow the [Contributing Guidelines](#).

# License
This project is licensed under the [MIT License](https://github.com/md-dev-hub/web-terminal/tree/main?tab=MIT-1-ov-file#readme).

<!-- 
# Contact
# For any questions, feedback, or issues, feel free to contact us at [your-email@example.com]().
 -->

# Version 1.0.0 (yyyy-mm-dd)
- Initial release of the Web Terminal Emulator.
- Basic functionality with custom command logics.







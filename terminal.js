function evaluateCommand(cmd)
{
  // split cmd string by ' ' char
  let cmdArr = cmd.split(' ');

  if(cmdArr[0] === 'print')
  {
      let response = cmdArr.slice(1).join(' ');
      return response;
  }
}
let database = [];

function evaluateCommand(cmd)
{
  // split cmd string by ' ' char
  let cmdArr = cmd.split(' ');

  if(cmdArr[0] === 'print')
  {
      let response = cmdArr.slice(1).join(' ');
      return response;
  }
  else if(cmdArr[0] === 'add')
  {
    let title = cmdArr[1];
    let cost = cmdArr[2];
    let date = cmdArr[3];

    database.push({title: title, cost, date});

    return 'new entry successfully added';
  }
}
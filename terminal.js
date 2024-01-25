let database = [];

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

  // register new entities to database
  else if(cmdArr[0] === 'add')
  {
    // todo: add error handling

    // extract title, cost, date from incoming command array
    let title = cmdArr[1];
    let cost = cmdArr[2];
    let date = cmdArr[3];

    // add new entry to database
    database.push({title: title, cost, date});

    return 'new entry successfully added';
  }

  // show all entries in database
  else if(cmdArr[0] === 'show')
  {
    let response = '';
    database.forEach(function(entry){
      response += entry.title + ' ' + entry.cost + ' ' + entry.date + '\n';
    });

    return response;
  }
}
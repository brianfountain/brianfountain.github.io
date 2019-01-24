function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6X63JrKSiO5":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var myName = lmsAPI.GetStudentName();

var array = myName.split(',');

var newName = array[1] + ' ' + array[0];

player.SetVar("newName", newName);
}


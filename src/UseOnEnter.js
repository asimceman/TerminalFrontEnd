import React from "react";

const commands = {
  cd: 1,
  clear: 0,
  echo: 1,
  erase: 1,
  kill: 1,
  ls: 0,
  move: 1,
  rd: 1,
  set: 1,
  '?' : 0
};

const UseOnEnter = () => {
  const [consoleOutput, updateConsoleOutput] = React.useState([]);
  const [savedLogs, setSavedLogs] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const onEnter = (value, key) => {
    if (key === "Enter") {
      const newInput = value;

      if(value==="")
      return updateConsoleOutput(consoleOutput => consoleOutput.concat(""))
        
      setSavedLogs(savedLogs => savedLogs.concat(newInput))
        
      updateConsoleOutput(consoleOutput => consoleOutput.concat(newInput))
        
      let args = value.split(" ");

      const argument = String(commands[args[0]]);

      const newConsoleLine = String(commands[args[0]]) || "Invalid Command";
      
      if(newConsoleLine==="Invalid Command" || args.length-1!==parseInt(argument)){
      return updateConsoleOutput(consoleOutput =>
        consoleOutput.concat("Invalid Command"), setCounter(brojac=>brojac+1)
      )}

      if(args.length>1){
        return updateConsoleOutput(consoleOutput => consoleOutput.concat("Valid Command!" + args[0].toString() + " " + args[1].toString() + "!")),setCounter(counter=>counter+1); 
      }
      else
       return updateConsoleOutput(consoleOutput => consoleOutput.concat("Valid Command!" + args[0].toString() + "!")),setCounter(counter=>counter+1); 
    }
  };

  return [consoleOutput, savedLogs, counter, onEnter, updateConsoleOutput];
};

export default UseOnEnter;
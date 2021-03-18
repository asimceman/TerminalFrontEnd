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
  const [sacuvane, setSacuvane] = React.useState([]);
  const [brojac, setBrojac] = React.useState(0);

  const onEnter = (value, key) => {
      //console.log(key);
    if (key === "Enter") {
        const noviInput = value;

        if(value==="")
        return updateConsoleOutput(consoleOutput => consoleOutput.concat(""))
        
        setSacuvane(sacuvane => sacuvane.concat(noviInput))
        
        updateConsoleOutput(consoleOutput => consoleOutput.concat(noviInput))
        
        let args = value.split(" ");

        //Stavlja prazan symbol u array kad se splita ako ima space, HELP??

        console.log("Args ", args)

        const argument = String(commands[args[0]]);

      const newConsoleLine = String(commands[args[0]]) || "Invalid Command";
      
      if(newConsoleLine==="Invalid Command" || args.length-1!==parseInt(argument)){
      return updateConsoleOutput(consoleOutput =>
        consoleOutput.concat("Invalid Command"), setBrojac(brojac=>brojac+1)
      )}

      console.log(newConsoleLine);

       return updateConsoleOutput(consoleOutput => consoleOutput.concat("Ispravna komanda!")),setBrojac(brojac=>brojac+1); 
    }
    console.log(key);

    
  };

  return [consoleOutput, sacuvane, brojac, onEnter];
};

export default UseOnEnter;
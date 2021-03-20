import React from "react";
import Prompt from "./Prompt";

const MapConsoleOutput =  ({ consoleOutput, updateConsoleOutput }) => {
  
  const scrollRef = React.useRef();

  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

if(consoleOutput.length>1){
  let item = consoleOutput[consoleOutput.length-1].toString();

  const isCommandValid = item.includes("Valid Command!");
            if(isCommandValid ){
              const itemString = item.toString().split("!");
  
              //const command = itemString[1] //.toString().split(" ");

              const command = itemString[1].toString().split(" ");
              //console.log(command);
  
              let firstPart = command[0].toString();
              let argument = "";
            
            if(command.length>1){
              argument = command[1].toString();
            }

            // console.log("First part: ", firstPart);
            // console.log("Argument: ", argument);

                 fetch('http://109.237.36.76:25565/komanda/', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    command: {
                        komanda: firstPart,
                        parametri: {
                          parametar1: argument
                        }
                  }
                })

                  // body: JSON.stringify({
                  //     command: {
                  //         komanda: command,
                  //   }
                  // })
                })
                .then(res => res.text())
                .then(res => { 
                  const clone = [...consoleOutput]

                  clone[clone.length-1] = res;
                  updateConsoleOutput(clone)
                })
            }
        }
        
  return (
    <div className="console-output" ref={scrollRef}>
      {consoleOutput.map((item,index,{length}) =>  {

        if(item=="Invalid Command"){
        return(
        <div key={index}>
          <span>{item}</span>
        </div>)}

        else{
          return(
            <div key={index}>
              <Prompt />
              <span>{item}</span>
            </div>
            )
        }
      })}
    </div>
  );
};

export default MapConsoleOutput;
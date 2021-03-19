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

  const varijabla = item.includes("Ispravna komanda!");
            if(varijabla ){
              const itemString = item.toString().split("!");
  
              const komanda = itemString[1] //.toString().split(" ");

                 fetch('http://109.237.36.76:25565/komanda/', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      command: {
                          komanda: komanda,
                    }
                  })
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
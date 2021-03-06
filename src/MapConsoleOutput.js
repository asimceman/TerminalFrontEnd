import React from "react";
import Prompt from "./Prompt";

const MapConsoleOutput =  ({ consoleOutput, updateConsoleOutput, token }) => {

  
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

              //const command = itemString[1].toString().split(" ");
              //console.log(command);

              const command =  itemString[1]

  
              // let firstPart = command[0].toString();
              // let argument = "";
            
            // if(command.length>1){
            //   argument = command[1].toString();
            // }

            // console.log("First part: ", firstPart);
            // console.log("Argument: ", argument);
              console.log(token);
            

                 fetch('http://109.237.36.76:25565/command', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : "Bearer "+ token,
                  },
                  // headers: { 'Content-Type': 'application/json' },
                  // headers: {"Authorization" : "Bearer "+ token},
                  //body: JSON.stringify({ "name": 'whoso@whoso.com', location: 'sifra123'}),
                  body: JSON.stringify({
                    name: 'Asim',
                    location: 'Lokacija',
                    command: command
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

              //   const requestOptions2 = {
                  
              // };
              
              // var odgovor = await fetch('http://109.237.36.76:25565/screenshot',
              // requestOptions2,
              // );
              // var slika = await odgovor.text();
              // console.log("Slika ", slika);
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
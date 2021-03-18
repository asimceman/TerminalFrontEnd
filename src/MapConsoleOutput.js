import React from "react";
import Prompt from "./Prompt";

const MapConsoleOutput = ({ consoleOutput }) => {
  console.log(consoleOutput)
  const scrollRef = React.useRef();

  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  // return (
  //   <div className="console-output" ref={scrollRef}>
  //     {consoleOutput.map((item, index) => (
  //       <div key={index}>
  //         <Prompt />
  //         <span>{item}</span>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <div className="console-output" ref={scrollRef}>
      {consoleOutput.map(function (item, index)  {
        if(item=="Invalid Command"){
        return(
        <div key={index}>
          <span>{item}</span>
        </div>)}

        else if(item =="Ispravna komanda!"){
          return(
            <div key={index}>
              <span>{item}</span>
            </div>)
        }

        else{
          return(
            <div key={index}>
              <Prompt />
              <span>{item}</span>
            </div>)
        }
      })}
    </div>
  );
};

export default MapConsoleOutput;
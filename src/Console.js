import React from "react";
import Prompt from "./Prompt";
import UseOnEnter from "./UseOnEnter";
import MapConsoleOutput from "./MapConsoleOutput";

var br = 0;

const Console = () => {
  
  const inputText = React.useRef();

  const [consoleOutput, sacuvane, brojac, onEnter] = UseOnEnter();

  br = brojac;
  
  React.useEffect(() => {
    inputText.current.value = "";
    inputText.current.focus();
  });

const povrat= (e)=>{
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault();
    switch (e.keyCode) {
                case 38:
                    if(br!==0){
                    br = br-1;
                    inputText.current.value=sacuvane[br];
                    }
                    break;
                case 40:
                  console.log(br)
                  console.log(sacuvane.length)
                  if(br === sacuvane.length-1){
                    br=br+1
                    inputText.current.value="";
                  }
                  if(br !== sacuvane.length){
                    br = br + 1;
                    inputText.current.value=sacuvane[br];
                  }
                  
                    break;
    }
}

  return (
    <section className="console">
      <MapConsoleOutput consoleOutput={consoleOutput} />
      <div className="input-prompt">
        <Prompt />
        <input
            className="input-console"
          type="text"
          ref={inputText}
          onKeyPress={({ target: { value }, key }) => onEnter(value, key)}
          onKeyDown={povrat}
        />
      </div>
    </section>
  );
};

export default Console;

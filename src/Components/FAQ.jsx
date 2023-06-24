import { useState } from "react";
import { help } from "./constant";
const FAQ = (props) => {
  // console.log(props.index);

  return (
    <div className="flex flex-col border border-black items-center">
      <h1 className="text-lg font-bold border border-black">
        {props.section.Question}
      </h1>
      {
        props.isVisible === props.index ? (
          <div>
            <button
              className="flex items-center border border-black"
              onClick={() => {
                props.setIsVisible(-1);
                console.log(props.index)
              }}
            >
              Hide
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              props.setIsVisible(props.index);
              console.log(props.index)
            }}
          >
            Show
          </button>
        )
        // {isVisible===index && <p>{props.section.Answer}</p>}
      }
      {props.isVisible === props.index && <p>{props.section.Answer}</p>}
    </div>
  );
};

const Section = () => {
  const [isVisible, setIsVisible] = useState(-1);
  //  console.log(isTrue)
  return (
    <>
      {help.map((elements, index) => {
        return (
          <FAQ
            section={elements}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            key={index}
            index={index}
          />
        );
      })}
    </>
  );
};

export default Section;

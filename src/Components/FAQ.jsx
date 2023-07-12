import { useState } from "react";
import { help } from "./constant";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
const FAQ = (props) => {
  return (
    <div className="flex flex-col items-center mt-5 hover:shadow-lg box-border ">
      <div className="flex items-center justify-center w-full">
        <h1 className="text-md font-md inline w-96 text-center">
          {props.section.Question}
        </h1>
        {props.isVisible === props.index ? (
          <AiFillCaretUp 
            className="flex items-center  ml-5"
            onClick={() => {
              props.setIsVisible(-1);
            }}
          >
            
          </AiFillCaretUp >
        ) : (
          <AiFillCaretDown
            className="flex items-center ml-5"
            onClick={() => {
              props.setIsVisible(props.index);
            }}
          >
          </AiFillCaretDown>
        )}
      </div>
      <p
        className={`${
          props.isVisible === props.index ? "block" : "hidden"
        } mt-2 text-center w-1/2 font-sm  text-slate-500`}
      >
        {props.section.Answer}
      </p>
    </div>
  );
};

const Section = () => {
  const [isVisible, setIsVisible] = useState(-1);

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





// import { useState } from "react";
// import { help } from "./constant";

// const FAQ = (props) => {
//   return (
//     <div className="flex flex-col border items-center mt-5 shadow-lg box-border">
//       <h1 className="text-sm font-bold  inline w-96">
//         {props.section.Question}
//       </h1>
//       {props.isVisible === props.index ? (
//         <div>
//           <button
//             className="flex items-center border border-black"
//             onClick={() => {
//               props.setIsVisible(-1);
//             }}
//           >
//             Hide
//           </button>
//         </div>
//       ) : (
//         <button
//           className="flex items-center border border-black"
//           onClick={() => {
//             props.setIsVisible(props.index);
//           }}
//         >
//           Show
//         </button>
//       )}
//       <p
//         className={`${
//           props.isVisible === props.index ? "block" : "hidden"
//         } mt-2 text-center w-1/4`} 
//       >
//         {props.section.Answer}
//       </p>
//     </div>
//   );
// };

// const Section = () => {
//   const [isVisible, setIsVisible] = useState(-1);

//   return (
//     <>
//       {help.map((elements, index) => {
//         return (
//           <FAQ
//             section={elements}
//             isVisible={isVisible}
//             setIsVisible={setIsVisible}
//             key={index}
//             index={index}
//           />
//         );
//       })}
//     </>
//   );
// };

// export default Section;


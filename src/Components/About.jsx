import React from "react";
const About = () => {
  return (
    <div className=" flex justify-center mt-11">
      <div className=" text-center w-1/2 ">
        <h1 className="mb-4 text-3xl font-bold">Welcome to CraveIt 😊</h1>
        <p className="mb-3 text-lg  font-semibold">
          CraveIt is a purest form of destination for food lovers , in this
          website you are going to experience the great food with best services
          provided by us such as discounts , food delivery at door stop and a
          proper customer satisfaction. We have a various of mouthwatering
          cuisines and that will to make you more hungry . We will soon add a
          feature where you can able to submit your question in Frequently ask
          question(FAQ) , here we will take all the response and feedback from
          our customer in order to make our app more powerful.
        </p>
        <p className="text-lg font-medium text-slate-700">
          Craveit is created by :- Saloni Pandey .
        </p>
        <a
          href="https://github.com/saloni-FED"
          target="_blank"
          className="text-blue-800"
        >
          Click Here
        </a>
      </div>
    </div>
  );
};
export default About;

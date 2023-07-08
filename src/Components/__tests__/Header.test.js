import Header from "../Header";
import { getByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../../utils/ReduxStore/Store";
test("Checking Header to Render properly", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const ul = header.getByTestId("ul");
  const liElements = ul.children;
  //  console.log(liElements);
  expect(liElements.length).toBe(5);
});

test("Checking For Logo To Render", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
   const logo = header.getByTestId("logo");
   console.log(logo)
   expect(logo.src).toBe("http://localhost/public/Food%20logo.png")
    //  console.log(liElements);
    // expect(liElements.length).toBe(5);
  });
  
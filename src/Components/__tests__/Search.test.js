import Body from "../Body";
import "@testing-library/jest-dom/extend-expect";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../../utils/ReduxStore/Store";
import { RESTAURANT_DATA } from "../mocks/Data";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Test for Shimmer", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getAllByTestId("shimmer");

  expect(shimmer[0].children.length).toBe(10);
});
test("Search Results on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const restAll = body.getByTestId("res");
  expect(restAll.children.length).toBe(15);
});

test("On Change rendering", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);
  const restAll = body.getByTestId("res");
  expect(restAll.children.length).toBe(1);
});

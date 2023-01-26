/**
 * @jest-environment jsdom
 */

import * as main from "../ts/main";
// import { handleClick } from '../ts/main';

beforeEach(() => {
  document.body.innerHTML = "";
});

describe("HandleClick", () => {
  test("should add text to div", () => {
    // arrange
    document.body.innerHTML = `
    <div id="result"></div>
  `;

    // act
    main.handleClick("Testing FTW!");

    // assert
    let result = document.getElementById("result");
    expect(result).not.toBeNull();
    expect(result?.innerHTML).toBe("Testing FTW!");
  });

  test("should not add text to div", () => {
    // arrange
    document.body.innerHTML = `
      <div id="result">Lorem</div>
    `;

    // act
    main.handleClick("");

    // assert
    let result = document.getElementById("result");
    expect(result).not.toBeNull();
    expect(result?.innerHTML).toBe("Lorem");
  });
});

test("should be able to click the button", () => {
  // arrange
  document.body.innerHTML = `
    <input type="text" id="searchword" />
    <button id="search">Sök</button>
  `;

  let spy = jest.spyOn(main, "handleClick").mockReturnValue();

  // act
  main.init();
  let textbox = document.getElementById("searchword") as HTMLInputElement;
  textbox.value = "Lorem ipsum";
  document.getElementById("search")?.click();

  // assert
  expect(spy).toHaveBeenCalled();
  expect(spy).toBeCalledWith("Lorem ipsum");
});

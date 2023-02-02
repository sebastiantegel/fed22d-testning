/**
 * @jest-environment jsdom
 */

import { init } from "../personApp";

jest.mock("./../services/personService.ts");

test("should create html correctly", async () => {
  await init();

  let persons = document.querySelectorAll("h3");

  expect(persons.length).toBe(4);
  expect(persons[0].innerHTML).toBe("Sebastian");
});

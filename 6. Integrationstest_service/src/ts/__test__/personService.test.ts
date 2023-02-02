import { getPersons } from "../services/personService";
import { persons } from "../services/__mocks__/personService";

// (4)
jest.mock("axios", () => ({
  get: async (url: string) => {
    return new Promise((resolve, reject) => {
      if (!url.endsWith("error")) {
        // (5)
        resolve({ data: persons, status: 200 });
      } else {
        // (5)
        reject({ data: [], status: 500 });
      }
    });
  },
}));

test("should get test data", async () => {
  // Arrange

  // Act (8)              (1)
  let persons = await getPersons("lorem");

  // Assert
  expect(persons.length).toBe(4);
  expect(persons[0].name).toBe("Sebastian");
});

test("should generate error", async () => {
  // Arrange

  // Act (8)              (1)
  let persons = await getPersons("error");

  // Assert
  expect(persons.length).toBe(0);
});

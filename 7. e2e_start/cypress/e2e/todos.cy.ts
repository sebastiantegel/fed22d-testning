beforeEach(() => {
  cy.visit("/");
});

describe("todos application", () => {
  it("passes", () => {});

  it("should contain the header", () => {
    cy.get("h2").contains("todo").should("exist");
  });

  it("should add todo", () => {
    //cy.visit("http://localhost:1234");

    cy.get("input").type("Handla").should("have.value", "Handla");

    cy.get("button:first").click();

    cy.get("ul > li").should("have.length", 1);
  });

  it("should toggle the todo", () => {
    // Arrange
    cy.get("input").type("Handla").should("have.value", "Handla");
    cy.get("button:first").click();
    cy.get("ul > li").should("have.length", 1);

    // Act
    cy.get("ul > li:first").click();

    // Assert
    cy.get("ul > li:first").should("have.class", "todo__text--done");
  });
});

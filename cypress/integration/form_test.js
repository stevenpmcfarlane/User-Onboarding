import { iteratee } from "lodash";

describe("User Form App", () => {
  //schedule something to happen before each test
  //before each test navigate to local host
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  //use the 'it' keyword for tests
  it("sanity checks", () => {
    //assertion(s)
    expect(5).to.eql(5);
    expect(1 + 2).to.equal(3);
  });

  const submitButton = () => cy.get("button[name=submit]");
  const passwordInput = () => cy.get("input[name=password]");
  //keep going here
  it("the proper elements exist", () => {
    submitButton().should("exist");
    passwordInput().should("exist");
    //keep going here
  });

  it("test inputs working", () => {
    passwordInput()
      .should("have.value", "")
      .type("test")
      .should("have.value", "test");
  });

  //test against edge cases
  //automate form testing, make sure no validation errors, make sure they can be submitted
  //perfect world, all logic tested
  //test to make endpoints work, automate form inputs (yup is working)
});

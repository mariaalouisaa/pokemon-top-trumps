// tests to check initial page setup

test("player 1 score should display 0 at start", () => {
  const actual = document.querySelector("#score1").innerHTML;
  const expected = "0";
  equal(actual, expected);
});

test("computer score should begin at 0", () => {
  const actual = document.querySelector("#score2").innerHTML;
  const expected = "0";
  equal(actual, expected);
});

test("on page load only card backs should be visible", () => {
  //   const actual = ""
  //   const expected ="2"
  //   equal(actual, expected);
});

// ---------------------------------

// tests to check func making api call

test("clicking go button turns player1 card", () => {
  //   document.querySelector("#submit").click();
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("getPokemon() should fetch the pokeAPI", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("getPokemon() should pass the api response and player num to drawCard()", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("for player 2 there should be a 1000ms delay before calling drawCard()", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

// --------------------------------------
// tests for pickTrump()

test("pickTrump() should hide the .draw-header", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("pickTrump() should display the .pick-header", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("the .pick-header text should equal - Pick your trump!", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("pickTrump() should add eventListener to each stat", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

// --------------------------------------------
// testing playTrump()

test("playTrump() should add selected class to stat clicked", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("playTrump() should store pokemon clicked to currentAttack", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("playTrump() lastly call drawCard() as player 2", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

// --------------------------------------------
// NEED TO WRITE TESTS FOR EVERYTHING BELOW (and inc) drawCard()
// ---------------------------------------------
// testing drawCard()
test("the .pick-header text should equal the winning pokemon", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

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

test("player 1 and computer score stored should both begin at 0", () => {
  const actual = [0, 0];
  const expected = [score1, score2];
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
});

test("on page load only card backs should be visible", () => {
  //   const actual = ""
  //   const expected ="2"
  //   equal(actual, expected);
});

// ---------------------------------

// tests instructions pop up

test("clicking ? button should display how to play popup", () => {
  document.querySelector("#help").click();
  const actual = document
    .querySelector(".instructions")
    .classList.contains("hide");
  const expected = false;
  equal(actual, expected);
  document.querySelector("#help").click();
});

test("clicking x button should hide how to play popup", () => {
  document.querySelector("#help").click();
  document.querySelector("#help").click();
  const actual = document
    .querySelector(".instructions")
    .classList.contains("hide");
  const expected = true;
  equal(actual, expected);
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
// DRAWCARD() upto line 90 - if(player === 2)
// ---------------------------------------------

// testing drawCard()

test("drawCard() should fetch a new pokeAPI response", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player1 .pick-header text should equal - Pick your trump!", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player2 .pick-header text should equal - Pokemon name wins!", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player2 .pick-header text should not include undefined", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player1, their card should background colour should be that of pokemon type", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player2, their card should background colour should be that of pokemon type", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player1, their card show image of pokemon", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player2, their card show image of pokemon", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player1, their card show have name of pokemon in title", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player2, their card show have name of pokemon in title", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player1, their card show have tyoe of pokemon in title", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player2, their card show have tyoe of pokemon in title", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("pokemon title and type should be text", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("pokemon stats should be numbers", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player 1, drawCard() shouls make card1 front visible ", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player 2, drawCard() shouls make card2 front visible ", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

test("if player 2, drawCard() shouls make card2 front visible ", () => {
  //   const actual = "";
  //   const expected = "2";
  //   equal(actual, expected);
});

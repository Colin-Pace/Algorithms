/*
Write a function that would help decide in a game of blackjack.
Given 2 players with cards greater than 0, return whichever
  is nearest to 21 without going over;
  return 0 if they both go over. */

function twentyOne() {
  let intOne = Math.floor(Math.random() * 30) + 1
  let intTwo = Math.floor(Math.random() * 30) + 1

  if (intOne > 21 && intTwo > 21) {
    return `Both players are over 21`

  } else if (intOne > intTwo && intOne <= 21) {
    return `Player one wins with ${intOne} against player two with ${intTwo}`

  } else if (intOne < intTwo && intOne <= 21 && intTwo > 21) {
    return `Player one wins with ${intOne} against player two with ${intTwo}`

  } else if (intTwo < intOne && intTwo <= 21 && intOne > 21) {
    return `Player two wins with ${intTwo} against player one with ${intOne}`

  } else if (intTwo > intOne && intTwo <= 21) {
    return `Player two wins with ${intTwo} against player one with ${intOne}`

  } else if (intOne === intTwo) {
    return `Both players are equal with ${intOne}`
  }
}

console.log(twentyOne())

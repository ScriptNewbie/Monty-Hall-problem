const play = (withSwitch) => {
  const winningPosition = getRandomNumberBetweenZeroAnd(3);
  const randomPick = getRandomNumberBetweenZeroAnd(3);
  const revealed = revealOneLoosing(winningPosition, randomPick);

  return (
    (withSwitch ? switchPick(randomPick, revealed) : randomPick) ===
    winningPosition
  );
};

const zeroToTwoArray = [0, 1, 2];

const getRandomNumberBetweenZeroAnd = (something) =>
  Math.floor(Math.random() * something);

const revealOneLoosing = (winningPosition, playerPick) => {
  return zeroToTwoArray.filter(
    (i) => i !== winningPosition && i !== playerPick
  )[0];
};

const switchPick = (playerPick, revealed) => {
  return zeroToTwoArray.filter((i) => i !== playerPick && i !== revealed)[0];
};

const gamesToPlay = 1000000;

const gamesWithSwitch = Array.from({ length: gamesToPlay }, () => play(true));
const gamesWithoutSwitch = Array.from({ length: gamesToPlay }, () =>
  play(false)
);

const gamesWonWithSwitch = gamesWithSwitch.filter((i) => i).length;
const gamesWonWithoutSwitch = gamesWithoutSwitch.filter((i) => i).length;

console.log(
  "Games won with switch: ",
  gamesWonWithSwitch,
  `(${(gamesWonWithSwitch / gamesToPlay) * 100}%)`
);

console.log(
  "Games won without switch: ",
  gamesWonWithoutSwitch,
  `(${(gamesWonWithoutSwitch / gamesToPlay) * 100}%)`
);

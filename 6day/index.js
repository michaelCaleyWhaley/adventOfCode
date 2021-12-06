const lanternFish = [
  5, 1, 1, 1, 3, 5, 1, 1, 1, 1, 5, 3, 1, 1, 3, 1, 1, 1, 4, 1, 1, 1, 1, 1, 2, 4,
  3, 4, 1, 5, 3, 4, 1, 1, 5, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 4, 2, 3, 2, 1, 4, 1,
  1, 4, 2, 1, 4, 5, 5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 5, 5, 1, 1, 4, 4, 5, 1,
  1, 1, 3, 1, 5, 1, 2, 1, 5, 1, 4, 1, 3, 2, 4, 2, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1,
  1, 1, 1, 3, 5, 4, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1, 5, 1, 1, 1, 4, 1, 4, 1, 1,
  1, 1, 1, 2, 1, 1, 5, 1, 2, 1, 1, 2, 1, 1, 2, 4, 1, 1, 5, 1, 3, 4, 1, 2, 4, 1,
  1, 1, 1, 1, 4, 1, 1, 4, 2, 2, 1, 5, 1, 4, 1, 1, 5, 1, 1, 5, 5, 1, 1, 1, 1, 1,
  5, 2, 1, 3, 3, 1, 1, 1, 3, 2, 4, 5, 1, 2, 1, 5, 1, 4, 1, 5, 1, 1, 1, 1, 1, 1,
  4, 3, 1, 1, 3, 3, 1, 4, 5, 1, 1, 4, 1, 4, 3, 4, 1, 1, 1, 2, 2, 1, 2, 5, 1, 1,
  3, 5, 2, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 5, 4, 1, 1, 1, 1, 1, 2, 1, 2, 1, 5, 1,
  1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 5, 3, 3, 1, 1, 2, 4, 4, 1, 1,
  2, 1, 1, 3, 1, 1, 1, 1, 2, 3, 4, 1, 1, 2,
];

function simulateLanternFishGrowth() {
  let finalLanternFish = lanternFish;
  for (let index = 0; index < 256; index++) {
    const reducedFish = finalLanternFish.map((fish) => {
      return fish - 1;
    });
    for (let i = 0; i < reducedFish.length; i++) {
      const fish = reducedFish[i];
      if (fish === -1) {
        reducedFish[i] = 6;
        reducedFish.push(8);
      }
    }

    finalLanternFish = reducedFish;
  }

  console.log(`finalLanterFish: `, finalLanternFish.length);
}
simulateLanternFishGrowth();

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

function reduceFish(fishList) {
  const fishMap = {};
  fishList.map((fish) => {
    if (!fishMap[fish]) {
      fishMap[fish] = 0;
    }
    fishMap[fish] = fishMap[fish] + 1;
  });
  return fishMap;
}

function growFish() {
  const fish = reduceFish(lanternFish);
  for (let i = 0; i < 256; i++) {
    const fishKeys = Object.keys(fish);
    fishKeys.map((fishKey, index) => {
      const prevFishKey = parseInt(fishKey, 10) - 1;
      fish[prevFishKey] = fish[fishKey];
      delete fish[fishKey];
    });

    if (fish["-1"]) {
      fish[6] = fish[6] ? fish[6] + fish["-1"] : fish["-1"];
      fish[8] = fish["-1"];
      delete fish["-1"];
    }
  }

  let total = 0;
  for (const fishKey in fish) {
    total += fish[fishKey];
  }
  console.log(`total: `, total);
}
growFish();

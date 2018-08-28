const path = require('path');

const gd = require('node-gd');
const rand = require('random-seed');

const IMAGE_DIMENSION = 120;

function buildMonster(canvas, randGen) {
  monsterStitch = {
    background: randGen.intBetween(1, 2),
    body: randGen.intBetween(1, 2),
    mouth: randGen.intBetween(1, 2),
    eyes: randGen.intBetween(1, 2),
  };

  for (let partType in monsterStitch) {
    if (monsterStitch.hasOwnProperty(partType)) {
      const imagePath = path.join(__dirname, '../../images', `${partType}_${monsterStitch[partType]}.png`);
      const monsterPart = gd.createFromPng(imagePath);

      monsterPart.copy(canvas, 0, 0, 0, 0, IMAGE_DIMENSION, IMAGE_DIMENSION);
    }
  }

  return canvas.pngPtr();
}

function generateAvatar(identifier) {
  const gen = new rand(identifier);

  const canvas = gd.createTrueColorSync(IMAGE_DIMENSION, IMAGE_DIMENSION);
  const white = canvas.colorAllocate(255, 255, 255);
  canvas.fill(0, 0, white);

  return buildMonster(canvas, gen);
}

module.exports = {
  buildMonster,
  generateAvatar
};

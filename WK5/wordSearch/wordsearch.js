const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const transposedArr = [];

  for (let t = 0; t < letters[0].length; t++) {
    transposedArr.push([]);
  }

  for (let x = 0; x < letters.length; x++) {
    for (let y = 0; y < letters[x].length; y++) {
      transposedArr[y].push(letters[x][y]);
    }
  }

  const verticalJoin = transposedArr.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
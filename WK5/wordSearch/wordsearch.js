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

  const horReverse = [];
  for (let l of letters) {
    horReverse.push(l.reverse());
  }

  const horReverseJoin = horReverse.map(ls => ls.join(''));
  for (let l of horReverseJoin) {
    if (l.includes(word)) return true;
  }

  const verReverse = [];
  for (let t of transposedArr) {
    verReverse.push(t.reverse());
  }

  const verReverseJoin = verReverse.map(ls => ls.join(''));
  for (let l of verReverseJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

console.log(wordSearch([

  ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],

], 'SEINFELD'));

module.exports = wordSearch;
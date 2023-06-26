const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let verticalString = "";
    for (let j = 0; j < letters.length; j++) {
      verticalString += letters[j][i];
    }
    verticalJoin.push(verticalString);
  }

  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;

};

module.exports = wordSearch;

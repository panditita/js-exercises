function countSmileys(arr) {
  let result = [];
  const smileys = [":)", ":D", ";-D", ":~)", ";~D"];

  arr.forEach(smiley1 => {
    smileys.forEach(smiley2 => {
      if (smiley1 === smiley2) {
        result.push(smiley1);
      }
    });
  });
  return result.length;
}

countSmileys([]); // 0);
countSmileys([":D", ":~)", ";~D", ":)"]); //, 4);
countSmileys([":)", ":(", ":D", ":O", ":;"]); //, 2);
countSmileys([";]", ":[", ";*", ":$", ";-D"]); //, 1)

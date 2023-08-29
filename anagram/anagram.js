const checkAnagram = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 !== len2) {
    console.log("Not anagram.");
    return;
  }
  // for word
  const a = str1.toLowerCase().split("").sort().join("");
  const b = str2.toLowerCase().split("").sort().join("");
  /* ----------------for phrases-------------   
    const a = str1.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    const b = str2.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
  */
  if (a == b) {
    console.log("They are anagram.");
  } else {
    console.log("They are not anagram.");
  }
};

checkAnagram("Apple", "lppea");

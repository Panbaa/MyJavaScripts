// A small function that takes a String and makes a CamelCase-Hashtag out of it.
function generateHashtag(str) {
  if (/^\s*$/.test(str)) return false;

  const result =
    '#' +
    str
      .split(' ')
      .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
      .join('');

  return result.length > 140 ? false : result;
}

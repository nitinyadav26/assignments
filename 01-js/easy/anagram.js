function isAnagram(str1, str2) {
  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Quick length check
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort and compare
  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}


module.exports = isAnagram;

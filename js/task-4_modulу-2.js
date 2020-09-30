function formatString(string, maxLength = 40) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  } else return string;
}
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);

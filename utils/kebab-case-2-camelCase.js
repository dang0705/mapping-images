const upperCase = (all, letter) => letter.toUpperCase();
export default (str) => str.replace(/-(\w)/g, upperCase);

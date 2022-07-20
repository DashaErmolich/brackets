module.exports = function check(str, bracketsConfig) {
  // your solution

  // const openBrackets = ['(', '{', '|', '['];

  // const bracketsPairs = {
  //   [')']: '(',
  //   ['}']: '{',
  //   ['|']: '|',
  //   [']']: '[',
  // };


  const openBrackets = [];
  const bracketsPairs = {};
  const similarBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    let brPair = bracketsConfig[i];
    let openBr = brPair[0];
    let closeBr = brPair[1];

    if (openBr === closeBr) {
      similarBrackets.push(openBr)
    }

    openBrackets.push(openBr);
    bracketsPairs[closeBr] = openBr;

  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topStackElement = stack[stack.length - 1];

    if (similarBrackets.includes(currentSymbol) && stack.includes(currentSymbol)) {
      if (currentSymbol === topStackElement) {
        stack.pop()
      } else {
        return false
      }
    } else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (bracketsPairs[currentSymbol] === topStackElement) {
        stack.pop()
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;

}



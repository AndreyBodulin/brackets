module.exports = function check(s, bracketsConfig) {
  console.log(s);
  let sum = 0;
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  // в качестве стека в JavaScript можно использовать обычный массив
  //(если пользоваться только «разрешенными» методами push & pop)
  const st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '|') {
      sum += 1;
      continue;
    };
    if (isClosedBracket(s[i])) {
      if (brackets[s[i]] !== st.pop()) return false;
    // это открывающая скобка, т.к. других символов по условию в строке нет
    } else {
      st.push(s[i]);
    }
  }
  if (sum % 2 == 0 && (s.indexOf('|') != -1)) return true;
  console.log(sum);
  return st.length === 0;
  function isClosedBracket(ch) {
    return [')', ']', '}'].indexOf(ch) > -1;
  }
}
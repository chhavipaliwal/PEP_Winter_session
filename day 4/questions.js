// Debounce Function: Implement a debounce function that limits the frequency of a function's execution when
//  called repeatedly within a specified time frame. This is useful in scenarios like resizing or scrolling events.
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}
const log = debounce(() => console.log("Hello"), 1000);
log();
log();
log();
//Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
  let max = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) {
      start = Math.max(start, seen[s[i]]);
    }
    max = Math.max(max, i - start + 1);
    seen[s[i]] = i + 1;
  }
  return max;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
//Group Anagrams: Given an array of strings, group them into anagrams.
function groupAnagrams(strs) {
  let map = {};
  for (let str of strs) {
    let key = [...str].sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }
  return Object.values(map);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//Valid Parentheses: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
function isValid(s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (char in map) {
      stack.push(char);
    } else {
      if (char !== map[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

// Debounce Function: Implement a debounce function that limits the frequency of a function's execution when
//  called repeatedly within a specified time frame. This is useful in scenarios like resizing or scrolling events.
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}
const logs = debounce(() => console.log("Hello"), 1000);
logs();
logs();
logs();
//Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
  let max = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) {
      start = Math.max(start, seen[s[i]]);
    }
    max = Math.max(max, i - start + 1);
    seen[s[i]] = i + 1;
  }
  return max;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
//Group Anagrams: Given an array of strings, group them into anagrams.
function groupAnagrams(strs) {
  let map = {};
  for (let str of strs) {
    let key = [...str].sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }
  return Object.values(map);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//Valid Parentheses: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
function isValid(s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (char in map) {
      stack.push(char);
    } else {
      if (char !== map[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8)); // Output: 5

function findMissingNumber(arr, n) {
    const sum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((acc, num) => acc + num, 0);
    return sum - arrSum;
  }
  
  console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8)); // Output: 5


  console.log(flatten([1, [2, [3, 4], 5], 6])); 
  // Output: [1, 2, 3, 4, 5, 6]
  function flatten(arr) {
    return arr.flat(Infinity);
  }
  
  console.log(1 + '1'); 
  11
-------------------------------
  console.log('5' - 3);
  2
  -----------------
  var a = 2;
console.log(a++); 
console.log(a); 
The first console.log(a++) will output 2 because the post-increment operator returns the current value of a before incrementing it.

The second console.log(a) will output 3 because a was incremented after the first log.


-----------------------------------------------------------
Okay, So I think now most of the things looks good,
Let's give one round test all together and identify issues.
And then we will deploy new build for quick fixes.

And for performance issue I will check in the online tool and analyze why it is taking more time to load the contents.

I need half an hour break, will back online after that.




console.log(typeof NaN);
console.log(NaN === NaN);

"number"
false

--------------------------------------

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
} 

3
3
3
-------------------------------

int x = 10;
x = x++ + ++x;
System.out.println(x);

x = 10 + 12 = 22
----------------------------
What happens if you apply both hidden and block in Tailwind?


-------------------------------
Create a custom useToggle hook

function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState((prev) => !prev);
  return [state, toggle];
}
--------------------------------------------------
Sticky navbar with Tailwind

<nav class="sticky top-0 bg-white shadow z-50 p-4">
  I stick to the top!
</nav>

---------------------------------------
const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
------------------------------------------------------------------
function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
Input: "hello"
Output: "olleh"
-----------------------------------------------------------
Count the Number of Vowels in a String   
str='anaconda'
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
-----------------------------------------------
4. Explain useEffect Cleanup
jsx
Copy
Edit
useEffect(() => {
  const interval = setInterval(() => console.log("Running..."), 1000);
  return () => clearInterval(interval); // cleanup
}, []);
-------------------------------------------------
5. React Render Logic Question
Q: How many times will this render?

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  }, []);
  return <div>{count}</div>;
}
🧠 Answer: 2 renders.
First with 0, then re-renders with 1 because of setCount(1) in useEffect.
---------------------------------------------------------------------
vertual DOM
state and props
controlled and uncontrolled Component 
useEffect
why use key in list 
difference between usestate and usereducer 
how react handel rendering 
div and section in html 
semantic html 
data atribute in html 
<div data-user-id="123"></div>
differnce between position absolute ,relative,fixed 
flexbox and why it is use 
How to center a div using CSS?
What are var, let, and const?
What is hoisting in JavaScript?
What are closures?
What is the difference between null and undefined?
What is the difference between synchronous and asynchronous code?
Answer:

Synchronous: Executes line-by-line.

Asynchronous: Allows code to run in the background (e.g., setTimeout, fetch, Promises).

What is the difference between map(), forEach(), and filter()?
Find the Largest Number in an Array?
console.log(findLargest([1, 5, 2, 9, 3])); // 9
console.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]

console.log(countOccurrences(["a", "b", "a"])); // { a: 2, b: 1 }
function countOccurrences(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3
function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}

console.log(capitalizeWords("hello world")); // "Hello World"
function capitalizeWords(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

prathmesh as you said low ratting in html/CSS,
 what if i give you figma design would you be able convert it into html templates?
No:


function findDuplicates(arr) {
  const seen = {};
  const duplicates = [];

  for (let num of arr) {
    if (seen[num]) {
      if (!duplicates.includes(num)) duplicates.push(num);
    } else {
      seen[num] = true;
    }
  }

  return duplicates;
}

// Example
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // ➞ [2, 1]

------------------------------------------
function countChars(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

// Example
console.log(countChars("aabbc")); // ➞ { a: 2, b: 2, c: 1 }
-------------------------------------------------------------------
function commonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

// Example
console.log(commonElements([1, 2, 3], [2, 3, 4])); // ➞ [2, 3]
----------------------------------------------------------------------

Ensure a function can only be called once.

function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

// Example:
const init = once(() => console.log("Initialized"));
init(); // "Initialized"
init(); // (no output)
------------------------------------------------------------------
Find Longest Substring Without Repeating Characters
function longestUniqueSubstring(s) {
  let start = 0, maxLen = 0;
  const seen = {};

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] >= start) {
      start = seen[s[i]] + 1;
    }
    seen[s[i]] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

// Example:
console.log(longestUniqueSubstring("abcabcbb")); // ➞ 3 ("abc")
--------------------------------------------------------------------
Explain the difference between em, rem, %, vw, and vh.
What are pseudo-classes in CSS? Give examples.
What is event delegation?
Explain React lifecycle methods (class components) or useEffect (hooks).
How do you optimize a React app?
What are lazy loading and code splitting?

Implement a debounce function to delay a function call until after a specified time.
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage
const log = debounce(() => console.log('Called!'), 300);
window.addEventListener('resize', log);
----------------------------------------------------------------------
Fetch a list of users from an API and display their names. using react js
https://jsonplaceholder.typicode.com/users
-----------------------------------------------------
DOM Change the page background color when a button is clicked.
<button onclick="changeBackground()">Change Background</button>

<script>
  function changeBackground() {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
</script>
------------------------------------------------------
Create a 3-column grid layout that becomes 1-column on mobile.
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
---------------------------------------------------------------





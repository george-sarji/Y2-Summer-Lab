# Labs for Day 3, Lecture 1
## Introduction to JavaScript, Part 1 (Syntax)

## 0 &ensp; Getting Started

1. **Fork** this repository by clicking "Fork" on this page: `https://github.com/meet-projects/y2s18-intro-js-1`.
    ![forking](https://image.ibb.co/jHRieT/forking.png)
2. In **Terminal**, change directory onto your Desktop: 
`cd ~/Desktop`
3. **Clone** the repository `y2s18-intro-js-1` onto your Desktop, replacing `<username>` with your Github username in the following command:
    - `$ git clone https://github.com/<username>/y2s18-intro-js-1`.

## 1 &ensp; Labs

### 1.1 &ensp; User I/O (`./hello-world`)
0. Make sure you are in the **`~/Desktop/intro-js-1`** directory. Open `hello-world/hello-world.html` in Sublime Text (or any other text editor).
1. In the `<script></script>` tags, use ``console.log`` to print "Hello, World" to the console.
2. Open the **Chrome Inspector** (`Right Click > Inspect`) in **Chromium Web Browser** and look for the **Console**. Check to see if "Hello, World" was output to the console. If not, refresh and try again.
3. Raise your hand and get checked off by a TA or instructor. Nice work!

### 1.2 &ensp; Variables, Numbers, and Strings (`./vars`)
0. Make sure you are in the **`~/Desktop/intro-js-1`** directory. Open `vars/vars.html` in Sublime Text (or any other text editor). Write all of your code in between the `<script></script>` tags.
1. Use `prompt` to ask the user for the year they were born. Store this value as a Number using `parseInt` in a variable called `birthYear`.
2. Ask the user for their lucky number. Store this value as a Number using `parseInt` in a variable called `luckyNumber`.
3. Create two `String` type variables called `favFruit` and `favSubject`. `favFruit` should contain your favorite fruit, and `favSubject` should contain your favorite subject.
4. Answer the following questions:
    1. What is the remainder when `birthYear` is divided by `luckyNumber`?
    2. What is the value of `birthYear + luckyNumber`?
    3. What is the value of `birthYear + favSubject`?
    4. What is the value of `favFruit + birthYear + luckyNumber`?
    5. What is the value of `birthYear + luckyNumber + favSubject`?
5. Raise your hand and get checked off by a TA or instructor. Nice work!

**Not sure what to do?** Try Googling for the following terms:
`javascript string to int`, `javascript variables`, `javascript order of operations`

### 1.3 &ensp; Arrays (`./arrays`)
0. Make sure you are in the **`~/Desktop/intro-js-1`** directory. Open `arrays/arrays.html` in Sublime Text (or any other text editor). Write all of your code in between the `<script></script>` tags.
1. Ask the user for three things that they are excited for about MEET, separated by a comma and a space: `", "`.
2. **Split** their answer into an array using and **sort** the array.
3. Finally, **join** the resulting array together with `", "` and display it on the web page with `document.write`.
4. Raise your hand and get checked off by a TA or instructor. Nice work!

**Not sure what to do?** Try Googling for the following terms:
`javascript split string`, `javascript sort array`, `javascript join array`

### 1.4 &ensp; Loops (`./loops`)
0. Make sure you are in the **`~/Desktop/intro-js-1`** directory. Open `loops/loops.html` in Sublime Text (or any other text editor). Write all of your code in between the `<script></script>` tags.
1. Let's write a guessing game! The code given to you generates a random number from 1 to 100 and stores it in a variable called `randomInt`. Using loops and conditionals, write a guessing game that does the following:
    1. Prompt the user to guess a number.
    2. If their guess is greater than `randomInt`, tell them that they guessed too high. If their guess is less than `randomInt`, tell them that they guessed to low.
    3. If they guessed correctly, congratulate them and let them know how many guesses it took them to get the right answer.
3. Raise your hand and get checked off by a TA or instructor. Nice work!


### 1.5 &ensp; Functions (`./functions`)
0. Make sure you are in the **`~/Desktop/intro-js-1`** directory. Open `functions/functions.html` in Sublime Text (or any other text editor). Write all of your code in between the `<script></script>` tags.
1. A **palindrome** is a phrase that, when only letters are kept, reads the same both forwards and backwards. For example, "Madam, I'm Adam" is a palindrome, because when only letters are kept, "madamimadam" is the same as its reverse.
2. Write a function called `isPalindrome(<word>)` that returns `true` or `false`, depending on whether or not the argument is a palindrome, using our provided `isLetter(<char>)` function. A `for` loop will be helpful too.
3. Prompt the user to input a phrase, and then output to the screen a message whether or not their input is a palindrome.
4. Raise your hand and get checked off by a TA or instructor. Nice work!

## 2 &ensp; Challenges
### 2.1 &ensp; Arrays (`./arrays`)
1. Try to sort an array of numbers, e.g. `[4, 10, 23, 16]`, using the `Array.sort()` method. Why is the answer incorrect? Use Google to find a way to sort numbers correctly in JavaScript.

### 2.X &ensp; Culminating Challenge
Write a two player game of [Tic-Tac-Toe](https://en.wikipedia.org/wiki/Tic-tac-toe) in JavaScript.

The game should do the following:
1. Alternate turns between the two players, prompting each player to enter his or her move as an index from 1 to 9 (for the nine spots on the board).
2. When prompting the user for a move, display the current state of the board in the `prompt`.
3. Check that the player entered a valid move: between 1-9, and only free spaces are allowed.
4. After each move, check to see if a player won, or if the game ended in a draw (neither player won).
5. After the game ends, ask the players if they want to start a new game, and start a new game if they do.


## 3 &ensp; References
* JavaScript Numbers: https://www.w3schools.com/jsref/jsref_obj_number.asp
* JavaScript Strings: https://www.w3schools.com/jsref/jsref_obj_string.asp
* JavaScript Errors: https://www.w3schools.com/js/js_errors.asp
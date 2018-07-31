# Exercises for Day 3 Lecture 2
## Introduction to JavaScript, Part 2 (Web Pages)

## 0 &ensp; Getting Started
1. **Fork** the repository `https://github.com/meet-projects/y2s18-intro-js-2`.
2. **Change directory on your Desktop** with **Terminal** using the following command: `cd ~/Desktop`.
2. **Clone** the repository `y2s18-intro-js-2` onto your Desktop, replacing `<username>` with your Github username in the following command:
    - `$ git clone https://github.com/<username>/y2s18-intro-js-2`.

## 1 &ensp; Labs

### 1.0 &ensp; Separation of Concerns (`./separation`)
0. For this lab, you'll be working in the **`~/Desktop/intro-js-2/separation`** directory. Make sure you are in the right directory.
1. In `separation.html`, include the JavaScript file `code.js` using a `<script>` tag with a `src` attribute.
2. In `code.js`, add an `alert` that pops up with your name.
3. Open `separation.html` in Google Chrome. If you see a popup alert, you did it!
4. Raise your hand and get a checkoff from a TA or Instructor. Nice work!

### 1.1 &ensp; Object literals and JSON (`./object-literals`)
0. For this lab, you'll be working in the **`~/Desktop/intro-js-2/object-literals`** directory. Make sure you are in the right directory. Make sure that you are adding your HTML and JavaScript to the correct files - don't add HTML to your `.js` file!
1. Create an object literal called `me` in `object-literals.js` that represents yourself. The object should contain the following properties:
    1. `firstName` (type: String) Your first name
    2. `lastName` (type: String): Your last name
    3. `favoriteFoods` (type: Array): An array of your favorite foods
    4. `age` (type: Number): Your age
    5. `picture` (type: String): A URL to a picture you like.
2. Convert your object literal `me` into a JSON String that can be shared on different computers, and display it on the HTML page using `document.write`.
3. Open `object-literals.html` in **Chromium Web Browser**.
3. Go to https://api.meet.sh/json/ and submit your JSON string from step 2. If everything works, you just successfully transmitted data from your computer (the client) to `https://api.meet.sh` (the server), without needing to do much work.
4. Raise your hand and get a checkoff from a TA or Instructor. Nice work!

### 1.3 &ensp; Selecting and Manipulating DOM Elements (`playground`)
0. Go to https://api.meet.sh/playground using **Chromium Web Browser**.
1. Read the following source code of the website to understand the elements on the page:

```html
<!DOCTYPE html>
<html>

<head>
    <title>DOM Playground</title>
</head>

<body>

<div class="header">
    <h1 class="title">All About Cats</h1>
    <h2 class="subtitle">by Matthew Feng</h2>
</div>

<div class="about">
    <h2>About</h2>
    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350">

    <p>Cats are great.</p>
    <p>They are cute.</p>
    <p>They are also fun to play with.</p>
</div>

<div class="details">
    <h2>Details</h2>
    <h3 class="heading">Things cats don't like, not in order</h3>
    <ul>
        <li class="dislike">Car rides</li>
    </ul>

    <h3 class="heading">Things cats like, in order</h3>
    <ol>
        <li class="like">Fresh Food</li>
        <li class="like">Fun Games</li>
        <li class="like">Lots of Sleep</li>
    </ol>
</div>

</body>

</html>
```

2. Try to do the following in the **Chrome Inspector** (`Right Click > Inspect`, look for **Console**):
    1. Select the **first heading with class `title`** and change the font color to a color that you like.
    2. Select the second paragraph ("They are cute") and change the text to say something else.
    3. Use a **class selector** to change the background color of the "About" section.
    4. Use a **class selector** to change the background color of the "Details" section.
    5. You can change the `src` attribute of an image! Try using [this answer](https://stackoverflow.com/questions/9731728/javascript-change-img-src-attribute-without-jquery) to do it.

### 1.4 &ensp; Events (`./html-events`)
0. For this lab, you'll be working in the **`~/Desktop/intro-js-2/html-events`** directory. Make sure you are in the right directory. Make sure that you are adding your HTML and JavaScript to the correct files - don't add HTML to your `.js` file!
1. Add a button to `html-events.html`. The button should do two things when it is clicked:
    1. It should prompt the user for a color.
    2. After getting an answer, the background color of the web site should change to that color. In order to do this, you need to **select the `body` element of the website.**
6. Raise your hand and get a checkoff from a TA or Instructor. Nice work!

### 1.5 &ensp; Event Listeners (`./event-listeners`)
0. For this lab, you'll be working in the **`~/Desktop/intro-js-2/event-listeners`** directory. Make sure you are in the right directory. Make sure that you are adding your HTML and JavaScript to the correct files - don't add HTML to your `.js` file!
1. Lets create a simple slideshow! Go on Google and download 5 pictures that you like. If you need some help finding images, [Unsplash](https://unsplash.com/) has some pretty photos. Save them into the `~/Desktop/intro-js-2/imgs` directory.
2. Create an image in `event-listeners.html` using a `<img>` tag.
3. In `event-listeners.js`, create an array called `pictures` of the file names of the images that you downloaded. One of the elements in the array should be `'./imgs/dog.jpg'`.
4. Attach a `click` event listener to the image you created in step 2. The event listener should call the `showNextPicture` function.
5. **Finish the `showNextPicture` function in `event-listeners.js`.** Have the image change its `src` attribute when the image is clicked. The value of the `src` attribute should be based on `currentIndex`. 
6. Raise your hand and get a checkoff from a TA or Instructor. Nice work!

## 2 &ensp; Challenges

### 2.1 &ensp; Object Constructors (`./object-constructors`)
0. For this extra lab, you'll be working in the `object-constructors` directory. Make sure you are in the right directory. Make sure that you are adding your HTML and JavaScript to the correct files - don't add HTML to your `.js` file!
1. Write an object constructor an item a restaurant would sell, called a **MenuItem**. The object should have the following properties:
    1. `name` (type: String): The name of the **MenuItem**.
    2. `price` (type: Number): The price of the **MenuItem**.
    3. `restaurant` (type: String): The name of the restaurant that sells this **MenuItem**.
    4. `getInfo()` (type: Function): Calling this function should return **a sentence** containing the name of the **MenuItem**, its price, and the name of the restaurant where it can be purchased.
2. Create at least three different **MenuItem**'s from restaurants that you've seen before.
3. Display, using `document.write`, the `getInfo()` sentence of each **MenuItem**.

### 2.2 &ensp; Events
#### 2.2.1 Counter
1. Let's create a counter. In `html-events.html`, display the value 0 in a `<h1>` tag.
2. Create a new button in `html-events.html` that, when clicked, increments the value inside the `<h1>` tag.
3. Create a final button in `html-events.html` that, when clicked, resets the value inside the `<h1>` tag back to 0.

#### 2.2.1 Color Wheel
1. Create a button that in `html-events.html` that, when clicked, cycles the background color of the entire web page in the following order: red, yellow, green, blue, purple.

### 2.3 &ensp; Event Listeners
1. Look up the modulus operator `%`. Use the modulus operator to turn 
```js
if (currentIndex >= pictures.length) {
    currentIndex = 0;
}
```
into one line of code.

### 2.4 &ensp; Forms (`./form-validation`)
0. For this lab, you'll be working in the **`~/Desktop/intro-js-2/form-validation`** directory. Make sure you are in the right directory. Make sure that you are adding your HTML and JavaScript to the correct files - don't add HTML to your `.js` file!
1. Change the `rating` input field in the rating form (`ratingForm`) so that it only allows users to enter numbers.
2. Add a `onsubmit` event listener to the form, and have it check `validateForm()` in order to make sure the form has valid values in both the `username` and `rating` input fields. 
3. **Finish the function `validateForm()`** so that ratings cannot be less than 0 or greater than 5. Make sure that usernames have length greater than 0 as well.

#### 2.4.1 &ensp; Client-side vs. Server-side
4. Demonstrate that client-side form validation isn't enough by giving a user a rating that's greater than 5 (or less than 0).

### 2.X &ensp; Culminating Challenge
Take the [Tic-Tac-Toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game logic from the previous culminating challenge and build a frontend user interface. Don't prompt the players to type in their move anymore. Instead, the players should be able to click on the screen to make their move.

## 3 &ensp; References
1. JavaScript Events: https://www.w3schools.com/js/js_events.asp
2. List of JavaScript Events: https://www.w3schools.com/jsref/dom_obj_event.asp
3. JavaScript `addEventListener()`: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
4. DOM Visualizer: http://bioub.github.io/d3.DOMVisualizer/

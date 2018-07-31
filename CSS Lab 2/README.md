# Lab 1
## 1. Fork and clone

Before we begin, make sure to fork and clone this repository as we did yesterday:

  - Click the *Fork* button at the top right of the screen to make your own copy of the repository
  - Clone it as we did before:
  ```
  cd ~/Desktop
  git clone <YOUR-REPO-URL>
  cd y2s18-css2
  ```
## 2. Open the page

Open `lab1.html` in your browser. Take a look at it, before you make all your changes!

## 3. Style the header

- In `lab1_styles.css`, give the header class a bottom border of 5 pixel solid gray.
- Give it an all-around padding of 10px.

## 4. Style the sidebar

- Give it a padding of 15px on the left and right, and 10px on the top and bottom.
### Reload the page
- Notice that the sidebar and main content are overlapping!
#### Fix this issue 
  - Make the by making the **total width**  of the sidebar be 200px 
  - see the slide on total width and height to adjust your calculations)

## 5. Style the main content
- Give it a 5 pixel wide, solid, blue border.
- Give it margins of 5 pixels all around.
- Add padding on the left and right of 15 pixels, and on the bottom of 10 pixels.


Your page should look like this when you're done:
![lab1_final](https://preview.ibb.co/dKbbyo/d3l1.png)

## Extras!
1. Look up why there has to be `margin:0` for the body.
2. Give the title a box shadow.
3. Give the title text shadow.
4. Remove the underline from the links in the sidebar.

# Lab 2

## 1. Open the page

- Open `lab2.html` in your browser and take a look at it!

## 2. Add hover to your link!

- In `lab2_styles.css`, add a `hover` selector, so every link has a blue background color when you hover over it.
- Open `lab2.html` in your browser and see what happens!

## 3. Hover with IDs.
- In `lab2.html`, choose a specific paragraph, and give it an ID of `important_paragraph`.
- In `lab2_styles.css`, add a hover selector for  this paragraph. Hovering over this paragraph should make the background color yellow, and the text size 40 point.

*Hint: Check out the font-size attribute*

## 4. Hover with class selectors.
- Now, for the remaining paragraph elements on the page, add them to a class `less_important_paragraphs`.
- When you hover over any of the paragraphs in this class, make the font color blue.

## Bonus: Complex Hovering!
- Add a `<span>` element, right before the last paragraph in `lab2.html`, containing the text `What happens if you hover over me?`, with ID `span_cover`.
- Now, add an additional div in `lab2.html`, with ID `hidden_div`. This div should contain the last paragraph of text in your website. Make sure this is below the `<span>` element you previously created!
- Make sure you can see this text, if you open `lab2.html` in your browser!
- Select this div, by ID, and add the rule `display: none;`, as one of its rules in `lab2_styles.css`.
- Open `lab2.html` in your browser - does anything look different? 
- Add a rule in `lab2_styles.css` which says:
```
#span_cover:hover + #hidden_div {
    display: block;
}
```
- Open `lab2.html` in your browser - what does it look like now?
*Go on W3 to figure out how this rule works!*
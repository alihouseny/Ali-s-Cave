# HTML Interview Questions & Answers

> **Every question in this file has an answer.**
>
> Use this file for interview preparation and revision. Read the question, answer it yourself, then open the answer.

---
every table must hace a row and rows so the database can inserted and more indexig




## 📌 Table of Contents

- [Basics](#basics)
- [Structure and Head](#structure-and-head)
- [Text and Formatting](#text-and-formatting)
- [Links and Images](#links-and-images)
- [Layout and Semantic HTML](#layout-and-semantic-html)
- [Media](#media)
- [Lists and Tables](#lists-and-tables)
- [Forms](#forms)
- [Attributes](#attributes)
- [Rapid Revision Q&A](#rapid-revision-qa)

---

# Basics

## 1. What is HTML?

### Answer

HTML stands for **HyperText Markup Language**.

It is the standard markup language used to create web pages and describe their structure.

---

## 2. What is an HTML tag?

### Answer

A tag is the markup syntax used to define an HTML element.

Example:

```html
<p>
```

Most tags have an opening and closing tag.

---

## 3. What is an HTML element?

### Answer

An HTML element can contain a start tag, content, and an end tag.

Example:

```html
<p>Hello</p>
```

Some elements have no content and no closing tag, such as `<br>` and `<img>`.

---

## 4. What is the difference between a tag and an element?

### Answer

A **tag** is the markup itself, such as `<p>`.

An **element** is the complete structure, such as:

```html
<p>Hello</p>
```

---

## 5. What is an empty element?

### Answer

An empty element does not contain content and does not have a closing tag.

Examples:

```html
<br>
<hr>
<img>
<input>
```

---

## 6. What is a nested element?

### Answer

A nested element is an element placed inside another element.

Example:

```html
<a href="https://github.com">
  <img src="photo.jpg" alt="photo">
</a>
```

Here `<img>` is nested inside `<a>`.

---

# Structure and Head

## 7. What is the purpose of `<!DOCTYPE html>`?

### Answer

It declares that the document is an **HTML5 document**.

---

## 8. What are the main parts of an HTML document?

### Answer

The main parts are:

```html
<!DOCTYPE html>
<html>
<head>
<body>
```

---

## 9. What is the purpose of `<html>`?

### Answer

`<html>` is the root element of the HTML document and wraps the page content.

---

## 10. What is the purpose of `<head>`?

### Answer

`<head>` contains metadata and document information, such as:

- `<title>`
- `<meta>`
- character set
- description
- keywords
- author
- viewport settings

---

## 11. What is the purpose of `<body>`?

### Answer

`<body>` contains the visible content of the webpage, including headings, paragraphs, images, links, tables, and lists.

---

## 12. What is the purpose of `<title>`?

### Answer

`<title>` defines the title of the document/page shown by the browser.

Example:

```html
<title>My Website</title>
```

---

## 13. What is `<meta>` used for?

### Answer

The supplied session material lists these uses:

- Character set
- Page description
- Keywords
- Author
- Viewport settings

Example:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

# Text and Formatting

## 14. What are headings in HTML?

### Answer

Headings are defined from `<h1>` to `<h6>`.

```html
<h1>Main Heading</h1>
<h2>Section</h2>
```

`<h1>` is the highest level and `<h6>` is the lowest.

---

## 15. What is the `<p>` tag?

### Answer

`<p>` defines a paragraph.

```html
<p>This is a paragraph.</p>
```

---

## 16. What is the `<br>` tag?

### Answer

`<br>` inserts a line break.

```html
Line one<br>Line two
```

It is an empty element.

---

## 17. What is the `<hr>` tag?

### Answer

`<hr>` creates a horizontal dividing line.

```html
<hr>
```

It is an empty element.

---

## 18. What is Lorem Ipsum?

### Answer

Lorem Ipsum is placeholder text used while building a layout when the real content is not ready.

In VS Code, typing:

```text
lorem
```

and pressing **Tab** generates placeholder text.

---

## 19. What does `<b>` do?

### Answer

It displays text in bold.

```html
<b>Important</b>
```

---

## 20. What does `<i>` do?

### Answer

It displays text in italic.

```html
<i>Emphasized</i>
```

---

## 21. What does `<u>` do?

### Answer

It underlines text.

```html
<u>Underlined</u>
```

---

## 22. What does `<mark>` do?

### Answer

It highlights text.

```html
<mark>Important</mark>
```

---

## 23. What does `<del>` do?

### Answer

It displays text with a strikethrough.

```html
<del>$100</del>
```

---

## 24. What are `<sup>` and `<sub>`?

### Answer

`<sup>` creates superscript text.

```html
x<sup>2</sup>
```

`<sub>` creates subscript text.

```html
H<sub>2</sub>O
```

---

## 25. What is the `<font>` tag?

### Answer

The old `<font>` tag was used to change text color, size, and face.

Example:

```html
<font color="red" size="4">
  Red text
</font>
```

The supplied notes identify it as old-style and recommend using CSS instead in modern HTML.

---

# Links and Images

## 26. What is the `<a>` tag?

### Answer

`<a>` creates a hyperlink.

```html
<a href="https://github.com">
  GitHub
</a>
```

---

## 27. What is `href`?

### Answer

`href` specifies the destination of an `<a>` link.

```html
<a href="https://www.google.com">
  Google
</a>
```

---

## 28. What is `target`?

### Answer

`target` specifies where the linked document opens.

Common values:

- `_self` → same tab
- `_blank` → new tab

Example:

```html
<a
  href="https://github.com"
  target="_blank"
>
  GitHub
</a>
```

---

## 29. How can you make an image clickable?

### Answer

Put the `<img>` element inside an `<a>` element.

```html
<a href="https://github.com">
  <img
    src="photo.jpg"
    alt="profile photo"
  >
</a>
```

---

## 30. What is the `<img>` tag?

### Answer

`<img>` embeds an image in a webpage.

```html
<img
  src="profile.jpg"
  alt="profile photo"
>
```

It is an empty element.

---

## 31. What is the `src` attribute?

### Answer

`src` specifies the path/source of a resource such as an image.

```html
<img src="photo.jpg">
```

---

## 32. What is the `alt` attribute?

### Answer

`alt` provides alternative text for an image.

It is useful when the image cannot be displayed and helps screen readers describe the image. The supplied revision material also notes its usefulness for search engines.

Example:

```html
<img
  src="car.jpg"
  alt="red sports car"
>
```

---

# Layout and Semantic HTML

## 33. What is `<div>`?

### Answer

`<div>` defines a division or section and is commonly used as a block-level container for grouping elements.

---

## 34. What is `<span>`?

### Answer

`<span>` is an inline container used to style or target a small part of text.

---

## 35. What is the difference between `<div>` and `<span>`?

### Answer

| `<div>` | `<span>` |
|---|---|
| Block-level container | Inline container |
| Used for sections/groups | Used for small inline content |
| Starts a new line in normal flow | Stays within the line |

Easy memory:

```text
div   → box
span  → highlighter
```

---

## 36. What is semantic HTML?

### Answer

Semantic HTML uses meaningful tags that clearly describe their purpose to the browser and developer.

Examples:

```html
<header>
<main>
<nav>
<section>
<footer>
```

---

## 37. What is `<header>`?

### Answer

It represents a container for introductory content.

---

## 38. What is `<main>`?

### Answer

It specifies the main content of the document.

---

## 39. What is `<footer>`?

### Answer

It defines a footer for a document or section.

---

## 40. What is `<nav>`?

### Answer

It defines navigation links.

---

## 41. What is `<section>`?

### Answer

It defines a section in a document.

---

# Media

## 42. What is `<video>`?

### Answer

`<video>` is used to show a video on a webpage.

Example:

```html
<video
  src="movie.mp4"
  controls
>
</video>
```

Common attributes:

- `controls`
- `muted`
- `autoplay`
- `loop`

---

## 43. What is `<audio>`?

### Answer

`<audio>` is used to play an audio file.

```html
<audio
  src="song.mp3"
  controls
>
</audio>
```

---

## 44. What is `<iframe>`?

### Answer

`<iframe>` embeds another webpage or external content inside the current page.

Examples include YouTube and Google Maps.

---

## 45. What does `controls` do in video/audio?

### Answer

It displays playback controls such as play/pause and volume controls.

---

## 46. What does `autoplay` do?

### Answer

It tells the browser to start media playback automatically.

---

## 47. What does `muted` do?

### Answer

It starts the media without sound.

---

## 48. What does `loop` do?

### Answer

It makes the media repeat when it finishes.

---

# Lists and Tables

## 49. What are the three main types of HTML lists?

### Answer

1. Ordered list — `<ol>`
2. Unordered list — `<ul>`
3. Description list — `<dl>`

---

## 50. What is an unordered list?

### Answer

`<ul>` creates a list with bullets.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```

---

## 51. What is an ordered list?

### Answer

`<ol>` creates an ordered list.

```html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

---

## 52. What is a description list?

### Answer

A description list represents terms and their descriptions.

```html
<dl>
  <dt>HTML</dt>
  <dd>Structure of the web</dd>
</dl>
```

- `<dl>` → list
- `<dt>` → term
- `<dd>` → description

---

## 53. What is `<li>`?

### Answer

`<li>` defines a list item inside `<ul>` or `<ol>`.

---

## 54. What is `<table>`?

### Answer

`<table>` creates an HTML table containing rows and columns.

---

## 55. What are `<tr>`, `<th>`, and `<td>`?

### Answer

- `<tr>` → table row
- `<th>` → table header cell
- `<td>` → table data cell

---

## 56. What are `<thead>`, `<tbody>`, and `<tfoot>`?

### Answer

- `<thead>` → table header section
- `<tbody>` → main table content
- `<tfoot>` → table footer section

---

## 57. What is `colspan`?

### Answer

`colspan` merges table columns horizontally.

```html
<td colspan="2">
  Full Name
</td>
```

---

## 58. What is `rowspan`?

### Answer

`rowspan` merges table rows vertically.

```html
<td rowspan="2">
  Ahmed
</td>
```

---

# Forms

## 59. What is an HTML form?

### Answer

`<form>` creates a form used to collect user input.

It can contain elements such as:

```text
input
label
select
textarea
datalist
button
```

---

## 60. What is `<input>`?

### Answer

`<input>` is one of the most commonly used form elements and is used to receive input from the user.

---

## 61. What are common input types?

### Answer

The supplied session material includes:

```text
text
password
submit
reset
color
email
file
number
range
search
tel
date
time
week
radio
checkbox
```

---

## 62. What is a radio button?

### Answer

A radio button allows the user to select **only one** choice from a group.

```html
<input
  type="radio"
  name="gender"
  value="male"
>
Male
```

---

## 63. What is a checkbox?

### Answer

A checkbox allows the user to select **zero or more** options.

```html
<input
  type="checkbox"
  name="hobby"
  value="coding"
>
Coding
```

---

## 64. How do you group radio buttons?

### Answer

Give related radio buttons the same `name` and different `value` values.

```html
<input
  type="radio"
  name="color"
  value="red"
>
Red

<input
  type="radio"
  name="color"
  value="blue"
>
Blue
```

The same `name` makes them one group.

---

## 65. Why should phone numbers use `type="tel"`?

### Answer

The supplied revision sheet recommends `tel` because phone numbers may contain:

- `+`
- spaces
- leading zeros

`tel` is intended for telephone input.

---

## 66. What does `placeholder` do?

### Answer

It displays a short hint inside an input field.

```html
<input
  type="text"
  placeholder="Your name"
>
```

The hint disappears when the user types.

---

## 67. What does `required` do?

### Answer

It requires the user to fill in the field before submitting the form.

```html
<input
  type="email"
  required
>
```

---

## 68. What does `readonly` do?

### Answer

It makes an input field read-only.

---

## 69. What does `disabled` do?

### Answer

It disables an input field.

---

## 70. What is `<label>`?

### Answer

`<label>` defines a label for a form element.

```html
<label for="email">
  Email:
</label>

<input
  id="email"
  type="email"
>
```

---

## 71. What is `<select>`?

### Answer

`<select>` creates a dropdown list.

---

## 72. What is `<option>`?

### Answer

`<option>` defines one selectable option inside a `<select>` element.

---

## 73. What is `<textarea>`?

### Answer

`<textarea>` creates a multiline text input.

```html
<textarea
  rows="5"
  cols="40"
>
</textarea>
```

---

## 74. What is `<datalist>`?

### Answer

`<datalist>` provides predefined options for an input.

```html
<input list="browsers">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>
```

---

## 75. What is `<button>`?

### Answer

`<button>` defines a clickable button.

```html
<button type="submit">
  Send
</button>
```

---

# Attributes

## 76. What are HTML attributes?

### Answer

Attributes provide additional information about HTML elements.

Examples:

```text
id
class
src
href
alt
style
width
target
name
value
```

---

## 77. What is `id`?

### Answer

`id` identifies an element.

The supplied revision sheet describes `id` as unique and used for a single element.

Example:

```html
<div id="main">
  Content
</div>
```

---

## 78. What is `class`?

### Answer

`class` can be used for multiple elements.

```html
<div class="card">One</div>
<div class="card">Two</div>
```

---

## 79. What is the difference between `id` and `class`?

### Answer

```text
id    → unique / single element
class → reusable / multiple elements
```

---

## 80. What is the `style` attribute?

### Answer

It applies inline CSS directly to an element.

```html
<p
  style="color: blue; font-size: 20px;"
>
  Styled text
</p>
```

---

## 81. What is the `width` attribute?

### Answer

It sets the display width of supported elements such as images, tables, or videos.

```html
<img
  src="photo.jpg"
  width="400"
>
```

---

## 82. Can you repeat the same attribute in one HTML tag?

### Answer

No. The supplied revision material specifically warns against repeating the same attribute.

Wrong:

```html
<img
  src="cat.jpg"
  src="dog.jpg"
  alt="animal"
>
```

The supplied material states that the browser uses the first `src` and ignores the repeated one.

---

## 83. What is the `action` attribute?

### Answer

`action` defines the action/destination used when the form is submitted.

```html
<form action="/submit">
```

---

## 84. What is the `method` attribute?

### Answer

`method` specifies the HTTP method used when submitting form data.

The supplied session material lists:

```text
GET
POST
```

Example:

```html
<form
  action="/submit"
  method="POST"
>
```

---

# Rapid Revision Q&A

## 85. HTML stands for what?

### Answer

**HyperText Markup Language.**

---

## 86. Which tag is the root of an HTML document?

### Answer

`<html>`.

---

## 87. Which section contains metadata?

### Answer

`<head>`.

---

## 88. Which section contains visible content?

### Answer

`<body>`.

---

## 89. Which tag creates a paragraph?

### Answer

`<p>`.

---

## 90. Which tag creates a hyperlink?

### Answer

`<a>`.

---

## 91. Which attribute gives an `<a>` its destination?

### Answer

`href`.

---

## 92. Which tag embeds an image?

### Answer

`<img>`.

---

## 93. Which attribute gives alternative image text?

### Answer

`alt`.

---

## 94. Which tag creates a line break?

### Answer

`<br>`.

---

## 95. Which tag creates a horizontal line?

### Answer

`<hr>`.

---

## 96. Which tag creates a block container?

### Answer

`<div>`.

---

## 97. Which tag creates an inline container?

### Answer

`<span>`.

---

## 98. Name five semantic HTML elements.

### Answer

```html
<header>
<nav>
<main>
<section>
<footer>
```

---

## 99. Which tag creates an unordered list?

### Answer

`<ul>`.

---

## 100. Which tag creates an ordered list?

### Answer

`<ol>`.

---

## 101. Which tags are used for a description list?

### Answer

```html
<dl>
<dt>
<dd>
```

---

## 102. Which tag creates a table?

### Answer

`<table>`.

---

## 103. Which tag creates a table row?

### Answer

`<tr>`.

---

## 104. Which tag creates a table header cell?

### Answer

`<th>`.

---

## 105. Which tag creates a table data cell?

### Answer

`<td>`.

---

## 106. What merges table columns?

### Answer

`colspan`.

---

## 107. What merges table rows?

### Answer

`rowspan`.

---

## 108. Which tag creates a form?

### Answer

`<form>`.

---

## 109. Which tag receives user input?

### Answer

`<input>`.

---

## 110. Which input type is used for email?

### Answer

```html
<input type="email">
```

---

## 111. Which input type is used for phone numbers?

### Answer

```html
<input type="tel">
```

---

## 112. Which input type allows one choice from a group?

### Answer

`radio`.

---

## 113. Which input type allows multiple selections?

### Answer

`checkbox`.

---

## 114. What attribute groups radio buttons?

### Answer

`name`.

---

## 115. What attribute shows a hint inside an input?

### Answer

`placeholder`.

---

## 116. What attribute makes a field required?

### Answer

`required`.

---

## 117. What attribute makes an input read-only?

### Answer

`readonly`.

---

## 118. What attribute disables an input?

### Answer

`disabled`.

---

## 119. Which tag creates a dropdown?

### Answer

`<select>`.

---

## 120. Which tag defines a dropdown option?

### Answer

`<option>`.

---

## 121. Which tag creates multiline input?

### Answer

`<textarea>`.

---

## 122. Which tag provides predefined input options?

### Answer

`<datalist>`.

---

## 123. Which tag creates a clickable button?

### Answer

`<button>`.

---

## 124. What does `action` do in a form?

### Answer

It defines the action/destination used when the form is submitted.

---

## 125. What does `method` do in a form?

### Answer

It specifies the HTTP method used to submit the form, such as `GET` or `POST`.

---

# 🎯 Last-Minute Interview Cheat Sheet

```text
HTML
→ structure of the webpage

<!DOCTYPE html>
→ HTML5 document

<html>
→ root

<head>
→ metadata

<body>
→ visible content

<h1> ... <h6>
→ headings

<p>
→ paragraph

<a>
→ link

href
→ link destination

target="_blank"
→ new tab

<img>
→ image

src
→ source/path

alt
→ alternative image text

<div>
→ block container

<span>
→ inline container

<header>
<main>
<nav>
<section>
<footer>
→ semantic structure

<video>
<audio>
<iframe>
→ media/external content

<ul>
→ unordered list

<ol>
→ ordered list

<dl>
→ description list

<table>
<tr>
<th>
<td>
→ tables

colspan
→ merge columns

rowspan
→ merge rows

<form>
→ user input form

<input>
→ input field

radio
→ one choice

checkbox
→ zero or more choices

name
→ groups radio buttons

placeholder
→ input hint

required
→ required field

readonly
→ read-only

disabled
→ disabled

<select>
→ dropdown

<option>
→ dropdown option

<textarea>
→ multiline input

<datalist>
→ predefined input options

<button>
→ clickable button

action
→ form submission destination

method
→ GET / POST

id
→ unique identifier

class
→ reusable group
```

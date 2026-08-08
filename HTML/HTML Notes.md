# HTML — Complete Study Notes

> **Goal:** Learn HTML, understand what each tag/attribute does, and have a clean reference to return to while studying or preparing for interviews.

---

## 📌 Table of Contents

- [1. What is HTML?](#1-what-is-html)
- [2. Tags and Elements](#2-tags-and-elements)
- [3. Basic HTML Structure](#3-basic-html-structure)
- [4. Head Tag](#4-head-tag)
- [5. Text and Content](#5-text-and-content)
- [6. Links](#6-links)
- [7. Images](#7-images)
- [8. Comments](#8-comments)
- [9. Layout and Containers](#9-layout-and-containers)
- [10. Semantic HTML](#10-semantic-html)
- [11. Media](#11-media)
- [12. Lists](#12-lists)
- [13. Tables](#13-tables)
- [14. Forms](#14-forms)
- [15. Input Types](#15-input-types)
- [16. Form/Input Attributes](#16-forminput-attributes)
- [17. Radio and Checkbox Grouping](#17-radio-and-checkbox-grouping)
- [18. Common Attributes](#18-common-attributes)
- [19. Complete Example](#19-complete-example)
- [20. Quick Revision](#20-quick-revision)

---

# 1. What is HTML?

**HTML = HyperText Markup Language.**

HTML is the standard markup language used to create web pages.

It describes the **structure** of a web page and consists of a series of elements.

### Why learn HTML?

From the supplied session material:

- Understand how the frontend works.
- Build and test APIs easily.
- Debug issues between frontend and backend.

---

# 2. Tags and Elements

## What is an HTML Tag?

A tag is the markup used to tell the browser what an element is.

Most tags come in pairs:

```html
<p>This is a paragraph.</p>
```

Here:

- `<p>` = opening tag
- `</p>` = closing tag
- `This is a paragraph.` = content

## What is an HTML Element?

An element can contain:

```text
Start tag + Content + End tag
```

Example:

```html
<p>Hello</p>
```

Some elements have no content and therefore have no closing tag.

Examples:

```html
<br>
<hr>
<img>
<input>
```

These are commonly called **empty elements**.

## Nested Elements

A nested element is an element placed inside another element.

```html
<a href="https://github.com">
  <img src="photo.jpg" alt="profile photo">
</a>
```

Here:

- `<a>` is the parent.
- `<img>` is the child.
- `<img>` is nested inside `<a>`.

---

## ⚠️ Do Not Duplicate an Attribute

Do not repeat the same attribute inside one tag.

```html
<!-- Wrong -->
<img src="cat.jpg" src="dog.jpg" alt="animal">
```

The supplied revision material states that the browser uses the first `src` and ignores the repeated one.

---

# 3. Basic HTML Structure

Every HTML page follows this basic structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>

  <body>
    <!-- Visible content -->
  </body>
</html>
```

| Part | Purpose |
|---|---|
| `<!DOCTYPE html>` | Declares an HTML5 document |
| `<html>` | Root element |
| `<head>` | Metadata |
| `<body>` | Visible page content |

### Important

`<body>` contains visible content such as:

- Headings
- Paragraphs
- Images
- Hyperlinks
- Tables
- Lists

---

# 4. Head Tag

The `<head>` element is a container for metadata.

It can contain:

- `<title>`
- `<meta>`
- Other information used by the browser/document

## `<title>`

Defines the title of the document.

```html
<title>My Website</title>
```

## `<meta>`

The supplied material lists these uses:

- Character set
- Page description
- Keywords
- Author
- Viewport settings

Example:

```html
<meta charset="UTF-8">

<meta
  name="description"
  content="HTML study notes"
>

<meta
  name="keywords"
  content="HTML, Web Development"
>

<meta
  name="author"
  content="Student"
>

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>
```

---

# 5. Text and Content

## Headings — `<h1>` to `<h6>`

Headings are titles/subtitles displayed on a webpage.

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Sub-section</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

`<h1>` is the highest level and `<h6>` is the lowest level.

### SEO Note

The supplied revision sheet recommends using one `<h1>` as the main topic of the page.

---

## Paragraph — `<p>`

Used to define a paragraph.

```html
<p>This is a paragraph.</p>
```

A paragraph starts on a new line and is usually a block of text.

The browser automatically removes extra spaces and lines when the page is displayed.

---

## Lorem Ipsum

Lorem Ipsum is placeholder text used while building a layout when the real content is not ready.

In VS Code:

```text
lorem
```

then press **Tab**.

You can also request a number of words:

```text
lorem10
lorem50
lorem100
```

---

## Line Break — `<br>`

Creates a new line.

```html
<p>
  Line one<br>
  Line two
</p>
```

`<br>` is an empty element.

---

## Horizontal Rule — `<hr>`

Creates a horizontal dividing line.

```html
<hr>
```

`<hr>` is an empty element.

---

## Text Formatting

| Tag | Purpose | Example |
|---|---|---|
| `<b>` | Bold | `<b>Important</b>` |
| `<i>` | Italic | `<i>Emphasized</i>` |
| `<u>` | Underline | `<u>Underlined</u>` |
| `<mark>` | Highlight | `<mark>Important</mark>` |
| `<del>` | Strikethrough | `<del>$100</del>` |
| `<sup>` | Superscript | `x<sup>2</sup>` |
| `<sub>` | Subscript | `H<sub>2</sub>O` |

Examples:

```html
<p>Water = H<sub>2</sub>O</p>

<p>Area = r<sup>2</sup></p>

<p>
  Old price:
  <del>$100</del>
  New price:
  <mark>$70</mark>
</p>
```

---

## `<font>` Tag

The old `<font>` tag was used to change text color, size, and face:

```html
<font color="red" size="4">
  This text is red
</font>
```

The supplied material notes that `<font>` is old-style and should be avoided in modern HTML in favor of CSS.

---

# 6. Links

## Anchor — `<a>`

Creates a hyperlink.

```html
<a href="https://www.google.com">
  Visit Google
</a>
```

### `href`

Specifies the destination.

```html
<a href="https://github.com">
  GitHub
</a>
```

### `target`

Specifies where the linked document opens.

| Value | Behavior |
|---|---|
| `_self` | Same tab; default |
| `_blank` | New tab |

```html
<a
  href="https://github.com"
  target="_blank"
>
  Open GitHub
</a>
```

---

## Clickable Image

Put `<img>` inside `<a>`:

```html
<a
  href="https://github.com/Eyadeltaher/Cybersecurity-notes"
  target="_blank"
>
  <img
    src="/images/my-image.png"
    alt="cybersecurity notes"
    width="200"
  >
</a>
```

The `<a>` is the parent and `<img>` is the child.

---

# 7. Images

## `<img>`

Embeds an image.

```html
<img
  src="profile.jpg"
  alt="profile photo"
  width="300"
>
```

### Important Attributes

| Attribute | Purpose |
|---|---|
| `src` | Image path |
| `alt` | Alternative text |
| `width` | Display width |

### Why is `alt` important?

The supplied revision sheet gives two main reasons:

1. Helps search engines understand the image.
2. Helps screen readers describe the image.

Good:

```html
alt="red sports car"
```

Not useful:

```html
alt="image1"
```

---

# 8. Comments

HTML comments:

```html
<!-- This is a comment -->
```

Example:

```html
<!-- Navigation section -->
<nav>
  <a href="#">Home</a>
</nav>

<!-- TODO: add dropdown menu here -->
```

Comments are not displayed as normal page content.

---

# 9. Layout and Containers

## `<div>`

Defines a division or section.

It is commonly used as a block-level container for grouping elements.

```html
<div style="background-color: lightblue;">
  <h2>Section Title</h2>
  <p>Content goes here.</p>
</div>
```

## `<span>`

An inline container.

Useful for styling or targeting a small part of text.

```html
<p>
  My favorite color is
  <span style="color: red;">red</span>.
</p>
```

### Easy way to remember

```text
<div>  → block / box
<span> → inline / small part
```

---

# 10. Semantic HTML

Semantic elements clearly describe their meaning to the browser and developer.

Examples:

```html
<header>
<main>
<footer>
<nav>
<section>
```

## `<header>`

Container for introductory content.

## `<main>`

Contains the main content of the document.

## `<footer>`

Defines a footer for a document or section.

## `<nav>`

Defines navigation links.

## `<section>`

Defines a section in a document.

---

# 11. Media

## Image

```html
<img src="photo.jpg" alt="sample photo">
```

## Video — `<video>`

Used to show a video.

```html
<video
  src="movie.mp4"
  width="600"
  controls
  muted
  autoplay
  loop
>
  Your browser does not support video.
</video>
```

### Video attributes

| Attribute | Purpose |
|---|---|
| `controls` | Shows playback controls |
| `muted` | Starts without sound |
| `autoplay` | Plays automatically |
| `loop` | Repeats |

The supplied notes mention that browsers often block autoplay with sound, so `muted + autoplay` is commonly used.

---

## Audio — `<audio>`

Used to play audio.

```html
<audio
  src="song.mp3"
  controls
  autoplay
  loop
  muted
></audio>
```

---

## Iframe — `<iframe>`

Embeds another webpage or external content.

Examples include YouTube and Google Maps.

```html
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  width="560"
  height="315"
>
</iframe>
```

### Easy way to remember

> An iframe is like a window inside your webpage that displays external content.

---

# 12. Lists

HTML has three main list types:

1. Ordered list
2. Unordered list
3. Description list

---

## Ordered List — `<ol>`

Shows items in an order.

```html
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>
```

### `type` and `start`

```html
<ol type="A" start="3">
  <li>Step C</li>
  <li>Step D</li>
</ol>
```

`type` examples:

- `1` → numbers
- `A` → uppercase
- `a` → lowercase
- `I` → Roman numerals

`start` controls the starting value.

---

## Unordered List — `<ul>`

Shows bullet points.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### Bullet types

| Type | Style |
|---|---|
| `disc` | ● |
| `circle` | ○ |
| `square` | ■ |

---

## Description List — `<dl>`

Used for terms and their descriptions.

```html
<dl>
  <dt>HTML</dt>
  <dd>The structure language of the web</dd>

  <dt>CSS</dt>
  <dd>The styling language for web pages</dd>
</dl>
```

| Tag | Meaning |
|---|---|
| `<dl>` | Description list |
| `<dt>` | Term |
| `<dd>` | Description |

---

# 13. Tables

A table contains cells arranged in rows and columns.

```html
<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Ahmed</td>
      <td>25</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">End of Table</td>
    </tr>
  </tfoot>
</table>
```

## Table Tags

| Tag | Purpose |
|---|---|
| `<table>` | Table wrapper |
| `<thead>` | Header section |
| `<tbody>` | Main content |
| `<tfoot>` | Footer section |
| `<tr>` | Table row |
| `<th>` | Header cell |
| `<td>` | Data cell |

## Important Attributes

### `border`

```html
<table border="1">
```

Adds a border.

### `colspan`

Merges columns horizontally.

```html
<td colspan="2">Full Name</td>
```

### `rowspan`

Merges rows vertically.

```html
<td rowspan="2">Ahmed</td>
```

### Memory Trick

```text
colspan → columns → horizontal
rowspan → rows    → vertical
```

---

# 14. Forms

A form collects user input.

```html
<form
  action="/submit"
  method="POST"
>
  <!-- inputs -->
  <button type="submit">Send</button>
</form>
```

A form can contain:

- `<input>`
- `<label>`
- `<select>`
- `<textarea>`
- `<datalist>`
- `<button>`

---

# 15. Input Types

## Text

```html
<input
  type="text"
  placeholder="Enter your name"
  required
>
```

Single-line text.

## Password

```html
<input type="password">
```

Password field.

## Email

```html
<input
  type="email"
  placeholder="example@mail.com"
>
```

Email input.

## File

```html
<input type="file">
```

File selection/upload input.

## Number

```html
<input
  type="number"
  min="1"
  max="100"
>
```

Numeric input.

## Range

```html
<input type="range">
```

Used when the exact numeric value is not important.

## Search

```html
<input type="search">
```

Search field.

## Telephone

```html
<input
  type="tel"
  placeholder="+20 100 000 0000"
>
```

Telephone number.

### Why `tel` instead of `number`?

The supplied revision sheet recommends `tel` for phone numbers because phone numbers can contain:

- `+`
- spaces
- leading zeros

Phone numbers should be treated as contact information rather than mathematical numbers.

## Date

```html
<input type="date">
```

## Time

```html
<input type="time">
```

## Week

```html
<input type="week">
```

## Color

```html
<input type="color">
```

## Radio

Allows one selection from a group.

```html
<input
  type="radio"
  name="gender"
  value="male"
>
Male

<input
  type="radio"
  name="gender"
  value="female"
>
Female
```

## Checkbox

Allows zero or more selections.

```html
<input
  type="checkbox"
  name="hobby"
  value="reading"
>
Reading

<input
  type="checkbox"
  name="hobby"
  value="coding"
>
Coding
```

## Submit

```html
<input type="submit" value="Send Form">
```

Submits form data.

## Reset

```html
<input type="reset">
```

Resets form values to their defaults.

---

# 16. Form/Input Attributes

## `placeholder`

Shows a short hint inside the field.

```html
<input
  type="text"
  placeholder="Your full name"
>
```

The hint disappears when the user types.

## `required`

Makes the field required.

```html
<input
  type="email"
  required
>
```

The form cannot be submitted while the required field is empty.

## `readonly`

Makes the input read-only.

```html
<input
  type="text"
  value="Read only"
  readonly
>
```

## `disabled`

Disables the input.

```html
<input
  type="text"
  value="Disabled"
  disabled
>
```

---

# 17. Radio and Checkbox Grouping

## Radio Buttons

The important rule:

> Radio buttons that belong to the same group should have the same `name` and different `value` values.

Correct:

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

<input
  type="radio"
  name="color"
  value="green"
>
Green
```

Because they have the same `name`, selecting one deselects the others.

### Wrong

```html
<input
  type="radio"
  name="color1"
  value="red"
>
Red

<input
  type="radio"
  name="color2"
  value="blue"
>
Blue
```

Different names make them independent.

## Checkbox

Checkboxes can have the same `name` when they represent related options.

```html
<input
  type="checkbox"
  name="hobby"
  value="reading"
>
Reading

<input
  type="checkbox"
  name="hobby"
  value="coding"
>
Coding
```

---

# 18. Common Attributes

| Attribute | Purpose |
|---|---|
| `src` | Resource/image path |
| `alt` | Alternative image text |
| `href` | Link destination |
| `target` | Link opening location |
| `width` | Display width |
| `style` | Inline CSS |
| `id` | Identifier |
| `class` | Reusable class |
| `name` | Field name / radio grouping |
| `value` | Input value |
| `type` | Input/list type |
| `placeholder` | Input hint |
| `required` | Required field |
| `readonly` | Read-only field |
| `disabled` | Disabled field |
| `action` | Form submission destination |
| `method` | Form submission method |
| `min` | Minimum numeric value |
| `max` | Maximum numeric value |
| `rows` | Textarea rows |
| `cols` | Textarea width |
| `start` | Ordered-list starting value |
| `colspan` | Merge table columns |
| `rowspan` | Merge table rows |
| `controls` | Media controls |
| `muted` | No sound |
| `autoplay` | Automatic playback |
| `loop` | Repeat playback |

---

# 19. Other Form Elements

## `<label>`

Defines a label for a form element.

```html
<label for="email">
  Email:
</label>

<input
  type="email"
  id="email"
>
```

## `<select>`

Creates a dropdown list.

```html
<select name="country">
  <option value="egypt">Egypt</option>
  <option value="usa">USA</option>
</select>
```

## `<option>`

Defines one selectable option inside `<select>`.

## `<textarea>`

Creates a multiline input.

```html
<textarea
  rows="5"
  cols="40"
  placeholder="Write your message..."
></textarea>
```

## `<datalist>`

Provides predefined options for an input.

```html
<input list="browsers">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
</datalist>
```

## `<button>`

Creates a clickable button.

```html
<button type="submit">
  Send
</button>
```

---

# 20. Form Attributes

## `action`

Defines where/what the form submission should be sent to.

```html
<form action="/submit">
```

## `method`

Specifies the HTTP method used when submitting form data.

The supplied session material lists:

- `GET`
- `POST`

Example:

```html
<form
  action="/submit"
  method="POST"
>
```

---

# 21. `id` vs `class`

## `id`

An `id` is intended to uniquely identify an element.

```html
<div id="main-section">
  Main content
</div>
```

## `class`

A class can be used by multiple elements.

```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
```

### Easy rule

```text
id    → unique identifier
class → reusable group
```

---

# 22. Complete Example

```html
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta
    name="description"
    content="HTML study page"
  >

  <meta
    name="keywords"
    content="HTML, Web Development"
  >

  <meta
    name="author"
    content="Student"
  >

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>HTML Study Page</title>

</head>

<body>

  <header>

    <h1>HTML Study Page</h1>

    <nav>
      <a href="#content">Content</a>
      <a href="#media">Media</a>
      <a href="#form">Form</a>
    </nav>

  </header>

  <main>

    <section id="content">

      <h2>Text</h2>

      <p>
        This is a paragraph.
      </p>

      <p>
        <b>Bold</b>
        <i>Italic</i>
        <u>Underline</u>
        <mark>Highlight</mark>
      </p>

      <p>
        H<sub>2</sub>O
        and
        x<sup>2</sup>
      </p>

      <hr>

      <h2>Links</h2>

      <a
        href="https://github.com"
        target="_blank"
      >
        Open GitHub
      </a>

      <br><br>

      <a
        href="https://github.com"
        target="_blank"
      >
        <img
          src="photo.jpg"
          alt="profile photo"
          width="200"
        >
      </a>

    </section>

    <section id="media">

      <h2>Media</h2>

      <img
        src="photo.jpg"
        alt="sample photo"
        width="300"
      >

      <br>

      <video
        src="movie.mp4"
        width="600"
        controls
        muted
        autoplay
        loop
      >
        Your browser does not support video.
      </video>

      <audio
        src="song.mp3"
        controls
      ></audio>

    </section>

    <section>

      <h2>Lists</h2>

      <h3>Ordered</h3>

      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ol>

      <h3>Unordered</h3>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <h3>Description</h3>

      <dl>
        <dt>HTML</dt>
        <dd>Structure of the web page</dd>

        <dt>CSS</dt>
        <dd>Styling of the web page</dd>
      </dl>

    </section>

    <section>

      <h2>Table</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ahmed</td>
            <td>25</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colspan="2">
              End of Table
            </td>
          </tr>
        </tfoot>

      </table>

    </section>

    <section id="form">

      <h2>Form</h2>

      <form
        action="/submit"
        method="POST"
      >

        <label for="name">
          Name:
        </label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          required
        >

        <br><br>

        <label for="email">
          Email:
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          required
        >

        <br><br>

        <label for="phone">
          Phone:
        </label>

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+20 100 000 0000"
        >

        <br><br>

        <label for="password">
          Password:
        </label>

        <input
          type="password"
          id="password"
          name="password"
        >

        <p>Gender:</p>

        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
        >

        <label for="male">
          Male
        </label>

        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
        >

        <label for="female">
          Female
        </label>

        <p>Hobbies:</p>

        <input
          type="checkbox"
          id="reading"
          name="hobby"
          value="reading"
        >

        <label for="reading">
          Reading
        </label>

        <input
          type="checkbox"
          id="coding"
          name="hobby"
          value="coding"
        >

        <label for="coding">
          Coding
        </label>

        <br><br>

        <label for="country">
          Country:
        </label>

        <select
          id="country"
          name="country"
        >
          <option value="egypt">
            Egypt
          </option>

          <option value="usa">
            USA
          </option>
        </select>

        <br><br>

        <label for="message">
          Message:
        </label>

        <textarea
          id="message"
          name="message"
          rows="5"
          cols="40"
          placeholder="Write your message..."
        ></textarea>

        <br><br>

        <button type="submit">
          Send
        </button>

        <input
          type="reset"
          value="Reset"
        >

      </form>

    </section>

  </main>

  <footer>
    <p>HTML Study Notes</p>
  </footer>

</body>

</html>
```

---

# 23. Quick Revision

## Structure

```text
<!DOCTYPE html>
<html>
<head>
<body>
```

## Text

```text
<h1> → <h6>
<p>
<br>
<hr>
<b>
<i>
<u>
<mark>
<del>
<sup>
<sub>
```

## Links & Images

```text
<a>
<img>
```

Main attributes:

```text
href
target
src
alt
width
```

## Layout

```text
<div>
<span>
```

## Semantic

```text
<header>
<main>
<nav>
<section>
<footer>
```

## Media

```text
<img>
<video>
<audio>
<iframe>
```

## Lists

```text
<ul>
<ol>
<dl>
<dt>
<dd>
<li>
```

## Tables

```text
<table>
<thead>
<tbody>
<tfoot>
<tr>
<th>
<td>
```

Important:

```text
colspan → horizontal
rowspan → vertical
```

## Forms

```text
<form>
<input>
<label>
<select>
<option>
<textarea>
<datalist>
<button>
```

Common inputs:

```text
text
password
email
file
number
range
search
tel
date
time
week
color
radio
checkbox
submit
reset
```

Important attributes:

```text
placeholder
required
readonly
disabled
name
value
type
action
method
```

---

## 🧠 Final Memory Map

```text
HTML
│
├── Structure
│   ├── DOCTYPE
│   ├── html
│   ├── head
│   └── body
│
├── Text
│   ├── h1-h6
│   ├── p
│   ├── br
│   ├── hr
│   └── formatting
│
├── Links & Images
│   ├── a
│   └── img
│
├── Layout
│   ├── div
│   └── span
│
├── Semantic
│   ├── header
│   ├── nav
│   ├── main
│   ├── section
│   └── footer
│
├── Media
│   ├── video
│   ├── audio
│   └── iframe
│
├── Lists
│   ├── ul
│   ├── ol
│   └── dl
│
├── Tables
│   ├── table
│   ├── tr
│   ├── th
│   └── td
│
└── Forms
    ├── input
    ├── label
    ├── select
    ├── textarea
    ├── datalist
    └── button
```

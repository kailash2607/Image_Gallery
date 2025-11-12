# Ex.08 Design of Interactive Image Gallery
### Date : 12 - 11 - 2025
## AIM
  To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS

### Step 1:

Clone the github repository and create Django admin interface

### Step 2:

Change settings.py file to allow request from all hosts.

### Step 3:

Use CSS for positioning and styling.

### Step 4:

Write JavaScript program for implementing interactivit

### Step 5:

Validate the HTML and CSS code

### Step 6:

Publish the website in the given URL.

## PROGRAM
### Gallery.html

```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Image Gallery</title>
  <link rel="stylesheet" href="{% static 'gallery/style.css' %}">
</head>
<body>
  <h1 class="title">Interactive Image Gallery</h1>
  <div class="gallery">
    <img src="{% static 'gallery/images/img1.jpg' %}" alt="Image 1" onclick="openModal(this)">
    <img src="{% static 'gallery/images/img2.jpg' %}" alt="Image 2" onclick="openModal(this)">
    <img src="{% static 'gallery/images/img3.jpg' %}" alt="Image 3" onclick="openModal(this)">
    <img src="{% static 'gallery/images/img4.jpg' %}" alt="Image 4" onclick="openModal(this)">
    <img src="{% static 'gallery/images/img5.jpg' %}" alt="Image 5" onclick="openModal(this)">
  </div>

  <div id="modal" class="modal" onclick="closeModal()">
    <span class="close">&times;</span>
    <img class="modal-content" id="modalImage">
    <div id="caption"></div>
  </div>

  <script src="{% static 'gallery/script.js' %}"></script>
</body>
</html>

```
## OUTPUT
<img width="1912" height="980" alt="Screenshot 2025-11-12 111344" src="https://github.com/user-attachments/assets/f0e38256-93c6-46c0-9a75-856f7257ae81" />
<img width="1919" height="973" alt="Screenshot 2025-11-12 111355" src="https://github.com/user-attachments/assets/ebce00ec-200e-4044-bb23-b5497adbb7ce" />


## RESULT
  The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.

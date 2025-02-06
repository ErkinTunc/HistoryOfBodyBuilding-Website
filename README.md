# HistoryOfBodyBuilding-Website
A website about history of bodybuilding

## Overview
This project is a web application built with HTML, CSS, JavaScript, and Python. It includes various features such as user registration, login, and chat functionality.

---

## Directory Structure
    Web/
    ├── httpd.py
    ├── data/
    │   ├── chat.dat
    │   └── user.dat
    ├── templates/
    │   └── register.xhtml
    ├── www/
    │   ├── chatbox.html
    │   ├── competitions1.html
    │   ├── competitions2.html
    │   ├── competitions3.html
    │   ├── index.html
    │   ├── login.html
    │   ├── register.html
    │   ├── structure1.html
    │   ├── structure2.html
    │   ├── structure3.html
    │   ├── structure4.html
    │   ├── structure5.html
    │   ├── htbin/
    │   │   ├── chatget.py
    │   │   ├── chatsend.py
    │   │   ├── login.py
    │   │   └── register.py
    │   ├── img/
    │   │   ├── arnold.jpg
    │   │   ├── arnold_background.jpg
    │   │   └── [other images]
    │   ├── javascript/
    │   │   ├── chatbox.js
    │   │   ├── login.js
    │   │   ├── registration.js
    │   │   └── sidebar.js
    │   └── styles/
    │       ├── buttons.css
    │       ├── chatbox.css
    │       ├── default.css
    │       ├── flexbox.css
    │       ├── images.css
    │       ├── login.css
    │       ├── styles.css
    │       ├── table.css
    │       └── text.css

---

## Features
- **User Registration**: Users can register an account.
- **User Login**: Registered users can log in.
- **Chat Functionality**: Users can send and receive messages in a chatbox.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

---

## 🌐 Live Demo

You can view the live demo of the website here:  
[History-Of-Bodybuilding on Netlify](https://history-of-bodybuilding.netlify.app/) (without server-side)

---

## Installation & Usage
1. Navigate to the project folder.  
2. Start the Python HTTP server:
   ```bash
   python httpd.py
3. Note the generated four-digit port number (e.g., 8000).
4. Access the web application in your browser at
    ```bash
    http://localhost:****
- Replace **** with the port number.

---

## File Descriptions
- **httpd.py**: Main server script to run the web application.
- **data/**: Contains data files for user and chat data.
- **templates/**: Contains HTML templates.
- **www/**: Contains all web-accessible files including HTML, images, JavaScript, and CSS.
  - **htbin/**: Contains Python backend scripts for handling HTTP requests.
  - **img/**: Contains image files used in the application.
  - **javascript/**: Contains JavaScript files for client-side functionality.
  - **styles/**: Contains CSS files for styling the web pages.

---

## Acknowledgements
- Thanks to the developers of the libraries and tools used in this project.

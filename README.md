# HistoryOfBodyBuilding-Website
A website about history of bodybuilding

## Overview
This project is a web application built with HTML, CSS, JavaScript, and Python. It includes various features such as user registration, login, and chat functionality.

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


## Features
- **User Registration**: Users can register an account.
- **User Login**: Registered users can log in.
- **Chat Functionality**: Users can send and receive messages in a chatbox.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Installation
1. Clone the repository:
    ```sh
    git clone <repository_url>
    ```
2. Navigate to the project directory:
    ```sh
    cd Web
    ```
3. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```
4. Run the application:
    ```sh
    python httpd.py
    ```

## Usage
- Access the web application in your browser at `http://localhost:8000`.
- Register a new user account and log in to access chat functionality.

## File Descriptions
- **httpd.py**: Main server script to run the web application.
- **data/**: Contains data files for user and chat data.
- **templates/**: Contains HTML templates.
- **www/**: Contains all web-accessible files including HTML, images, JavaScript, and CSS.
  - **htbin/**: Contains Python backend scripts for handling HTTP requests.
  - **img/**: Contains image files used in the application.
  - **javascript/**: Contains JavaScript files for client-side functionality.
  - **styles/**: Contains CSS files for styling the web pages.

## License
-

## Acknowledgements
- Thanks to the developers of the libraries and tools used in this project.

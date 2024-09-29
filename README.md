# Superhero Name Generator

This is my first Node.js project, a simple web app that generates a random superhero name every time you refresh the webpage. It uses the **superheroes** npm package to fetch random superhero names and displays them dynamically on a webpage.

## Project Description

The **Superhero Name Generator** is a fun, lightweight web app built with Node.js and Express. Every time the user visits or refreshes the page, a random superhero name is generated and rendered using the EJS template engine. It’s a great introduction to Node.js, npm packages, and templating with EJS.

## Features

- Generates a new superhero name on every page refresh.
- Simple Express.js server setup.
- Uses the **superheroes** npm package to pull random names.
- Dynamic webpage rendering using **EJS**.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/krutarthpatel28/Superhero-name-generator.git
2. Navigate into the project directory:
   ```bash
   cd Superhero-name-generator
3. Install the dependencies:
   ```bash
   npm i
4. Run the application:
   ```bash
   node index.js
5. Open your browser and visit:
   ```browser url
   http://localhost:3000
   
## Technologies Used

- Node.js: JavaScript runtime environment.
- Express.js: Web framework for Node.js.
- EJS: Templating engine for rendering HTML with dynamic data.
- Superheroes: NPM package used to generate random superhero names.

## Project Structure
```bash
├── views
│   └── index.ejs          # EJS template for rendering the superhero name
├── index.js               # Main server file
├── package.json           # Project configuration and dependencies
├── package-lock.json      # Lock file for npm dependencies
├── .gitignore             # Git ignore file


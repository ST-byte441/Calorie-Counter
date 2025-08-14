# Solo Calorie Tracker

*A simple Calorie Counting Web-app*

A lightweight web app to help you track your daily calories, add preset foods, and set your own calorie cap.

## Screenshots/Demo
![Home screenshot](./assets/calorieMain.png)

## Features

- **Daily Calorie Cap:** Set your own daily calorie goal.
- **Add Foods:** Enter food items and their calorie counts to track your intake.
- **Presets:** Quickly add common foods from a preset list.
- **Delete Items:** Remove foods from your daily list.
- **Progress Indicator:** See your total calories and percent of your daily cap.
- **Complaint Form:** (Coming soon!) Send feedback directly from the app.
- **Inspirational Quotes:** Get a random quote on the homepage.

## Tech stack

Frontend: Vite + JavaScript, React, HTML, CSS

Server: Node.js, Express, MongoDB

## Project structure
```
Solo-Project/
├─ client/             # Frontend source (components, utilities, state)
├─ server/             # Backend API and controllers
├─ index.html          # App entry HTML (Vite)
├─ styles.css          # Global styles
├─ vite.config.js      # Vite configuration
├─ package.json        # Scripts & dependencies
└─ README.md           # Project documentation
```

## Getting started

### Prerequisites

Node.js ≥ 18

npm (or pnpm/yarn)
MongoDB running locally or accessible remotely

1) Clone and install

```sh
git clone https://github.com/yourusername/Solo-Project.git
cd Solo-Project
npm install
```

2) Configure environment

Create a `.env` file in the project root and add any required keys:

```
MONGO_URI="mongodb://localhost:27017/your-db"
```

3) Run locally

In two terminals (or use a single command if you have a concurrent script):

### Terminal A — start the server
```sh
npm run server
```

### Terminal B — start the frontend
```sh
npm run dev
```
Open the app at the printed dev URL (commonly http://localhost:5173).

## Development notes

- **MongoDB:** Make sure your database is running and accessible.
- **API:** All food and preset actions are stored in MongoDB for persistence.
- **Frontend:** Uses React hooks and context for state management.

## Stretch Features

- Monthly changes/tracking
- Dynamic Adding of Presets into db without increasing db complexity too much

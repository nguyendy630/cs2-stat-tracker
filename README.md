# CS2 Stat Tracker

CS2 Stat Tracker is a personal project designed to track and display player statistics for Counter-Strike 2 (CS2). It leverages the Steam API to fetch player data and provides a user-friendly dashboard for visualizing stats.

## Features

- **Player Stats Dashboard**: View detailed player statistics, including kills, deaths, time played, and more.
- **Weapon Stats**: Analyze weapon-specific performance with bar charts.
- **Steam API Integration**: Fetch real-time data using the Steam API.
- **Responsive Design**: Built with Bootstrap for a modern and responsive UI.
- **Local Storage**: Save user data locally for seamless navigation between pages.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Charting**: Chart.js
- **API**: Steam Web API
- **Environment Variables**: dotenv
- **HTTP Requests**: Axios

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/your-username/cs2-stat-tracker.git
   cd cs2-stat-tracker
``` 

### Install dependencies
```bash
npm install
```

### create a .env file file in root directory
```
API_KEY=your_steam_api_key
```

### Start the Server.js
npm sever.js

## Usage
1. Navigate to the homepage and enter a Steam ID to search for a player's stats.

2. View the player's stats on the dashboard, including basic weapon performance and overall gameplay metrics.

3. Explore additional pages like "About" for more information about the project.

## File Structure
```
cs2-stat-tracker/
├── JSON/                  # Sample JSON data for testing
├── pages/                 # HTML pages
├── styles/                # CSS files
├── .env                   # Environment variables
├── [app.js] # Frontend logic
├── [server.js] # Backend server
├── [package.json]        # Project metadata and dependencies
└── [README.md]             # Project documentation
```

## API Endpoints
API Endpoints
- ```/results```: Fetch player stats from the Steam API.
- ```/player```: Fetch player profile information from the Steam API.

## Libraries and API's used
Steam Web API
Chart.js
Bootstrap
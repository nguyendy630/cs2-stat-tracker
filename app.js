// Steam ID Test: 76561198274029909 (Swag Boss Jr)
const stats_API_URL = "http://localhost:8888/results?steamid="
const userData_API_URL = "http://localhost:8888/player?steamid="

// User Data
let userData = {}
let steamUserData = {}

async function userSearch() {
    // Username input
    const userNameInput = document.querySelector("#floatingInputGroup1")
    const value = Number(userNameInput.value)

    // let response = await fetch(stats_API_URL + value)
    // let response1 = await fetch(userData_API_URL + value)

    let response = await fetch("http://127.0.0.1:5500/JSON/playerStats.json") // TESTING
    let respoonse = await fetch("http://127.0.0.1:5500/JSON/steamUserData.json") // TESTING

    userData = await response.json()
    steamUserData = await response1.json()

    // Stores data into local storage
    window.localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to dashboard page
    window.location.href = "dashboard.html"
}


function displayChart(data) {
    let username = document.querySelector("#username")
    let timePlayed = document.querySelector("#time")
    let kd = document.querySelector("#ratio")

    // Local storage for fetched results
    let userData = JSON.parse(window.localStorage.getItem("userData"))

    console.log(userData)

    // Canvas
    let myChart = document.querySelectorAll(".myChart");

    if (myChart) {
        let stats = {} 

        for (let i = 0; i < userData.playerstats.stats.length; i++) {

            let stat = userData.playerstats.stats[i]

            if (stat.name.includes("total_kills")) {
                stats[stat.name] = stat.value
            }
        }

        let barChartCommonWeaponKills = new Chart(myChart, {
            type: "bar", // Bar chart type
            data: {
                labels: ["AK47", "DEAGLE", "M4A1", "M4A1-S", "AWP"],
                datasets: [{
                    label: "Weapons",
                    data: [stats.total_kills_ak47, stats.total_kills_deagle, stats.total_kills_m4a1, stats.total_kills_m4a1 ,stats.total_kills_awp] // Fixed data length
                }],
            },
            options: {}
        });


    } else {
        console.error("Failed to acquire context from the canvas element.");
    }
}
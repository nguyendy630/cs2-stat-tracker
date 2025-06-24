// Steam ID Test: 76561198274029909 (Swag Boss Jr)
const stats_API_URL = "http://localhost:8888/results?steamid=";
const userData_API_URL = "http://localhost:8888/player?steamid=";

// User Data
let userData = {};
let steamUserData = {};

async function userSearch() {
    // Username input
    const userNameInput = document.querySelector("#floatingInputGroup1");
    const value = Number(userNameInput.value);

    // let response = await fetch(stats_API_URL + value)
    // let response1 = await fetch(userData_API_URL + value)

    let response = await fetch("http://127.0.0.1:8080/JSON/playerStats.json"); // TESTING
    let steamUserResponse = await fetch(
        "http://127.0.0.1:8080/JSON/steamUserData.json",
    ); // TESTING

    userData = await response.json();
    steamUserData = await steamUserResponse.json();

    // Stores data into local storage
    window.localStorage.setItem("userData", JSON.stringify(userData));
    window.localStorage.setItem("steamUserData", JSON.stringify(steamUserData));

    if (userData && steamUserData) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Steam ID");
    }
}

function displayChart(data) {
    // user data
    let username = document.querySelector("#username");
    let timePlayed = document.querySelector("#time");
    let kd = document.querySelector("#ratio");
    let avatar = document.querySelector("#user-avatar");

    // Local storage for fetched results.
    let userData = JSON.parse(window.localStorage.getItem("userData"));
    let steamUserData = JSON.parse(
        window.localStorage.getItem("steamUserData"),
    );

    console.log(steamUserData);

    // Display kill death ratio
    let ratio = (
        userData.playerstats.stats[0].value /
        userData.playerstats.stats[1].value
    ).toFixed(2);

    kd.textContent = ratio;

    // Display Steam username
    let steamUsername = steamUserData.response.players[0].personaname;
    username.textContent = steamUsername;

    // Display Steam avatar
    let steamAvatar = steamUserData.response.players[0].avatarfull;
    avatar.setAttribute("src", steamAvatar);

    // Canvas
    let myChart = document.querySelectorAll(".myChart");

    if (myChart) {
        let stats = {};

        for (let i = 0; i < userData.playerstats.stats.length; i++) {
            let stat = userData.playerstats.stats[i];

            if (stat.name.includes("total_kills")) {
                stats[stat.name] = stat.value;
            }
        }

        let barChartCommonWeaponKills = new Chart(myChart, {
            type: "bar", // Bar chart type
            data: {
                labels: ["AK47", "DEAGLE", "M4A1", "M4A1-S", "AWP"],
                datasets: [
                    {
                        label: "Weapons",
                        data: [
                            stats.total_kills_ak47,
                            stats.total_kills_deagle,
                            stats.total_kills_m4a1,
                            stats.total_kills_m4a1_s || 0, // Use 0 if not present
                            stats.total_kills_awp,
                        ], // Fixed data length
                    },
                ],
            },
            options: {},
        });
    } else {
        console.error("Failed to acquire context from the canvas element.");
    }
}

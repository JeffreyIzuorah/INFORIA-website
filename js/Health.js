function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}



setButtonFunctions();
getLatestCOVID19Data()

// Set button functions
function setButtonFunctions()
{
    document.getElementById('countries').onchange = function() {
        const selectedValue = document.getElementById('countries').value;
        const countryData = covid19data.filter(c => c.country == selectedValue)[0];

        // display data
        const newConfirmed = document.getElementById('covidNewConfirmed');
        const totalConfirmed = document.getElementById('covidTotalConfirmed');
        const covidNewDeaths = document.getElementById('covidNewDeaths');
        const covidTotalDeaths = document.getElementById('covidTotalDeaths');
        const lastUpdated = document.getElementById('covidLastUpdate');

        (countryData.cases.new) ? newConfirmed.innerHTML = 'New confirmed cases: ' + countryData.cases.new : newConfirmed.innerHTML = 'New confirmed cases: 0';
        (countryData.cases.total) ? totalConfirmed.innerHTML = 'Total confirmed cases: ' + countryData.cases.total : totalConfirmed.innerHTML = 'Total confirmed cases: 0';
        (countryData.deaths.new) ? covidNewDeaths.innerHTML = 'New deaths: ' + countryData.deaths.new : covidNewDeaths.innerHTML = 'New deaths: 0';
        (countryData.deaths.total) ? covidTotalDeaths.innerHTML = 'Total deaths: ' + countryData.deaths.total : covidTotalDeaths.innerHTML = 'Total deaths: 0';
        lastUpdated.innerHTML = 'Last updated: ' + countryData.day;
    };
}
// COVID 19 API
async function getLatestCOVID19Data()
{

    fetch("https://covid-193.p.rapidapi.com/statistics", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "893a707f22mshdfb421917e9d5acp1b2539jsne83f243e46af"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log("COVID 19 API object:");
            console.log(response);
            console.log("\n");
    
            // add all countries to select element
            response.response.forEach(c => {
                const option = document.createElement('option');
                option.innerHTML = c.country;
                document.getElementById('countries').appendChild(option);
            })
    
            // save covid data to global variable
            covid19data = response.response;
        })
        .catch(err => {
            console.log(err);
        });
    
    }
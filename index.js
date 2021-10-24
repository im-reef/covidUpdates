console.log("hello world")
const date = new Date();

const cases = document.getElementById("cases-el");
const death = document.getElementById("death-el");
const todayCase = document.getElementById("todayCase-el");
const todayDeath = document.getElementById("todayDeath-el");
const dateToday = document.getElementById("date");

dateToday.innerHTML = date.toDateString();

fetch("https://disease.sh/v3/covid-19/countries/malaysia,%20japan,%20pakistan?strict=true? yesterday=true").then(res => {
    console.log(res);
    return res.json()
}).then(data => {
    const malaysia = data[0];
    const japan = data[1];
    const pakistan = data[2]
    console.log("data parsed", data)
    console.log(malaysia.cases, japan.cases, pakistan.cases);
    console.log(malaysia.deaths, japan.deaths, pakistan.deaths);
    console.log(malaysia.todayCases, japan.todayCases, pakistan.todayCases)
    console.log(malaysia.todayDeaths, japan.todayDeaths, pakistan.todayDeaths)

    //total case
    cases.innerHTML = `
    Malaysia: ${"   " + malaysia.cases}
    <span>Japan: ${"   " + japan.cases}</span>
    <span>Pakistan: ${"   " + pakistan.cases}</span>
    `
    //total death 
    death.innerHTML = `
    Malaysia: ${"   " + malaysia.deaths}
    <span>Japan: ${"   " + japan.deaths}</span>
    <span>Pakistan: ${"   " + pakistan.deaths}</span>
    `
    //today case
    if (malaysia.todayCases === 0) {
        malaysia.todayCases = "n/a";
    }else {
        malaysia.todayCases = "+ " + malaysia.todayCases
    }

    if (japan.todayCases === 0) {
        japan.todayCases = "n/a";
    }else {
        japan.todayCases = "+ " + japan.todayCases
    }

    if (pakistan.todayCases === 0) {
        pakistan.todayCases = "n/a";
    }else {
        pakistan.todayCases = "+ " + pakistan.todayCases
    }

    todayCase.innerHTML = `
    Malaysia: ${"   " + malaysia.todayCases}
    <span>Japan: ${"   " + japan.todayCases}</span>
    <span>Pakistan: ${"   "+ pakistan.todayCases}</span>
    `
    //today death
    if (malaysia.todayDeaths === 0) {
        malaysia.todayDeaths = "n/a";
    }else {
        malaysia.todayDeaths = "+ " + malaysia.todayDeaths
    }

    if (japan.todayDeaths === 0) {
        japan.todayDeaths = "n/a";
    }else {
        japan.todayDeaths = "+ " + japan.todayDeaths
    }

    if (pakistan.todayDeaths === 0) {
        pakistan.todayDeaths = "n/a";
    }else {
        pakistan.todayDeaths = "+ " + pakistan.todayDeaths
    }

    todayDeath.innerHTML = `
    Malaysia: ${"   " + malaysia.todayDeaths}
    <span>Japan: ${"   " + japan.todayDeaths}</span>
    <span>Pakistan: ${"   " + pakistan.todayDeaths}</span>
    `
})

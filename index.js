console.log("hello world")
const date = new Date();

const cases = document.getElementById("cases-el");
const death = document.getElementById("death-el");
const todayCase = document.getElementById("todayCase-el");
const todayDeath = document.getElementById("todayDeath-el");
const dateToday = document.getElementById("date");

dateToday.innerHTML = date.toDateString();

fetch("https://disease.sh/v3/covid-19/countries/Malaysia%2CJapan%2CPakistan?yesterday=true").then(res => {
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
    <ul>
        <li><span>Malaysia:</span> ${"   " + malaysia.cases}</li>
        <li><span>Japan:</span> ${"   " + japan.cases}</li>
        <li><span>Pakistan:</span> ${"   " + pakistan.cases}</li>
    </ul>
    `
    //total death 
    death.innerHTML = `
    <ul>
        <li><span>Malaysia:</span> ${"   " + malaysia.deaths}</li>
        <li><span>Japan:</span> ${"   " + japan.deaths}</li>
        <li><span>Pakistan:</span> ${"   " + pakistan.deaths}</li>
    </ul>
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
    <ul>
        <li><span>Malaysia:</span> ${"   " + malaysia.todayCases}</li>
        <li><span>Japan:</span> ${"   " + japan.todayCases}</li>
        <li><span>Pakistan:</span> ${"   "+ pakistan.todayCases}</li>
    </ul>
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
    <ul>
        <li><span>Malaysia:</span> ${"   " + malaysia.todayDeaths}</li>
        <li><span>Japan:</span> ${"   " + japan.todayDeaths}</li>
        <li><span>Pakistan:</span> ${"   " + pakistan.todayDeaths}</li>
    </ul>
    `
})

console.log("hello world")

const cases = document.getElementById("cases-el");
const death = document.getElementById("death-el");
const todayCase = document.getElementById("todayCase-el");
const todayDeath = document.getElementById("todayDeath-el");

fetch("https://corona.lmao.ninja/v2/countries/malaysia,%20japan,pakistan?yesterday=false&strict=true&query").then(res => {
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
    todayCase.innerHTML = `
    Malaysia: ${"   " + "+" + malaysia.todayCases}
    <span>Japan: ${"   " + "+" + japan.todayCases}</span>
    <span>Pakistan: ${"   " + "+" + pakistan.todayCases}</span>
    `
    //today death
    todayDeath.innerHTML = `
    Malaysia: ${"   " + "+" + malaysia.todayDeaths}
    <span>Japan: ${"   " + "+" + japan.todayDeaths}</span>
    <span>Pakistan: ${"   " + "+" + pakistan.todayDeaths}</span>
    `
})

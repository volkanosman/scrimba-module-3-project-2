/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lenghtEl = document.getElementById("lenght")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")


function ren(){
    const numberGivenEl = document.getElementById("number").value
    const meterFeet = (numberGivenEl * 3.281).toFixed(3)
    const feetMeter = (numberGivenEl / 3.281).toFixed(3)
    lenghtEl.innerHTML = `${numberGivenEl} meters = ${meterFeet} feet | 
    ${numberGivenEl} feet = ${feetMeter} meters`
    const literGalon = (numberGivenEl * 0.264).toFixed(3)
    const gallonLiter = (numberGivenEl / 0.264).toFixed(3)
    volumeEl.innerHTML = `${numberGivenEl} liters = ${literGalon} gallons |
    ${numberGivenEl} gallons = ${gallonLiter} liters`
    const kiloPound = (numberGivenEl * 2.204).toFixed(3)
    const poundKilo = (numberGivenEl / 2.204).toFixed(3)
    massEl.innerHTML = `${numberGivenEl} kilos = ${kiloPound} pounds |
    ${numberGivenEl} pounds = ${poundKilo} kilos`           
}

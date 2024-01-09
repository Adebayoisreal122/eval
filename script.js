
function calC()  {
    let first = firstNumb.value
    let second = secondNumb.value
    for (i=1; i<=first; i++){
        for (j=1; j<=second; j++) {
            let sum = i * j
            disp.innerHTML += `<p> carton ${i}, spicy ${j} = ${sum} </p> `
            firstNumb.value = ""
            secondNumb.value = ""
        }
    }
}

function calculateOperation() {
    var selectedOption = document.getElementById("calc").value;

    if (selectedOption === "addition") {
        // Perform addition operation
        console.log("Performing addition operation");
    } else if (selectedOption === "subtraction") {
        // Perform subtraction operation
        console.log("Performing subtraction operation");
    } else if (selectedOption === "divide") {
        // Perform division operation
        console.log("Performing division operation");
    } else if (selectedOption === "multiplication") {
        // Perform multiplication operation
        console.log("Performing multiplication operation");
    } else {
        // Handle other cases or default action
        console.log("Invalid selection");
    }
}
const five_Fig = 5;
const ten_Fig = 10;
const fifteen_Fig = 15;
const twentyFive_Fig = 25;
const fifty_Fig = 50;

const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people_number");
const tipInput = document.querySelector("#tip");
const totalInput = document.querySelector("#total");
const custom = document.querySelector("#custom > p");
const custom_1 = document.querySelector("#custom_1");
const billContainer = document.getElementById("billValue")
const peopleContainer = document.getElementById("people")

let figures = [five_Fig, ten_Fig, fifteen_Fig, twentyFive_Fig, fifty_Fig];

const all_percent = document.querySelectorAll(".percent");
const percent_only = Array.from(all_percent).slice(0, -1);

let currentElement = null;

percent_only.forEach(element => {
    let elementID = parseInt(element.id.slice(-2));
    let bill;
    let people;
    let tip; 
    // console.log(elementID)

    figures.forEach(num => {
        if (num === elementID) {
            element.innerHTML = `<p>${elementID}%</p>`;
        }
    });

    element.addEventListener("click", function() {
        console.log(elementID)
        if(billInput.value.length === 0 || peopleInput.value.length === 0) {
            billContainer.classList.add('warning')
            peopleContainer.classList.add('warning')
            console.log("rre")
            return;
        } else {
            billContainer.classList.remove('warning');
            peopleContainer.classList.remove('warning');

        }
        console.log(currentElement)

        if (currentElement === 5) {
            percent_only[currentElement].style.removeProperty("background");
        }

        if (currentElement !== null) {
            // Revert the background color of the previously clicked element
            percent_only[currentElement].style.removeProperty("background");
        }
        if (currentElement !== 5) {
            custom.style.display = "block";
            custom_1.style.display = "none";
        }
        

        
        // Set the background color of the currently clicked element
        element.style.cssText = "background: #0de4bd; color: black;";
        currentElement = percent_only.indexOf(element);
        console.log(currentElement)

        
        bill = parseFloat(billInput.value) || 0; // Use parseFloat to handle non-numeric inputs
        people = parseFloat(peopleInput.value) || 1; // Default to 1 person if not specified
        tip = (bill * elementID / 100) / people;;

        custom.addEventListener("click", function() {
        custom.style.display = "none";
        custom_1.style.display = "block";
    
        if (custom_1.value > 0) {
          tip = (bill * custom_1.value / 100) / people;
        }
    
        tipInput.value = tip.toFixed(2);
        totalInput.value = (bill / people + tip).toFixed(2);
      });
    
      custom_1.addEventListener("input", function() {
        if (custom_1.value > 0) {
          tip = (bill * custom_1.value / 100) / people;
        } else {
          tip = (bill * elementID / 100) / people;
        }
    
        tipInput.value = tip.toFixed(2);
        totalInput.value = (bill / people + tip).toFixed(2);
      });
        console.log(tip)

        // Update tipInput and totalInput
        tipInput.value = tip.toFixed(2);
        console.log(typeof(tipInput.value))
        totalInput.value = (bill / people + tip).toFixed(2);

    });
    



    // =====================================//




    custom.addEventListener("click", function() {
        console.log(elementID)
        if(billInput.value.length === 0 || peopleInput.value.length === 0) {
            billContainer.classList.add('warning')
            peopleContainer.classList.add('warning')
            console.log("rre")
            return;
        } else {
            billContainer.classList.remove('warning');
            peopleContainer.classList.remove('warning');

        }
        console.log(currentElement)

        if (currentElement === 5) {
            percent_only[currentElement].style.removeProperty("background");
        }

        if (currentElement !== 5) {
            custom.style.display = "block";
            custom_1.style.display = "none";
        }

        custom.style.display = "none";
        custom_1.style.display = "block";
    
        if (custom_1.value > 0) {
          tip = (bill * custom_1.value / 100) / people;
        }
    
        tipInput.value = tip.toFixed(2);
        totalInput.value = (bill / people + tip).toFixed(2);
    
      custom_1.addEventListener("input", function() {
        if (custom_1.value > 0) {
          tip = (bill * custom_1.value / 100) / people;
        } else {
          tip = (bill * elementID / 100) / people;
        }
    
        tipInput.value = tip.toFixed(2);
        totalInput.value = (bill / people + tip).toFixed(2);
      });
        console.log(tip)

    });

});


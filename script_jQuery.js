// console.log($(".header").text());
const five_Fig = 5;
const ten_Fig = 10;
const fifteen_Fig = 15;
const twentyFive_Fig = 25;
const fifty_Fig = 50;

const billInput = $("#bill");
const peopleInput = $("#people_number");
const tipInput = $("#tip");
const totalInput = $("#total");
const custom = $("#custom");
const custom_1 = $("#custom_1");
const custom_1_input = $("#custom_1 > input");
const custom_1_img = $("#custom_1 > img");
const billContainer = $("#billValue");
const peopleContainer = $("#people");
const reset = $("button");
let bill;
let people;
let tip;
let mobileView;
let desktopView;
console.log(window.innerWidth);
if (window.innerWidth <= 680) {
  mobileView = window.innerWidth;
} else {
  desktopView = window.innerWidth;
}
// console.log(mobileView);
// console.log(desktopView);

let figures = [five_Fig, ten_Fig, fifteen_Fig, twentyFive_Fig, fifty_Fig];

const all_percent = $(".percent");
const percent_only = Array.from(all_percent).slice(0, -2);
console.log(percent_only);
console.log(all_percent);


percent_only.forEach((element) => {
  let elementID = parseInt(element.id.slice(-2));

  console.log(elementID);

  figures.forEach((num) => {
    if (num === elementID) {
      $(element).html(`<p>${elementID}%</p>`);
    }
  });

  $(element).click(function () {
    console.log(elementID);

    // Remove 'clicked' class from all elements
    percent_only.forEach((el) => {
      $(el).removeClass("clicked");
    });

    custom.click(function () {
      percent_only.forEach((el) => {
        $(el).removeClass("clicked");
      });
    });

    $(document).keydown(function (e) {
      getCustomPercentageValue(e.key);
    });

    // Add 'clicked' class to the clicked element
    $(element).addClass("clicked");

    const pCustom = $("#custom > p");
    console.log(pCustom);
    console.log("object");
    pCustom.css("display", "block");
    custom_1.css("display", "none");
    
    if (
      Number($(billInput).val()) === 0 ||
      Number($(peopleInput).val()) === 0
      ) {
        $(billContainer).addClass("warning");
        $(peopleContainer).addClass("warning");
        console.log("Cannot be empty");
      return;
    } else {
      $(billContainer).removeClass("warning");
      $(peopleContainer).removeClass("warning");
    }

    // customPercentage();
    tipCalculation(elementID);
    totalCalculation(elementID);
  });
});

//Calculate the tip amount
function tipCalculation(percent) {
  bill = parseFloat(billInput.val());
  people = parseFloat(peopleInput.val());
  tip = (bill * percent) / 100 / people;
  console.log(tip);
  tipInput.val(tip.toFixed());
}

//Calculate the total amount
function totalCalculation(percent) {
  bill = parseFloat(billInput.val());
  console.log(bill);
  people = parseFloat(peopleInput.val());
  console.log(people);
  tip = (bill * (percent / 100)) / people;
  let total = bill / people + tip;
  totalInput.val(total.toFixed(2));
  console.log(total);
}

// set up custom percentage
function customPercentage() {
  custom.click(function () {
    const pCustom = $("#custom > p");
    console.log(pCustom);
    console.log("object");
    pCustom.css("display", "none");
    custom_1.css("display", "flex");
    custom_1_img.css("display", "block");
    custom_1_input.css("display", "block");
  });

  percent_only.forEach((el) => {
    $(el).removeClass("clicked");
  });

  $(document).keydown(function (e) {
    getCustomPercentageValue(e.key);
  });

  if (mobileView) {
    $("#custom_1_input").on("change", mobileLogic());
    // custom_1.change(mobileLogic())
  }
}

function getCustomPercentageValue(key) {
  if (key === "Enter") {
    // console.log("kEY PRESSED");
    if (
      Number($(billInput).val()) === 0 ||
      Number($(peopleInput).val()) === 0 &&
      Number($(custom_1_input).val()) === 0
    ) {
      $(billContainer).addClass("warning");
      $(peopleContainer).addClass("warning");
      console.log("rre");
      return;
    } else {
      $(billContainer).removeClass("warning");
      $(peopleContainer).removeClass("warning");
    }
    console.log(key);
    bill = parseFloat(billInput.val());
    people = parseFloat(peopleInput.val());
    let percent = parseFloat(custom_1_input.val() / 100);
    console.log(percent);
    tip = (bill * percent) / people;
    tipInput.val(tip.toFixed(2));
    let total = bill / people + tip;
    console.log(total);
    totalInput.val(total.toFixed(2));
  }

  $(custom_1_img).click(function () {
    if (
      Number($(billInput).val()) === 0 || Number($(peopleInput).val()) === 0) {
      $(billContainer).addClass("warning");
      $(peopleContainer).addClass("warning");
      console.log("Cannot be empty");
      // console.log("rre");
      return;
    } else {
      $(billContainer).removeClass("warning");
      $(peopleContainer).removeClass("warning");
    }

    bill = parseFloat(billInput.val());
    people = parseFloat(peopleInput.val());
    let percent = parseFloat(custom_1_input.val() / 100);
    console.log(percent);
    tip = (bill * percent) / people;
    tipInput.val(tip.toFixed(2));
    let total = bill / people + tip;
    console.log(total);
    totalInput.val(total.toFixed(2));
  });
}

function mobileLogic() {
  // if (
  //   Number($(billInput).val()) === 0 ||
  //   Number($(peopleInput).val()) === 0 &&
  //   Number($(custom_1_input).val()) === 0
  // ) {
  //   $(billContainer).addClass("warning");
  //   $(peopleContainer).addClass("warning");
  //   console.log("rre");
  //   return;
  // } else {
  //   $(billContainer).removeClass("warning");
  //   $(peopleContainer).removeClass("warning");
  // }
  console.log("mobile1");
  setTimeout(() => {
    console.log("mobile");
    bill = parseFloat(billInput.val());
    people = parseFloat(peopleInput.val());
    let percent = parseFloat(custom_1_input.val() / 100);
    console.log(percent);
    tip = (bill * percent) / people;
    tipInput.val(tip.toFixed(2));
    let total = bill / people + tip;
    console.log(total);
    totalInput.val(total.toFixed(2));
  }, 600);
  // if(custom_1_input.val("")) {
  //   return;
  // }
}


function resetAll() {
  reset.click(() => {
    console.log("RESET Completed");
    billInput.val("");
    peopleInput.val("");
    custom_1_input.val("");
    $(billContainer).removeClass("warning");
    $(peopleContainer).removeClass("warning");

    percent_only.forEach((el) => {
      $(el).removeClass("clicked");
    });
  });
}

customPercentage();
resetAll();

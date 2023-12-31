const leapButton = document.querySelector(".checkLeapBtn");
const leapInput = document.querySelector(".leapCheckInput");
const leapTextOut = document.querySelector(".leapDateMessage");

leapButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (!leapInput.value || isNaN(leapInput.value)) {
    leapTextOut.textContent = "Рік народження не вказаний";
    leapTextOut.style.color = "#000";
  } else if (Number(leapInput.value) % 4 == 0) {
    leapTextOut.textContent = "Рік народження високосний";
    leapTextOut.style.color = "#1E0";
  } else {
    leapTextOut.textContent = "Рік народження не є високосним";
    leapTextOut.style.color = "#E10";
  }
});

const guessNumButton = document.querySelector(".guessNumBtn");
const guessNumInput = document.querySelector(".guessNumInput");
const guessNumTextOut = document.querySelector(".guessNumMessage");
const N = Math.round(Math.random() * 100);

guessNumButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (!guessNumInput.value || isNaN(guessNumInput.value)) {
    guessNumTextOut.textContent = "Число не вказано";
    guessNumTextOut.style.color = "#000";
  } else if (Number(guessNumInput.value) > N) {
    guessNumTextOut.textContent = "Надто багато";
    guessNumTextOut.style.color = "#E10";
  } else if (Number(guessNumInput.value) < N) {
    guessNumTextOut.textContent = "Надто мало";
    guessNumTextOut.style.color = "#E10";
  } else {
    guessNumTextOut.textContent = "Правильно!";
    guessNumTextOut.style.color = "#1E0";
  }
});

const calculatorAdd = document.querySelector(".calculatorAdd");
const calculatorSub = document.querySelector(".calculatorSub");
const calculatorMult = document.querySelector(".calculatorMult");
const calculatorDiv = document.querySelector(".calculatorDiv");
const calculatorEqual = document.querySelector(".calculatorEqual");
const calculatorInpA = document.querySelector(".calculatorInputA");
const calculatorInpB = document.querySelector(".calculatorInputB");
const calculatorOut = document.querySelector(".calculatorOutput");

calculatorAdd.addEventListener("click", (event) => {
  event.preventDefault();
  let sum = Number(calculatorInpA.value) + Number(calculatorInpB.value);
  calculatorOut.textContent = sum;
});

calculatorSub.addEventListener("click", (event) => {
  event.preventDefault();
  let sub = Number(calculatorInpA.value) - Number(calculatorInpB.value);
  calculatorOut.textContent = sub;
});

calculatorMult.addEventListener("click", (event) => {
  event.preventDefault();
  let mult = Number(calculatorInpA.value) * Number(calculatorInpB.value);
  calculatorOut.textContent = mult;
});

calculatorDiv.addEventListener("click", (event) => {
  event.preventDefault();
  let div = Number(calculatorInpA.value) / Number(calculatorInpB.value);
  calculatorOut.textContent = div;
});

calculatorEqual.addEventListener("click", (event) => {
  event.preventDefault();
});

const footballField = document.querySelector(".footballField");
const footballBall = document.querySelector(".footballBall");
let ballVelX = 0;
let ballVelY = 0;
let ballPosX = 0;
let ballPosY = 135;
footballBall.style.marginTop = "135px";
footballBall.style.marginLeft = "0px";

function updateBallPosition() {
  ballVelX = (Math.random() - 0.5) * 10;
  ballVelY = (Math.random() - 0.5) * 10;
  setInterval(() => {
    ballPosX += ballVelX;
    ballPosY += ballVelY;
    ballVelX *= 0.999;
    ballVelY *= 0.999;

    if (ballPosX + ballVelX < -480 || ballPosX + ballVelX > 450) {
      ballVelX *= -0.9;
    }
    if (ballPosY + ballVelY < 0 || ballPosY + ballVelY > 240) {
      ballVelY *= -0.9;
    }

    footballBall.style.marginTop = ballPosY + "px";
    footballBall.style.marginLeft = ballPosX + "px";
  }, 1);
}

footballBall.addEventListener("click", () => {
  updateBallPosition();
});

const scientistsSquares = document.getElementsByClassName(
  "scientistTableSquare"
);

let peopleInfo = [
  ["Alan", "Turing", 1912, 42],
  ["Albert", "Einstein", 1879, 76],
  ["Alexander", "Fleming", 1881, 74],
  ["Ernest", "Rutherford", 1871, 66],
  ["Frank", "Rosenblatt", 1928, 43],
  ["Friedrich", "Gauss", 1777, 78],
  ["Galileo", "Galilei", 1564, 78],
  ["Ignac", "Semmelweis", 1818, 57],
  ["Isaac", "Newton", 1643, 84],
  ["James", "Watt", 1736, 83],
  ["Louis", "Pasteur", 1822, 73],
  ["Marie", "Curie", 1867, 67],
  ["Michael", "Faraday", 1791, 76],
  ["Nicolas", "Tesla", 1856, 83],
  ["Rosalind", "Franklin", 1920, 38],
  ["Thomas", "Edison", 1847, 84],
];


const filterXIX = document.querySelector(".filterXIX");
const filterAZSort = document.querySelector(".filterAZSort");
const filterLifeTimeSort = document.querySelector(".filterLifeTimeSort");
const filterLastestBirth = document.querySelector(".filterLastestBirth");
const filterScientistBirth = document.querySelector(".filterScientistBirth");
const filterSurnameC = document.querySelector(".filterSurnameC");
const filterNameA = document.querySelector(".filterNameA");
const filterLifeLongestShortest = document.querySelector(
  ".filterLifeLongestShortest"
);
const randomScientist = Math.round(Math.random()*16)
filterScientistBirth.textContent =
  peopleInfo[randomScientist][0] + " " + peopleInfo[randomScientist][1] + " народився у...";


function setImages(images) {
  for (let img = 0; img < images.length; img++) {
    scientistsSquares[img].innerHTML = `
      <img src="./Scientists/${
        images[img][0] + images[img][1]
      }.jpg" alt="" class="scientistTableImg" />
    `;
  }
}

setImages(peopleInfo);

function setImages(images) {
  for (let img = 0; img < images.length; img++) {
    scientistsSquares[img].innerHTML = `
      <img src="./Scientists/${images[img][0] + images[img][1]}.jpg" alt="" class="scientistTableImg" />
    `;
  }
}

setImages(peopleInfo);

filterXIX.addEventListener("click", (event) => {
  event.preventDefault();
  processedArray = peopleInfo.filter((info) => info[2] < 1901 && info[2] > 1800);
  while(processedArray.length < 16){
    processedArray.push(["Nothing", "", 0, 0, 0])
  }
  setImages(processedArray);
});

filterAZSort.addEventListener("click", (event) => {
  event.preventDefault();
  processedArray = peopleInfo.sort((a, b) => a[0] - b[0]);
  setImages(processedArray);
});

filterLifeTimeSort.addEventListener("click", (event) => {
  event.preventDefault();
  processedArray = peopleInfo.sort((a, b) => a[3] - b[3]);
  setImages(processedArray);
});

filterLastestBirth.addEventListener("click", (event) => {
  event.preventDefault();
  processedArray = peopleInfo.sort((a, b) => b[2] - a[2])[0];
  alert(processedArray[0] + " " + processedArray[1]);
});
filterScientistBirth.addEventListener("click", (event) => {
  event.preventDefault();
  alert(peopleInfo[randomScientist][2]);
});
filterSurnameC.addEventListener("click", (event) => {
  event.preventDefault();
  processedArray = peopleInfo.filter((info) => info[1][0].toUpperCase() == "C");
  while (processedArray.length < 16) {
    processedArray.push(["Nothing", "", 0, 0, 0]);
  }
  setImages(processedArray);
});
filterNameA.addEventListener("click", (event) => {
  event.preventDefault();
  processedArray = peopleInfo.filter((info) => info[0][0].toUpperCase() != "A");
  while (processedArray.length < 16) {
    processedArray.push(["Nothing", "", 0, 0, 0]);
  }
  setImages(processedArray);
});
filterLifeLongestShortest.addEventListener("click", (event) => {
  event.preventDefault();
  let processedArray = peopleInfo.slice().sort((a, b) => a[3] - b[3]);
  alert(
    processedArray[0][0] +
      " " +
      processedArray[0][1] +
      " - " +
      processedArray[15][0] +
      " " +
      processedArray[15][1]
  );
});
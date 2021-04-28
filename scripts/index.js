const generatePassword = () => {
  let passwordLengthTxt = document.querySelector("#passwordLength").value;
  let passwordLength = parseInt(passwordLengthTxt);
  if (passwordLength >= 4 && passwordLength <= 20) {
    let numberChars = "0123456789";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let specialChars = "!§$%&?_@";
    let allChars = numberChars + upperChars + lowerChars + specialChars;
    let randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray[3] = specialChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    let shuffledArr = shuffleArray(
      randPasswordArray.map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
    ).join("");
    let newLi = document.createElement("li");
    let text = document.createTextNode(shuffledArr);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    const newContainer = document.createElement("div");
    const copyButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    copyButton.innerHTML = "📝";
    deleteButton.innerHTML = "✗";
    newContainer.appendChild(copyButton);
    newContainer.appendChild(deleteButton);
    copyButton.classList.add("listBtn");
    deleteButton.classList.add("listBtn");
    newLi.appendChild(newContainer);
    deleteButton.addEventListener("click", () => newLi.remove());
    copyButton.addEventListener("click", check);
    document.querySelector("#passwordLength").value = "";
  } else {
    alert("Password length must be between 4 and 20");
  }
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const keyCheck = (e) => {
  if (e.key == "Enter") generatePassword();
};

const userInput = document.querySelector("#passwordLength");
userInput.addEventListener("keypress", keyCheck);

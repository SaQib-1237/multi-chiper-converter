function caesarCipher(text, shift) {
  let result = "";

  for (let char of text) {
    if (char >= "A" && char <= "Z") {
      result += String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shift) % 26) + 65,
      );
    } else if (char >= "a" && char <= "z") {
      result += String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift) % 26) + 97,
      );
    } else {
      result += char;
    }
  }

  return result;
}

function atbashCipher(text) {
  let result = "";

  for (let char of text) {
    if (char >= "A" && char <= "Z") {
      result += String.fromCharCode(90 - (char.charCodeAt(0) - 65));
    } else if (char >= "a" && char <= "z") {
      result += String.fromCharCode(122 - (char.charCodeAt(0) - 97));
    } else {
      result += char;
    }
  }

  return result;
}

function base64Encode(text) {
  return btoa(text);
}

function textToBinary(text) {
  return text
    .split("")
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

function convert() {
  const text = document.getElementById("text").value;
  const option = document.getElementById("option").value;
  const shift = parseInt(document.getElementById("shift").value) || 0;

  let output = "";

  if (option === "caesar") {
    output = caesarCipher(text, shift);
  } else if (option === "atbash") {
    output = atbashCipher(text);
  } else if (option === "base64") {
    output = base64Encode(text);
  } else if (option === "binary") {
    output = textToBinary(text);
  } else if (option === "reverse") {
    output = reverseText(text);
  }

  document.getElementById("output").innerText = output;
}

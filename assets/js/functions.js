document.addEventListener('DOMContentLoaded', function (event) {




  // array with texts to type in typewriter
  var dataText = ["Developer", "Systems Architect", "Software Engineer",];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector(".role-text").innerHTML = text.substring(0, i + 1) + '<span class="caret" aria-hidden="true">&nbsp;</span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 50);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      // setTimeout(typeWriterDelete(text, text.length, fnCallback), 700);
      setTimeout(fnCallback, 700);
    }
  }

  function typeWriterDelete(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i > 0) {
      // add next character to h1
      document.querySelector(".role-text").innerHTML = text.substring(0, i - 1) + '<span class="caret" aria-hidden="true">&nbsp;</span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriterDelete(text, i - 1, fnCallback)
      }, 50);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 200);
    }
  }

  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    // check if dataText[i] exists
    if (i < dataText.length) {
      console.log("dataText[i]" + i)

      if (i < dataText.length - 1) {
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          //  StartTextAnimation(i + 1);
          typeWriterDelete(dataText[i], dataText[i].length, function () {
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
          })
        });
      } else {
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          //  StartTextAnimation(i + 1);
          StartTextAnimation(i + 1);
        });
      }
      // text exists! start typewriter animation
    }
  }
  // start the text animation
  StartTextAnimation(0);
});


function hideCodeWindow() {
  var codeWindow = document.getElementById("closable-code-window");
  var titleBox = document.getElementById("shrinkable-title-box")
  if (codeWindow.style.display === "none") {
    codeWindow.style.display = "block";
    titleBox.style.height = "400px";
  } else {
    codeWindow.style.display = "none";
    titleBox.style.height = "200px"
  }
}

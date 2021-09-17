var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#output")
var serverUrl = "https://api.funtranslations.com/translate/yoda.json"


function getTranslatedUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error Occured!", error);
    alert("Something went wrong! " + error)
}

function clickHandler() {


    var inputText = txtInput.value;

    fetch(getTranslatedUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText
        })
        .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler)
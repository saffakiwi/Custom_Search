const endpoint = "https://ui.customsearch.ai/hosted-page?customconfig=19f0eef1-48b1-4512-b791-1cbb318e2b38&version=latest&market=en-US&q="

function myFunction() {
    modifySearchText();
  }


function modifySearchText () {
    var inputVal = document.getElementById("query").value;
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    newVal = inputVal.replace(regex, ' ');
    window.open(endpoint + newVal);
}


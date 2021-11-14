
var search = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

var replaceWith = " ";

var x = "er.gh!K,P%r"

function modifyText(x) {
    return result = x.replace(search, replaceWith);
}

module.exports=modifyText;
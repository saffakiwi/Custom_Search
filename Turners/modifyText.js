const search = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

const replaceWith = '';

const x = 'er.gh!K,P%r';

function modifyText(x) {
    return result = x.replace(search, replaceWith);
}

module.exports = modifyText;
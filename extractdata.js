function extractTokenData(string) {
    let startIndex = string.indexOf("let tokenData = ") + 16;
    let endIndex = string.indexOf("};", startIndex) + 1;
    let tokenDataString = string.substring(startIndex, endIndex);
    return JSON.parse(tokenDataString);
}

let string = `<html><head><meta name="viewport" content="width = device - width, initial - scale=1, maximum - scale=1"/><meta charset="utf - 8"/><script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script><script>let tokenData = {"tokenId":"98000192","hash":"0xbf331f72a565c51c7d5a155325655131746cc64560a9b1530634aaac6fba17ed"}</script><script>`;
let tokenData = extractTokenData(string);
console.log(tokenData);

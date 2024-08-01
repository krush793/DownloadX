const setLineBreak = () => {
    if (document.body.clientWidth <= 320) {
        document.querySelector("#next_line").innerHTML = "<br>";
    } else {
        document.querySelector("#next_line").innerHTML = "";
    }
}
setLineBreak();
window.addEventListener("resize", setLineBreak);

const inputURL = document.getElementById('download_url');
const downloadBtn = document.getElementById('download_btn');
inputURL.addEventListener('click', async () => {
    const pattern = /^(https?:\/\/)?(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)*[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.[a-zA-Z]{2,})(\/[^?]*)?(\?[^#]*)?$/;
    const text = await navigator.clipboard.readText();
    if (text.match(pattern)) {
        inputURL.value = text
    }
});
downloadBtn.addEventListener('click', () => {
    var dataToSend = {
      "key1": "value1",
      "key2": "value2",
    };
    downData.postMessage(JSON.stringify(dataToSend));
});

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
        inputURL.setCustomValidity('');
    }
});
inputURL.addEventListener('input', () => {
    inputURL.setCustomValidity('');
});
downloadBtn.addEventListener('click', () => {
    const pattern = /^(https?:\/\/)?(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)*[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.[a-zA-Z]{2,})(\/[^?]*)?(\?[^#]*)?$/;
    if (inputURL.value.trim() === '') {
        inputURL.setCustomValidity('Please enter URL.');
    } else if (!inputURL.value.trim().match(pattern)) {
        inputURL.setCustomValidity('Please enter a valid URL.');
    }
    inputURL.reportValidity();
});
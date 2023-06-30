const textArea = document.querySelector("textarea");
const fileName = document.querySelector("input");
const fileType = document.querySelector("select");
const saveBtn = document.querySelector("button");

saveBtn.addEventListener('click', () => {
    const blob = new Blob([textArea.value], {type: fileType.value});

    const fileUrl = URL.createObjectURL(blob);

    const Link = document.createElement('a');
    Link.href = fileUrl;
    Link.download = fileName.value;
    Link.click();

    saveBtn.innerHTML = `Save As ${fileType.value}`
})





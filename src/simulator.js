const simulator = async _ => {
    const searchElements = document.getElementsByClassName("search")
    const decodingElements = document.getElementsByClassName("decoding")
    const executeElements = document.getElementsByClassName("execute")
    const writeElements = document.getElementsByClassName("write")

    hiddenElements(searchElements);
    hiddenElements(decodingElements);
    hiddenElements(executeElements);
    hiddenElements(writeElements);

    await showElement(searchElements[0])
    await showElement(decodingElements[0])
    await showElement(searchElements[1])
    await showElement(executeElements[0])
    await showElement(decodingElements[1])
    await showElement(searchElements[2])
    await showElement(writeElements[0])
    await showElement(executeElements[1])
    await showElement(decodingElements[2])
    await showElement(searchElements[3])
    await showElement(writeElements[1])
    await showElement(executeElements[2])
    await showElement(decodingElements[3])
    await showElement(writeElements[2])
    await showElement(executeElements[3])
    await showElement(writeElements[3])
}

const hiddenElements = elements => {
    for(let element of elements)
        element.classList.add("hidden")
}

const showElement = async element => {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            element.classList.remove("hidden")
            resolve();
            clearInterval(interval);
        }, 1000);
    });
}
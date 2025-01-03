function findAndReplace() {
    // Get the values from the input and text area
    const inputText = document.getElementById("textInput").value;
    const findText = document.getElementById("findText").value;
    const replaceText = document.getElementById("replaceText").value;

    // Perform the find and replace operation
    if (findText !== "" && replaceText !== "") {
        // Replace all occurrences of the findText with replaceText
        const updatedText = inputText.split(findText).join(replaceText);
        
        // Display the updated text in the output area
        document.getElementById("outputText").value = updatedText;
    } else {
        alert("Please enter both 'Find' and 'Replace with' text.");
    }
}

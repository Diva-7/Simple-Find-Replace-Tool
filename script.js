// Get DOM elements
const inputText = document.getElementById('inputText');
const findText = document.getElementById('findText');
const replaceText = document.getElementById('replaceText');
const replaceButton = document.getElementById('replaceButton');
const outputText = document.getElementById('outputText');
const feedback = document.getElementById('feedback');

// Event listener for Replace button
replaceButton.addEventListener('click', () => {
    const text = inputText.value;
    const find = findText.value;
    const replace = replaceText.value;

    // Check if Find or Replace input is empty
    if (!find || !replace) {
        feedback.textContent = 'Please provide both "Find" and "Replace" text.';
        feedback.classList.add('error');
        return;
    }

    // Perform find and replace
    const replacedText = text.replace(new RegExp(find, 'gi'), replace);

    // Check if any replacement was made
    if (replacedText === text) {
        feedback.textContent = 'No matches found.';
        feedback.classList.add('error');
    } else {
        feedback.textContent = `${(text.match(new RegExp(find, 'gi')) || []).length} replacement(s) made.`;
        feedback.classList.remove('error');
    }

    // Update output text
    outputText.value = replacedText;
});

// Optional: Live preview of replaced text as the user types
inputText.addEventListener('input', () => {
    outputText.value = inputText.value;
});

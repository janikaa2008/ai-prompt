
// Get HTML elements
const role = document.getElementById("role");
const task = document.getElementById("task");
const context = document.getElementById("context");
const constraints = document.getElementById("constraints");
const format = document.getElementById("format");

const generateBtn = document.getElementById("generateBtn");
const sampleBtn = document.getElementById("sampleBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

const promptOutput = document.getElementById("promptOutput");
const message = document.getElementById("message");

// Generate Prompt Function
generateBtn.addEventListener("click", function () {

    // Get input values
    const roleValue = role.value.trim();
    const taskValue = task.value.trim();
    const contextValue = context.value.trim();
    const constraintsValue = constraints.value.trim();
    const formatValue = format.value.trim();

    // Check required fields
    if (!roleValue || !taskValue) {
        message.textContent =
            "Please fill in at least the Role and Task fields.";

        message.style.color = "red";
        return;
    }

    // Create the prompt
    let prompt = `Role: ${roleValue}

Task: ${taskValue}`;

    if (contextValue) {
        prompt += `

Context: ${contextValue}`;
    }

    if (constraintsValue) {
        prompt += `

Constraints: ${constraintsValue}`;
    }

    if (formatValue) {
        prompt += `

Output Format: ${formatValue}`;
    }

    // Display generated prompt
    promptOutput.textContent = prompt;

    message.textContent = "Prompt generated successfully!";
    message.style.color = "#16845f";
});


// Sample Prompt Function
sampleBtn.addEventListener("click", function () {

    role.value = "Act as a Computer Science teacher";

    task.value =
        "Explain Python programming to a beginner student.";

    context.value =
        "I am a first-year college student with no coding experience.";

    constraints.value =
        "Use simple English, provide two examples, and avoid difficult words.";

    format.value =
        "Give the explanation in bullet points with three practice questions.";

    message.textContent = "Sample prompt loaded!";
    message.style.color = "#16845f";
});


// Copy Prompt Function
copyBtn.addEventListener("click", async function () {

    const generatedPrompt = promptOutput.textContent.trim();

    // Check whether a prompt exists
    if (
        !generatedPrompt ||
        generatedPrompt === "Your generated prompt will appear here..."
    ) {
        message.textContent = "Please generate a prompt first.";
        message.style.color = "red";
        return;
    }

    try {
        await navigator.clipboard.writeText(generatedPrompt);

        message.textContent = "Prompt copied to clipboard!";
        message.style.color = "#16845f";

    } catch (error) {

        message.textContent =
            "Copy failed. Please select and copy the prompt manually.";

        message.style.color = "red";
    }
});


// Clear All Fields Function
clearBtn.addEventListener("click", function () {

    role.value = "";
    task.value = "";
    context.value = "";
    constraints.value = "";
    format.value = "";

    promptOutput.textContent =
        "Your generated prompt will appear here...";

    message.textContent = "";

});

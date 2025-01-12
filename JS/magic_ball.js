const answers = [
    "Yes, definitely!", "It is certain.", "Without a doubt.",
    "You may rely on it.", "As I see it, yes.", "Most likely.",
    "Outlook good.", "Yes.", "Signs point to yes.",
    "Reply hazy, try again.", "Ask again later.",
    "Better not tell you now.", "Cannot predict now.",
    "Concentrate and ask again.", "Don't count on it.",
    "My reply is no.", "My sources say no.",
    "Outlook not so good.", "Very doubtful."
];

function shakeMagic8Ball() {
    const questionInput = document.getElementById('question').value.trim();
    const answerDiv = document.getElementById('answer');

    // Check if the user typed a question
    if (!questionInput) {
        alert("Please enter a question!");
        return;
    }

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    // Set the answer text
    answerDiv.textContent = randomAnswer;

    // Trigger fade-in effect
    answerDiv.style.opacity = 1;

    // Fade out the answer after a short delay
    setTimeout(() => {
        answerDiv.style.opacity = 0;
    }, 2000);
}
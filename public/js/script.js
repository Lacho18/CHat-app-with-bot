const input = document.getElementById("input");
const sendButton = document.getElementById("sendButton");
const chatWindow = document.getElementById("chatWindow");

async function sendButtonHandler() {
    createVisualMessage("sender", input.value);

    const response = await fetch("http://localhost:3000/message/?value=" + encodeURIComponent(input.value), {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    });

    const result = await response.json();

    console.log(result);

    if (result.message) {
        createVisualMessage("receiver", result.message);
    }

    input.value = "";
}

function createVisualMessage(type, value) {
    const newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.classList.add(type);

    const paragraph = document.createElement("p");
    paragraph.textContent = value;

    newMessage.appendChild(paragraph);

    chatWindow.appendChild(newMessage);
}

sendButton.addEventListener('click', sendButtonHandler);

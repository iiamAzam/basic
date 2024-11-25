
function blobToString(blob) {
    if (blob.size === 0) {
        console.error("Blob is empty");
        return;
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            resolve(reader.result);
        };

        reader.onerror = () => {
            reject(reader.error);
        };

        reader.readAsText(blob); 
    });
}



document.getElementById('sendButton').addEventListener('click', function() {
    const input = document.getElementById('messageInput');
    const messageText = input.value.trim();
    
        console.log(messageText)

    if (messageText) {
       
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = messageText;

        const chatWindow = document.getElementById('chatWindow');
        chatWindow.appendChild(userMessage);
        if(messageText){
            socket.send(messageText)
            input.value = '';
        }
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});

const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', (event) => {

});
// Flag to prevent infinite loop
let shouldRespond = true;
socket.addEventListener('message', (event) => {
            const friendMessage = document.createElement('div');
            friendMessage.className = 'message friend-message';
            
            const blob = blobToString(event.data)
            
            blob.then((e)=>  friendMessage.textContent=e).catch((err)=>console.log(err))
            // friendMessage.textContent = text; 
            chatWindow.appendChild(friendMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight;
});

socket.addEventListener('error', (event) => {
    console.log('Socket error:', event);
});

// Optional: Listener for socket closure
socket.addEventListener('close', (event) => {
    console.log('Socket closed:', event);
});



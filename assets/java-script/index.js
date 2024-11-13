document.addEventListener('DOMContentLoaded', () => {
    const voltageDiv = document.getElementById('voltage');
    const currentDiv = document.getElementById('current');
    const powerDiv = document.getElementById('power');
    const energyDiv = document.getElementById('energy');

    // Initialize a WebSocket connection to the server
    const socket = new WebSocket('ws://localhost:7000');

    // Event listener for when the WebSocket connection is opened
    socket.addEventListener('open', (event) => {
        console.log('WebSocket connection established.');
    });

    // Event listener for receiving messages from the server
    socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        voltageDiv.textContent = data.voltage;
        currentDiv.textContent = data.current;
        powerDiv.textContent = data.power;
        energyDiv.textContent = data.energy;
    });

    // Event listener for WebSocket errors
    socket.addEventListener('error', (error) => {
        console.error('WebSocket error:', error);
    });

    // Event listener for when the WebSocket connection is closed
    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed.');
    });
});

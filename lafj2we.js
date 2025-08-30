// Function to get current date and time
function getCurrentTimestamp() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

// Update the timestamp element on page load
function updateTimestamp() {
    const timestampElement = document.getElementById('currentTimestamp');
    if (timestampElement) {
        timestampElement.textContent = `CurrentTimestamp: ${getCurrentTimestamp()}`;
    }
}

// Call updateTimestamp when the page loads
window.onload = updateTimestamp;
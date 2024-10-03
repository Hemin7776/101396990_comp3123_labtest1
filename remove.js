// remove.js
const fs = require('fs');
const path = require('path');

function removeLogs() {
    const logsDir = path.join(__dirname, 'Logs');

    if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`delete files...${file}`);
            fs.unlinkSync(filePath);
        });
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

// Execute the function
removeLogs();

// add.js
const fs = require('fs');
const path = require('path');

function createLogs() {
    const logsDir = path.join(__dirname, 'Logs');

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    }

    process.chdir(logsDir);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(fileName);
    }
}

// Execute the function
createLogs();

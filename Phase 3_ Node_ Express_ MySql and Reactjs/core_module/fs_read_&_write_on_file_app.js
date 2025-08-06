import fs from 'fs';

fs.readFile('text_for_FS.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:\n", data);
});

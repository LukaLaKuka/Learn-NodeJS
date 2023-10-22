const fs = require('fs');
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, "./readme.md"), "utf-8");

const newData = data.replace("react", "Svelte");

fs.writeFileSync(path.join(__dirname, "./readmeSvelte.md"), newData, 'utf-8');

/*
fs.readFile("./readme.md", {"encoding": "utf-8"}, (err, data) => {
    if (err) console.error(err);
    readmeContent = data;
});
*/


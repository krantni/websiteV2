const fs = require('fs');
const content = fs.readFileSync('players.json');
const jsonContents = JSON.parse(content);
const output: { [key: string]: string } = {};

export const convertPlayerJson = () => {
  for (const key in jsonContents) {
    output[key] = jsonContents[key].full_name;
    console.log(jsonContents[key].full_name);
  }
  fs.writeFileSync('./data.json', JSON.stringify(output), 'utf-8');
};

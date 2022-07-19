const fs = require('fs');
const Perseverance = require('./src/app/Perseverance')

function main() {
  
  const mission = new Perseverance()
  
  try {
    fs.readFile('./assets/input.txt', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const input = data.toString();
      mission.executeInstructions(input);
      process.stdout.write('Input:\n' + input + '\n');
      process.stdout.write('Output:\n' + mission.runMissionPerseverance() + '\n');
      
    });
  } catch(err) {
    process.stdout.write(err + '\n');
  }
}

main()


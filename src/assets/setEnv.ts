/*
 tslint
: disable
 */
// @ts-nocheck

const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;

function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }

    if (environmentFileContent) {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}

// Providing path to the `environments` directory
const envDirectory = './src/environments';

//creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

//creates the `environment.prod.ts` and `environment.ts` files if it does not exist
writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');


// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'prod';

// Choose the correct targetPath based on the environment chosen
const targetPath = isProduction

  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

//actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  apiUrl: '/api',
  clientType: 'beta',
  clientToken: '${process.env.CLIENT_TOKEN}',
  email: '${process.env.EMAIL}',
  openaikey: '${process.env.OPEN_AI_KEY}',
};
`;

writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file


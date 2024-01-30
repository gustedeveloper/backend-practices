/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


//Para usar inquirer, hay que usar import, ya que ha adoptado el formato ES Module (ESM), 
//Es importante que el archivo principal (index), tenga la extensión mjs para que sea compatible con el formato ESM.

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
  {
    type: 'input',
    name: 'userURL',
    message: 'Enter URL:',
  },
]).then((answers) => {
  // El input del usuario estará en answers.userURL
  //console.log('URL:', answers.userURL);
  const url = answers.userURL;
   // Generar el código QR
  const qrCode = qr.image(url, { type: 'png' });

  // Guardar el código QR en un archivo
  qrCode.pipe(fs.createWriteStream('qr-code.png'));
  console.log('QR Code generated and saved succesfully.');

  //Genera un archivo txt con la URL insertada
  fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
})

});



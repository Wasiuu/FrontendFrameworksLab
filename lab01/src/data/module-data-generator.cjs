const fs = require('fs');
const path = require('path');


const generateRegistrationNumber = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    return (
        letters[~~(Math.random() * letters.length)] +
        letters[~~(Math.random() * letters.length)] +
        '-' +
        numbers[~~(Math.random() * numbers.length)] +
        numbers[~~(Math.random() * numbers.length)] +
        numbers[~~(Math.random() * numbers.length)]
    );
};


const generateYear = () => {
    return Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000;
};


const count = Number(process.argv[2]);
let carBrands = [];


fs.readFile(path.join(__dirname, 'car-brands.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error('Błąd podczas odczytu pliku:', err);
        return;
    }


    carBrands = data.split("\n").map(brand => brand.trim()).filter(brand => brand.length > 0);

    let content = "export const cars = [\n";

    for (let i = 0; i < count; i++) {
        const id = i + 1;
        const brand = carBrands[~~(Math.random() * carBrands.length)];
        const registrationNumber = generateRegistrationNumber();
        const year = generateYear();


        content += `  {
    id: ${id},
    brand: "${brand}",
    registrationNumber: "${registrationNumber}",
    year: ${year}
  },\n`;
    }

    content += "];";


    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js was generated in src folder");
    });
});

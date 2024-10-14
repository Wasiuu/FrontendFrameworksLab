const fs = require('fs');
const path = require('path');

// Funkcja generująca losowe numery rejestracyjne
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

// Funkcja generująca losowy rok produkcji (2000 - 2024)
const generateYear = () => {
    return Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000;
};

// Odczytaj liczbę obiektów do wygenerowania z argumentu skryptu
const count = Number(process.argv[2]);
let carBrands = [];  // Tablica przechowująca marki samochodów

// Odczytanie pliku z markami samochodów
fs.readFile(path.join(__dirname, 'car-brands.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error('Błąd podczas odczytu pliku:', err);
        return;
    }

    // Podzielenie zawartości pliku na poszczególne linie i dodanie do tablicy
    carBrands = data.split("\n").map(brand => brand.trim()).filter(brand => brand.length > 0);

    let content = "export const cars = [\n";

    for (let i = 0; i < count; i++) {
        const id = i + 1;
        const brand = carBrands[~~(Math.random() * carBrands.length)];
        const registrationNumber = generateRegistrationNumber();
        const year = generateYear();

        // Tworzenie obiektu samochodu
        content += `  {
    id: ${id},
    brand: "${brand}",
    registrationNumber: "${registrationNumber}",
    year: ${year}
  },\n`;
    }

    content += "];";

    // Zapis do pliku module-data.js
    fs.writeFile('./src/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js was generated in src folder");
    });
});

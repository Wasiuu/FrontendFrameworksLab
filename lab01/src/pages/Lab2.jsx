import React from 'react';
import { useParams } from 'react-router-dom';
import '.';

// Załóżmy, że masz tablicę osób, z której będziesz pobierać dane
const people = [
    { id: 1, name: "Jan Kowalski", university: "Informatyka Stosowana", email: "jan.kowalski@example.com" },
    { id: 2, name: "Anna Nowak", university: "Informatyka Stosowana", email: "anna.nowak@example.com" },
    // ... inne osoby
];

const Lab2 = () => {
    const { id } = useParams(); // Pobranie id z parametrów URL

    // Sprawdzenie, czy id jest dostępne
    if (!id) {
        return <p>Brak identyfikatora osoby.</p>;
    }

    // Konwersja id na liczbę
    const personId = parseInt(id, 10);

    // Wyszukanie osoby na podstawie id
    const person = people.find(p => p.id === personId);

    // Obsługa braku osoby
    if (!person) {
        return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;
    }

    // Renderowanie profilu osoby
    return (
        <div>
            <h2>Szczegóły osoby o ID: {person.id}</h2>
            <p>Imię i nazwisko: {person.name}</p>
            <p>Uczelnia: {person.university}</p>
            <p>Email: {person.email}</p>
        </div>
    );
};

export default Lab2;

import React from 'react';
import { useParams } from 'react-router-dom';


const people = [
    { id: 1, name: "Jan Kowalski", university: "Wyższa szkoła ekonomii i informatyki", email: "jan.kowalski@example.com" },
    { id: 2, name: "Anna Nowak", university: "Wyższa szkoła ekonomii i informatyki", email: "anna.nowak@example.com" },
    // ... inne osoby
];

const Lab2 = () => {
    const { id } = useParams();

    if (!id) {
        return <p>Brak identyfikatora osoby.</p>;
    }


    const personId = parseInt(id, 10);


    const person = people.find(p => p.id === personId);


    if (!person) {
        return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;
    }


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

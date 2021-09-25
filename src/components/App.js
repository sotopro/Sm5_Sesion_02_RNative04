import React from 'react';
import AnimalCard from './functional/animalcard';
import { animals } from '../data/animals';
import './App.css';

const App = () => {
    const showAdditonal = (additional) => {
        const alertInformation = Object.entries(additional)
            .map(information => `${information[0]}: ${information[1]}`)
            .join('\n');
            alert(alertInformation)   
    }
    return (
        <div className="wrapper">
            <h1>Animals</h1>
            {animals.map(animal => (
                 <AnimalCard 
                    key={animal.name}
                    name={animal.name}
                    scienticName={animal.scienticName}
                    size={animal.size}
                    diet={animal.diet}
                    additional={animal.additional}
                    showAdditional={showAdditonal}
                />
            ))}
        </div>
    )
}

export default App;
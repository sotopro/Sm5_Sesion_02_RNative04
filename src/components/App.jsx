import React from 'react';
import AutoComplete from './functional/autocomplete';

const App = () => {
    return (
        <div className="App">
            <AutoComplete suggestions={['Apples', 'Banana', 'Pinaple', 'Mango']} />
        </div>
    )
}

export default App;
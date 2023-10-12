import { useState } from 'react';
import useLocalStorage from './UseLocalStorage';

function DataMenegment2() {

    const { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } = useLocalStorage('myItems');
    const items = getFromLocalStorage() || [];
    const [inputVal, setInputVal] = useState('');


    const handleRemoveItem = (index: number) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        saveToLocalStorage(updatedItems)
    };
    
    const handleAddItem = (item: string) => {
        saveToLocalStorage([...items, item])
    };
    
    const handleClearItems = () => {
        removeFromLocalStorage();
    };

  return (
    <ul>
        {items.map((item: string, index:number) => (
        <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </li>
        ))}
        <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}/>
        <button onClick={() => handleAddItem(inputVal)}>add</button>
        <button onClick={() => handleClearItems()}>clear</button>
    </ul>
    )
}

export default DataMenegment2
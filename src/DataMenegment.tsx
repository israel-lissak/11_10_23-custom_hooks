import { useState } from 'react';
import useLocalStorage from './UseLocalStorage';

function DataMenegment() {
    
    const [item, setItem] = useState('');
    const { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage } = useLocalStorage('myItems');
  
    const handleAddItem = () => {
      if (item) {
        saveToLocalStorage([...getFromLocalStorage(), item]);
        setItem('');
      }
    };

    const handleGetData = () => {
        const data = getFromLocalStorage()
        console.log(data)
    }
    
    const handleClearData = () => {
        removeFromLocalStorage()
    }

  return (
    <div>
        <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleGetData}>get data</button>
        <button onClick={handleClearData}>clear data</button>
    </div>
    )
}

export default DataMenegment
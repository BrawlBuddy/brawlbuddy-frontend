import React, { useState, useEffect } from 'react'
import { useBrawlersContext } from '../contexts/BrawlersContext'
import InventoryPick from './InventoryPick';

const Inventory = ({ search, setSearch }) => {
    
    const inventoryBox = {
        width: '970px',
        height: '350px',
        borderRadius: '5px',
        backgroundColor: '#282828',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '10px',
        overflow: 'auto',
        padding: '10px',
    }

    const { state, dispatch } = useBrawlersContext();
    const [ inventoryDisplay, setInventoryDisplay ] = useState(state.brawlers);
    useEffect(() => {
        if (search === '') {
            setInventoryDisplay(state.brawlers);
            return;
        }
        const filteredItems = state.brawlers.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setInventoryDisplay(filteredItems);
    }, [search, state.brawlers]);

    return (
    <>
        <div className='content'>
            <div style={inventoryBox}>
                {inventoryDisplay.map(brawler => (
                    <InventoryPick imageSrc={brawler.image} borderColour='#BCBCBC' brawler={brawler} setSearch={setSearch} key={brawler.name}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Inventory
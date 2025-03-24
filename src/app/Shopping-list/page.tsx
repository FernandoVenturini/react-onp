'user client';

import { useState } from "react";

type Item = {
    id: number,
    name: string;
    quantity: number;
}

function ShoppingList() {

    const [items, setItems] = useState<Item[]>([]);
    const [currentItem, setCurrentItem] = useState<Item>({
        id: 0, 
        name: '', 
        quantity: 1
    });
    const [isEditing, setIsEditing] = useState<boolean>(false);

    function addItem() {
        let id = 1;
        if(items.length > 0) {
            const lastItem = items[items.length - 1];
            id = lastItem.id + 1;
        }

        items.push({...currentItem, id});
        setCurrentItem({id: 0, name: '', quantity: 1});
    }

    return (
        <>
            <h1>LISTA DE COMPRAS</h1>

            <input 
                value={currentItem.name}
                type="text" 
                placeholder="Digite o nome do produto" 
                onChange={(e) => setCurrentItem({...currentItem, name: e.target.value})}
            />
            <input 
                type="number" 
                min={1} 
                value={currentItem.quantity}
                onChange={(e) => setCurrentItem({...currentItem, quantity: Number(e.target.value)})}
            />

            <button onClick={() => addItem()} style={{marginLeft: 10}}>
                {isEditing &&
                    'SALVAR'    
                }

                {!isEditing &&
                    'ADICIONAR'
                }
            </button>

            <br /><br />

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} 
                        <button style={{marginLeft: 10}}>
                            EDITAR
                        </button>
                        <button style={{marginLeft: 10}}>
                            EXCLUIR
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ShoppingList;

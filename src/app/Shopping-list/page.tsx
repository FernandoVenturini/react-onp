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

    function updateStates(item:Item ) {
        setIsEditing(true);
        setCurrentItem(item);
    };

    function process() {
        if (!isEditing) {

            let id = 0;

            if (items.length > 0) {
                const lastItem = items[items.length - 1];
                id = lastItem.id + 1;
            };

            items.push({ ...currentItem, id });
            setCurrentItem({ id: 0, name: "", quantity: 1 });
        } else {
            const updatedItems = [...items];
            const index = items.findIndex((i => i.id === currentItem.id));
            updatedItems[index] = { ...currentItem };
            setItems([...updatedItems]);
            setCurrentItem({ id: 0, name: "", quantity: 1 });
            setIsEditing(false);
        }
    };

    return (
        <>
            <h1>LISTA DE COMPRAS</h1>

            <input
                value={currentItem.name}
                type="text"
                placeholder="Digite o nome do produto"
                onChange={(e) =>
                    setCurrentItem({ ...currentItem, name: e.target.value })
                }
            />
            <input
                type="number"
                min={1}
                value={currentItem.quantity}
                onChange={(e) =>
                    setCurrentItem({ ...currentItem, quantity: Number(e.target.value) })
                }
            />

            <button onClick={() => process()} style={{ marginLeft: 10 }}>
                {isEditing && "SALVAR EDICAO"}

                {!isEditing && "ADICIONAR"}
            </button>

            <br />
            <br />

            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                        <button
                            onClick={() => updateStates(item)}
                            style={{ marginLeft: 10 }}
                        >
                            EDITAR
                        </button>
                        <button style={{ marginLeft: 10 }}>EXCLUIR</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ShoppingList;

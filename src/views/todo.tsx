import { KeyboardEvent, useState } from "react"
import Counter from "../components/counter"
import Item from "../components/item"
import './todo.css'

export default function Todo() {

    const [id, setId] = useState(0)
    const [items, setItems] = useState<{ id: number, text: string }[]>([])
    const [input, setInput] = useState('')

    function addItem({ key }: KeyboardEvent<HTMLInputElement>) {
        if (key === "Enter" && input) {
            items.push({ id: id, text: input })
            setId(id + 1)
            setInput('')
        }
    }

    function removeItem(rid: number) {
        setItems(items.filter(({ id }) => id !== rid))
    }

    return <>
        <section id="todo">
            <label >
                <h2>Add new item</h2>
                <input id="input" value={input} onChange={(ev) => setInput(ev.target.value)} onKeyDown={addItem} />
            </label>
            <ul className="list">
                {items.map(item => <Item key={item.id} item={item} remove={removeItem} />)}
            </ul>
        </section>
        <section id="counters">
            <Counter initialValue={50} maxValue={500} recurse={false} />
        </section>
    </>
}

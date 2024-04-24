import { KeyboardEvent, useEffect, useRef, useState } from "react"
import Counter from "../components/counter.gen"
import Item from "../components/item"
import './todo.css'

export default function Todo() {
    const id = useRef(0)
    const [items, setItems] = useState<{ id: number, text: string }[]>([])
    const input = useRef<HTMLInputElement>(null)

    function addItem({ key }: KeyboardEvent<HTMLInputElement>) {
        if (key === "Enter" && input.current!.value) {
            setItems([...items, { id: id.current++, text: input.current!.value }])
            input.current!.value = ''
        }
    }

    function removeItem(rid: number) {
        setItems(items.filter(({ id }) => id !== rid))
    }

    useEffect(() => {
        input.current!.disabled = false
    }, [])

    // console.log("Script: Todo")
    return <>
        {/* {console.log("Render: Todo")} */}
        <section id="todo">
            <label >
                <h2>Add new item</h2>
                <input ref={input} disabled id="input" onKeyUp={addItem} />
            </label>
            <ul className="list">
                {items.map(item => <Item key={item.id} item={item} remove={removeItem} />)}
            </ul>
        </section>
        <section id="counters">
            <Counter initialValue={50} maxValue={5} recurse={false} />
        </section>
    </>
}

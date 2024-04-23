import './item.css'

export default function Item(props: { item: { id: number, text: string }, remove: (id: number) => void }) {
    // console.log("Script: Item")
    return <>
        {/* {console.log("Render: Item")} */}
        <li className="item" data-id={props.item.text}>
            <span>{props.item.text}</span>
            <button onClick={() => props.remove(props.item.id)}>x</button>
        </li>
    </>
}

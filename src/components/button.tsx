import "./button.css"

export default function Button(props: { disabled: boolean, fn: Function, sign: string }) {
    // console.count(`Script: "${props.sign}" Button`)
    return <>
        {/* {console.count(`Render: "${props.sign}" Button`)} */}
        <button className="button" disabled={props.disabled} onClick={() => props.fn()} aria-label={props.sign}>
            {props.sign}
        </button>
    </>
}

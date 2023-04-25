export default function Button(props:any) {
    return (
        <button className="relative h-fit p-3 pl-32 pr-32 rounded-3xl bg-sky-500 text-center font-bold text-white" type={props.type}>{props.name}</button>
    )
}
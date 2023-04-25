
export default function InputForm(props:any)
{
    return (
        <div>
            <input type={props.type} 
            className="h-fit mb-6 w-full pl-5 py-3 
            border-none rounded-2xl bg-slate-100 
            text-left text-black" placeholder={props.placeholder}></input>    
        </div>
    )
}
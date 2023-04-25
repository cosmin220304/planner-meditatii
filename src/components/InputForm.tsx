
export default function InputForm(props:any)
{
    return (
        <form className="flex mb-6 justify-center">
            <input type={props.type} 
            className="h-fit p-3 pl-8 pr-48 
            border-none rounded-2xl bg-slate-100 
            text-left text-black" placeholder={props.placeholder}></input>    
        </form>
    )
}
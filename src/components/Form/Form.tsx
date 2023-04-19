import Button from "../Button"
import logo from "G:/MeditatiiApp/planner-meditatii/src/assets/svg/logo.svg"
import InputForm from "../InputForm"

export default function Form()
{
    return (    
    <section className="relative w-full h-screen p-32 justify-items-center justify-self-center">
                <div className="flex w-full h-fit justify-center mb-10" >
                    <a href="/home"><img className="relative w-20 h-fit" src={logo}></img></a>
                </div>
                <InputForm type="text" placeholder="First Name"></InputForm>
                <InputForm type="text" placeholder="Last Name"></InputForm>
                <InputForm type="email" placeholder="Email"></InputForm>
                <InputForm type="password" placeholder="Password"></InputForm>
            <div className="flex relative justify-center">
                <Button name="Become proffesor" type="submit"></Button>
            </div>
    </section>
    )

}
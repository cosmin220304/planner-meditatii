import Button from "../Button"
import logo from "G:/MeditatiiApp/planner-meditatii/src/assets/svg/logo.svg"
import InputForm from "../InputForm"
import { SocialIcon } from "react-social-icons"
import { useGlobalState } from "../../features/ChangeUserType"

export default function Form()
{
    const [type] = useGlobalState("type");
    const renderText = type ? "Become professor" : "Become student"
    return (          
        <section className="w-fit lg:h-screen h-fit lg:pb-0 pb-16 pt-16 m-auto"> {/**Form Container */}
            {/*Logo*/}
            <div className="flex w-full h-fit justify-center mb-10" >
                <a href="/home"><img className="relative w-20 h-fit" src={logo}></img></a>
            </div>
            {/*Form fields*/}
            <InputForm type="text" placeholder="First Name"></InputForm>
            <InputForm type="text" placeholder="Last Name"></InputForm>
            <InputForm type="email" placeholder="Email"></InputForm>
            <InputForm type="password" placeholder="Password"></InputForm>
            {/*Button */}
            <div className="flex relative justify-center">
                <Button name={renderText} type="submit"></Button>
            </div>
            {/*The line between the modalities of create an account */}
            <div className="flex mt-5 m-auto justify-center">
                <hr className="w-40 m-auto border-gray-300"></hr>
                <div className="p-2 text-center text-gray-300">or</div>
                <hr className="w-40 m-auto border-gray-300 "></hr>
            </div>
            {/*Social modality of create an account */}
            <div className="flex h-fit w-full mt-5 justify-center">
                <SocialIcon className="mx-2" url="https://www.google.com" bgColor="#0EA5E9"></SocialIcon>
                <SocialIcon className="mx-2" url="https://www.facebook.com" bgColor="#0EA5E9"></SocialIcon>
            </div>
        </section>
    )
}
import { useState } from "react";
import studentAvatar from "G:/MeditatiiApp/planner-meditatii/src/assets/svg/StudentAvatar.svg"
import professorAvatar from "G:/MeditatiiApp/planner-meditatii/src/assets/svg/ProfessorAvatar.svg"
import { createGlobalState } from "react-hooks-global-state";

const initialState = {type:true};
export const {useGlobalState} = createGlobalState(initialState)

const ImgAnimation = () => {
    const [professor, setProfessorStatus] = useState(true);
    const [student, setStudentStatus] = useState(false);
    //const [type,setType] = useState("Become professor");
    
    const [type, setType] = useGlobalState('type');

    const changeType = () => {
        setType(type => !type);
    }

    const renderText = type ? "Become professor" : "Become student"

    return (
        <section>
            {/*Type of the account*/}
            <div className="relative w-full h-fit lg:mt-20 lg:mb-20 mt-10 m-auto justify-center">
                <h1 className="text-center text-white font-bold text-2xl">{renderText}</h1>
            </div>
            {/*Container section for the images*/}
            <div className="h-full w-full m-auto">
                {/*Animation section*/}
                <div className="flex w-fit h-fit p-10 m-auto">
                    <img
                        className={
                            professor ?
                            "animate-zoom-in aboslute z-10 lg:-mr-32 lg:w-80 lg:h-80 -mr-20 w-52 h-52 drop-shadow-xl" 
                            :"animate-zoom-out z-0 scale-50 lg:w-64 lg:h-64 w-44 h-44 drop-shadow-xl"
                        }
                            onMouseDown={()=>{
                            setProfessorStatus(true)
                            setStudentStatus(false)
                            changeType()
                        }
                        }
                        src={professorAvatar}/>
                    <img
                        className={
                            student ?
                            "animate-zoom-in aboslute z-10 lg:-ml-32 lg:w-80 lg:h-80 -ml-20 w-52 h-52 drop-shadow-xl" 
                            :"animate-zoom-out z-0 scale-50 lg:w-64 lg:h-64 w-44 h-44 drop-shadow-xl"
                        }
                        onMouseDown={()=>{
                            setStudentStatus(true)
                            setProfessorStatus(false)
                            changeType()
                        }}
                        src={studentAvatar}/>
                </div>
            </div>
    </section>
    )
}

export default function ChangeUserType () 
{
    return (
        <section className="bg-sky-500">
            <ImgAnimation/>
        </section>
    )
}
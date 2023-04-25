import { useState } from "react"
import Form from "../../components/Form/Form"
import ChangeAccount from "../../features/ChangeUserType"
export default function SignUp()
{
    return (
            <section className="grid lg:grid-cols-2 lg:grid-rows-1 h-full">
                <ChangeAccount></ChangeAccount>       
                <Form name="Become professor"></Form>
            </section>
    )
}
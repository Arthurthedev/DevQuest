import { useFormInput } from "../../../hooks/useFormInput"

export default function Form() {
   const firstNameProps = useFormInput("Arthur")
   const lastNameProps = useFormInput("Thurler")

    return (
        <>
            <label>
                First Name:
                <input {...firstNameProps}  />
            </label>
            <label>
                Last Name:
                <input {...lastNameProps} />
            </label>
            <p>Bom dia! {firstNameProps.value} {lastNameProps.value}.</p>
        </>
    )
}
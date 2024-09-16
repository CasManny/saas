"use client"
import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"

const SubmitProjectButton = () => {
    const { pending } = useFormStatus()
    return (
        <Button type="submit">{ pending ? "Creating..." : "Create Project"}</Button>
  )
}

export default SubmitProjectButton
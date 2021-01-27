import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Must be valid email").required("Email is required"),
    password: yup.string().required("Password is required")
})


import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema= yup.object({
  email:yup.string().required().min(5,"Need a bigger email😥").email(),
  password:yup.string().min(8,"Need a bigger password😥").required().max(12,"Too big password☠️")
});
export function BasicForm() {
  const formik=useFormik({
    initialValues: { email:"anusha", password:"123"},
    validationSchema:formValidationSchema,
    onSubmit:(values)=>{
      console.log("onSubmit",values);
    }
  }); 
  return (
    <form onSubmit={formik.handleSubmit}>
       <h1>Basic From</h1>
       <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        />
        {formik.errors.email}
    {/* {touched.email && errors.email ? errors.email:""} */}
    <input
        type="password"
        placeholder="Enter password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        />
        {formik.errors.password}
        <button type="submit">Submit</button>
        {JSON.stringify(formik.values)}
    </form>
    );
}

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm=()=>{
    return(
        <Formik>
            <Form>
            <label htmlFor="username">
                <Field
                  type="text"
                  name="username"
                  placeholder="Name"
                  autoComplete="off"
               
                />
                <ErrorMessage
                  component="div"
                  name="username"
                 
                />
                
              </label>
              <label htmlFor="email">
              <Field
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              </label>
              <label htmlFor="password">
              <Field
                type='password'
                name="password"
                placeholder="Password"
                autoComplete="off"
                
              />
              </label>
            </Form>
        </Formik>
    )
}

export default RegisterForm;
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Grid,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { boolean, object, string } from "yup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/store";
import { signIn } from "@/store/slices/authSlice";
import { useState } from "react";
import CustomModal from "@/components/CustomeModal";
import { ViewSidebarOutlined, Visibility, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";


const SignIn = () => {
  const [showPassword,setShowPassword] = useState<boolean>(false);
  const [openModal,setOpenModal] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  interface loginFrom {
    username: string;
    password: string;
  }

  const initialValues: loginFrom = {
    username: "",
    password: "",
  };
  const formValidation = object({
    username: string()
      .required("Please enter your email")
      .email("Invalid email"),
    password: string()
      .required("Please enter your password")
      .min(6, "Password shold be minimum 7 characters"),
  });

  const handleSubmitForm = (
    values: loginFrom,
    formikHelper: FormikHelpers<loginFrom>
  ) => {
    console.log(values)
    formikHelper.resetForm()
    dispatch(signIn(values)).then((data)=>{
      console.log(data);
      if(data.meta.requestStatus === "rejected"){
        setOpenModal(true)
      }
      else{
        navigate('/dashboard',{replace:true})
      }
    })
    //ยิง API 
    // singIn(values)
    // .then((respone) => {
    //   const {success} = respone
    //   if(success) navigate('/dashboard',{replace:true})
    // })
    // .catch((err) => console.log(err))
  };
  return (
    <Box className="mt-8 mx-8 flex flex-col items-center">
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={handleSubmitForm}
      >
        {({errors, isValid, touched,dirty}) => (
          <Form>
            <Box sx={{ mt: 1 }}>
              <Field
                margin="normal"
                required
                fullWidth
                as={TextField}
                id="username"
                label="Email Address"
                name="username"
                autoComplete="email"
                autoFocus
                error={Boolean(errors.username) && Boolean(touched.username)}
                helperText={Boolean(touched.username) && errors.username}
              />
              <Field
                margin="normal"
                required
                fullWidth
                as={TextField}
                name="password"
                label="Password"
                type={showPassword ? 'text' : "password"}
                id="password"
                autoComplete="current-password"
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
                InputProps={{
                  endAdornment:(
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}
                      edge='end'
                      >
                        {showPassword ? (
                          <VisibilityOutlined/>
                        ):(
                          <VisibilityOffOutlined />
                        )}
                        
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled ={!dirty || !isValid}
              >
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <CustomModal title="Sign in feature" description="Email and password invalid" openModal={openModal} setOpenModal={setOpenModal}/>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignIn;

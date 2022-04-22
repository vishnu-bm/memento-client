import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './styles'
import { GoogleLogin } from 'react-google-login'
import Icon from './icon'
import LockOutlinedIcon from '@material-ui/icons/LocalActivityOutlined'
import Input from '../../component/atoms/Input'
import { useDispatch } from 'react-redux'
import { signIn, signUp } from '../../redux/actions/auth'

const initialState = {
    firstName: '',
    lastName: '',
    email:'',
    password:'',
    confirmPassword: '',
}

const Auth = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp) {
            dispatch(signUp(formData, navigate));
        } else {

            dispatch(signIn(formData, navigate));
        }
    }
    const switchMode = () => {
        setIsSignUp((prev) => !prev)
        handleShowPassword(false)
    }
    const googleSuccess = async(res) => {
        const result = res?.profileObj
        const token  = res?.tokenId
        try {
            dispatch({ type: 'AUTH', data: {result, token} })
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    const googleFailure = () => {
        console.log("google sign in was unsuccessful")
    }
    const handleShowPassword = () => setShowPassword((prev) => !prev)
    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3} >
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography varient="h5" >{isSignUp ? "Sign up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2} >
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="repeate Password" handleChange={handleChange} />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}  >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin  
                        clientId="491041488559-drrv69597j8higttrmbhu5utt8rmcj1n.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained" >
                                Google SignIn
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? "Already have an account" : "Dont have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
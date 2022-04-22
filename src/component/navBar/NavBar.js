import React, {useState, useEffect} from 'react'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const NavBar = () => {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('profile')))
    console.log(user)

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(sessionStorage.getItem('profile')))
    },[location])

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        navigation("/auth")
        setUser(null)
    }


    return (
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <div className={classes.brandContainer} >
                <Typography container={Link} to="/" className={classes.heading} variant="h2" align="center" > Memories </Typography>
                <img src={"/assets/images/memories.png"} alt="memories" height={60} />
            </div>
            <Toolbar className={classes.toolbar} >
                {user ? (
                    <div className={classes.profile} >
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}  >{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} varient="h6" >{user.result.name}</Typography>
                        <Button className={classes.logout} variant="contained" color="secondary" onClick={logout} >Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary" >SignIn</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
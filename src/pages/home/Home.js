import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Posts from '../../component/Posts/Posts'
import Form from '../../component/Form/Form'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'
import useStyles from './styles'
const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justifyContent="space-between" align="stretch" spacing={3}  >
                    <Grid item xs={12} sm={7} >
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
import { Suspense, useState, lazy } from 'react';
import { useHistory  } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Scrollbars } from 'react-custom-scrollbars';
import PageContent from './PageContent';
const Footer = lazy(() => import('./Footer'));


const theme = createMuiTheme({
    palette: {
        primary: { main: '#242424' },
        secondary: {
            main: '#004d40',
        },
    },
})

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    slogan: {
        color: 'white',
        textAlign: 'center',
    },
    sloganTitle: {
        fontSize: '12em',
        margin: '35px',
        textShadow: '2px 2px 36px #242424',
    },
    sloganSubtitle: {
        fontSize: '40px',
        margin: '35px',
        textShadow: '2px 2px 36px #242424',
    }
}));

const LandingPage = () => {
    const [scrollbar, setScrollbar] = useState(null)
    const [transparent, setTransparent] = useState(true)
    const [scrolled, setScrolled] = useState(false)

    const classes = useStyles();
    const history = useHistory();

    return (
        <ThemeProvider theme={theme}>
            <div>{transparent} </div>
            <Scrollbars
                ref={(e) => {
                    if (e !== null) {
                        setScrollbar(e)
                    }
                }}
                onScroll={(e) => {
                    setTransparent(scrollbar.viewScrollTop < 150)
                    setScrolled(true)
                }}
                autoHide
                style={{ width: '100%', height: '100vh' }}
            >
                <div className={classes.root}>
                    <AppBar
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: transparent ? 'transparent' : undefined,
                            boxShadow: transparent ? 'none' : undefined,
                            transition: 'background 1s',
                        }}
                        position="static"
                    >

                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <RestaurantMenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                {!transparent && (<p>YOURFOOD</p>)}
                            </Typography>
                            <Button onClick={() => history.push('/login')} color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>

                </div>
                <div style={{ width: '100%', height: '100%' }}>
                    <div
                        style={{
                            height: '1000px',
                            width: '100%',
                            backgroundImage: 'url(tabel34.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >

                        <Grid container className={classes.root} spacing={2} justify="center"
                            alignItems="center">
                            <Grid item className={classes.slogan} style={{
                                visibility: transparent ? 'visible' : 'hidden',
                                opacity: transparent ? '1' : '0',
                                transition: 'visibility 0.5s, opacity 1s linear',
                            }}>
                                <h1 className={classes.sloganTitle}>
                                    It's your food
                              </h1>
                                <h2 className={classes.sloganSubtitle}>
                                    Hier findest du nachhaltige und regionale Lebensmittel
                                  </h2>

                                <Grid container direction="row"
                                    justify="center"
                                    alignItems="center"
                                    spacing={10}>
                                    <Grid key="1" item>
                                        <Button onClick={() => history.push('/login')} variant="contained" color="secondary">Profil anlegen</Button>
                                    </Grid>
                                    <Grid key="2" item>
                                        <Button onClick={() => history.push('/partner')} variant="contained" color="secondary"> Partner Karte </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>



                    <div style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: -80,
                    }}
                    >
                        <Paper
                            elevation={3}
                            style={{
                                width: '100%',
                                maxWidth: '90%',
                                borderRadius: 15,
                                minHeight: 400,
                            }}
                        >
                            <PageContent scrolled={scrolled} />
                        </Paper>
                    </div>
                    <div style={{ height: 200 }}></div>
                    {scrolled && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Footer />
                        </Suspense>
                    )}
                </div>
            </Scrollbars>
        </ThemeProvider >


    )
}

export default LandingPage

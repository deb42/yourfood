import React, { lazy, Suspense } from 'react';
import { useHistory  } from 'react-router-dom';
import { Place, Nature, Search } from '@material-ui/icons';
import { Typography, Card, CardContent, Button, Grid } from '@material-ui/core'
const Map = lazy(() => import('./Map'))

const PackageCard = ({ title, description, icons }) => {
  return (
    <Card elevation={4} style={{ margin: 18, maxWidth: 350, textAlign: 'center' }}>
      <CardContent>
        {icons}
        <Typography style={{ margin: '50 50 50 50' }} gutterBottom variant="h4" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const PageContent = ({ scrolled }) => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div style={{ height: 20 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Das wollen wir Dir bieten:
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Mit den höchsten Ansprüchen an Lebensmittel und ihre Produktion.
      </Typography>
      <div style={{ height: 30 }} />

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <PackageCard
          title={'Regionalität'}
          description={
            'Unser Ziel ist es, Dir einen Überlick über Lebensmittelbetriebe aus deiner Region zu geben. Für starke Betriebe in deiner Heimat und eine verwurzelte Esskultur.'
          }
          icons={
            <Place style={{ fontSize: 50 }} />
          }
        />
        <PackageCard
          title={'Transparenz'}
          description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
          }
          icons={
            <Search style={{ fontSize: 50 }} />
          }
        />
        <PackageCard
          title={'Nachhaltigkeit'}
          description={'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.'}
          icons={
            <Nature style={{ fontSize: 50 }} />
          }
        />
      </div>
      <div style={{ margin: 30 }}>
        <Grid container direction="row" justify="center">
          <Button onClick={() => history.push('/login')} variant="contained" color="secondary">Profil anlegen</Button>
        </Grid>
      </div>
      <div style={{ height: 30 }} />
      <div style={{
        backgroundColor: '#2D2D2D',
        backgroundImage: 'radial-gradient( #4F4F4F,#242424)',
      }}
      >
        <div style={{ height: 30 }} />
        <Typography
          variant="h3"
          style={{ margin: 16, textAlign: 'center', color: 'white' }}
        >
          Alles auf einen Blick
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          Unsere Karte mit regionalen Bauern, Prouzenten, Gastronomen und Händlern.
        </Typography>
        <div style={{ marginTop: 30, height: 450, width: '100%' }}>
          {scrolled && (
            <Suspense fallback={<div>Loading...</div>}>
              <Map />
            </Suspense>
          )}

        </div>
        <div style={{ marginTop: 30 }}>
          <Grid container direction="row" justify="center">
            <Button onClick={() => history.push('/partner')} variant="contained" color="secondary">Zur Karte</Button>
          </Grid>
        </div>
        <div style={{ height: 30 }} />
      </div>

      <div style={{ height: 30 }} />
      <Typography
        variant="h3"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Partner werden und Kunden erreichen
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Lass Dich finden und stelle Deine Produkte in den Fokus
      </Typography>
      <div style={{ height: 30 }} />
      <div style={{ marginTop: 30 }}>
        <Grid container direction="row" justify="center">
          <Button onClick={() => history.push('/login')} variant="contained" color="secondary">Partner werden</Button>
        </Grid>
      </div>
      <div style={{ height: 50 }} />
    </React.Fragment>
  )
}

export default PageContent

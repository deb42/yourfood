import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "../../firebase"
import MapContainer from './MapContainer';
import PartnerTable from './PartnerTable';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  partnerTable: {
    width: '300px',
    float: 'left',
  },
  content: {
    flexGrow: 1
  },
}));

const PartnerOverview = () => {
  const classes = useStyles();

  const [partner, setPartner] = useState([])
  const [selectedPartnerId, setSelectedPartnerId] = useState("");
  const [hoveredPartnerId, setHoveredPartnerId] = useState("");
  const [bounds, setBounds] = useState([52.19007079993523, 7.28439091796875, 51.72504331005726, 7.99300908203125, 51.72504331005726, 7.28439091796875, 52.19007079993523, 7.99300908203125])

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("partner").get()
      setPartner(data.docs.map(doc => doc.data()))
    }

    fetchData()
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.partnerTable}>
        <PartnerTable
          partner={partner}
          hoveredPartner={hoveredPartnerId}
          selectedPartner={selectedPartnerId}
          onRowHover={setHoveredPartnerId}
          onRowSelect={setSelectedPartnerId} 
          bounds={bounds}>
        </PartnerTable>
      </div>
      <main className={classes.content}>
        <MapContainer
          partner={partner}
          hoveredPartner={hoveredPartnerId}
          selectedPartner={selectedPartnerId}
          onMarkerHover={setHoveredPartnerId}
          onMarkerSelect={setSelectedPartnerId}
          onBoundsChange={setBounds}
        ></MapContainer>
      </main>
    </div>
  );
}

export default PartnerOverview

import { DataLocations } from "../Data";
import LocationCard from "./Cards/LocationCard";
import EditLocation from "./Cards/EditLocation";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import AddLocationForm from "./Cards/AddLocationForm";
import AddLocationCard from "./Cards/AddLocationCard";
const Location = (props) => {
  const [whatLocation, setWhatLocation] = useState("show");
  const [allLocations, setAllLocations] = useState(DataLocations);
  var locationsToShow = [];
  allLocations.forEach((location) => {
    locationsToShow.push(location);
  });

  if (whatLocation === "show") {
    return (
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {locationsToShow.map((location) => {
          return (
            <Grid item xs={6}>
              <LocationCard
                location={location}
                setWhatLocation={setWhatLocation}
                allLocations={allLocations}
                setAllLocations={setAllLocations}
              />
            </Grid>
          );
        })}
        <AddLocationCard
          allLocations={allLocations}
          setLocations={setAllLocations}
          setWhatLocation={setWhatLocation}
        />
      </Grid>
    );
  } else if (whatLocation === "add") {
    return (
      <AddLocationForm
        allLocations={allLocations}
        setLocations={setAllLocations}
        setWhatSlot={setWhatLocation}
      />
    );
  } else {
    return (
      <EditLocation
        allLocations={allLocations}
        setLocations={setAllLocations}
        setWhatSlot={setWhatLocation}
        // slotsToShow={props.slotsToShow}
        // setSlotsToShow={props.setSlotsToShow}
      />
    );
  }
};

export default Location;

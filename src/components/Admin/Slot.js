import { DataLocations } from "../Data";
import { useState, useEffect } from "react";
import SlotCard from "./Cards/SlotCard";
import { Grid } from "@material-ui/core";
import EditSlot from "./Cards/EditSlot";

const Slot = (props) => {
  const [editSlot, setEditSlot] = useState(false);
  const [Locations, setLocations] = useState(DataLocations);

  Locations.forEach((location) => {
    location.slots.forEach((slot) => {
      props.slotsToShow.push({
        location,
        slot,
      });
    });
  });

  if (editSlot === false) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {props.slotsToShow.map((slot) => {
          return (
            <Grid item xs={6}>
              <SlotCard
                slot={slot}
                setEditSlot={setEditSlot}
                locations={Locations}
                setLocations={setLocations}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    return (
      <EditSlot
        locations={Locations}
        setLocations={setLocations}
        setEditSlot={setEditSlot}
      />
    );
  }
};

export default Slot;

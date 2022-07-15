import { DataLocations } from "../Data";
import { useState, useEffect } from "react";
import SlotCard from "./Cards/SlotCard";
import { Grid } from "@material-ui/core";
import EditSlot from "./Cards/EditSlot";
import AddSlot from "./Cards/AddSlot";
import AddSlotForm from "./Cards/AddSlotForm";
const Slot = (props) => {
  const [whatSlot, setWhatSlot] = useState("show");
  const [locations, setLocations] = useState(DataLocations);
  var slotsToShow = [];
  locations.forEach((location) => {
    location.slots.forEach((slot) => {
      slotsToShow.push({
        location,
        slot,
      });
      // props.setSlotsToShow([...props.slotsToShow, { location, slot }]);
    });
  });

  if (whatSlot === "show") {
    return (
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {slotsToShow.map((slot) => {
          return (
            <Grid item xs={6}>
              <SlotCard
                slot={slot}
                setWhatSlot={setWhatSlot}
                locations={locations}
                setLocations={setLocations}
              />
            </Grid>
          );
        })}
        <Grid item xs={6}>
          <AddSlot setWhatSlot={setWhatSlot} />
        </Grid>
      </Grid>
    );
  } else if (whatSlot === "add") {
    return (
      <AddSlotForm
        locations={locations}
        setLocations={setLocations}
        setWhatSlot={setWhatSlot}
      />
    );
  } else {
    return (
      <EditSlot
        locations={locations}
        setLocations={setLocations}
        setWhatSlot={setWhatSlot}
        // slotsToShow={props.slotsToShow}
        // setSlotsToShow={props.setSlotsToShow}
      />
    );
  }
};

export default Slot;

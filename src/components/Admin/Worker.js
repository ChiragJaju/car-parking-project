import { DataLocations, Workers, User } from "../Data";
import { useState, useEffect } from "react";
import SlotCard from "./Cards/SlotCard";
import { Grid } from "@material-ui/core";
import WorkerCard from "./Cards/WorkerCard";
import AddWorker from "./Cards/AddWorker";
import AddWorkerForm from "./Cards/AddWorkerForm";
import AddSlotForm from "./Cards/AddSlotForm";
import EditWorker from "./Cards/EditWorker";
const Worker = (props) => {
  const [whatWorker, setWhatWorker] = useState("show");
  const [locations, setLocations] = useState(DataLocations);
  var slotsToShow = [];
  Workers.map((x) => {
    slotsToShow.push(x);
  });

  if (whatWorker === "show") {
    return (
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {slotsToShow.map((worker) => {
          return (
            <Grid item xs={6}>
              <WorkerCard
                worker={worker}
                setWhatWorker={setWhatWorker}
                locations={locations}
                setLocations={setLocations}
              />
            </Grid>
          );
        })}
        <Grid item xs={6}>
          <AddWorker setWhatWorker={setWhatWorker} />
        </Grid>
      </Grid>
    );
  } else if (whatWorker === "add") {
    return (
      <AddWorkerForm
        locations={locations}
        setLocations={setLocations}
        setWhatWorker={setWhatWorker}
      />
    );
  } else {
    return (
      <EditWorker
        locations={locations}
        setLocations={setLocations}
        setWhatWorker={setWhatWorker}
        // slotsToShow={props.slotsToShow}
        // setSlotsToShow={props.setSlotsToShow}
      />
    );
  }
};

export default Worker;

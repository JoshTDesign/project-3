import React from "react";
import MultiContainer from "../../components/MultiContainer";
import TripDetailed from "../../components/TripDetailed";

export default function Trip() {
  return (
    <div>
      <MultiContainer>
        <TripDetailed />
      </MultiContainer>
    </div>
  );
}

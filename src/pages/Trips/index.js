import React from 'react'
import DashNavBtn from '../../components/DashNavBtn';
import MultiContainer from '../../components/MultiContainer';
import TripDetailed from "../../components/TripDetailed";


// TODO: wtf is going on here...?????????
// reference index.js in TripDetailedContainer....

export default function Trip() {
    return (
        <div>
            <MultiContainer>
                <TripDetailed />
            </MultiContainer>
        </div>
    )
}


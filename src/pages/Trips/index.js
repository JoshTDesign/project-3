import React from 'react'
import DashNavBtn from '../../components/DashNavBtn';
import MultiContainer from '../../components/MultiContainer';
import TripDetailed from "../../components/TripDetailed";

export default function Agenda() {
    return (
        <div>
            <MultiContainer>
                <TripDetailed />
            </MultiContainer>
        </div>
    )
}

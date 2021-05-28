import React from 'react';
import DiscoverContainer from "../../components/DiscoverContainer";
import DiscTodo from "../../components/DiscTodo";
import DiscFood from "../../components/DiscFood";

export default function Discover() {
    return (
        <div>
            <DiscoverContainer>
                <DiscTodo />
                <DiscFood />
            </DiscoverContainer>
        </div>
    )
}

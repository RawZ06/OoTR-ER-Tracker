import React from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { AreaName, Entrance, getArea, getAreas } from "../services/entrance";
import { EntranceComponent } from "./Entrance";
import { AreaComponent } from "./Area";

export function TrackerComponent() {

    const area = getAreas();
    
    return <div>
        {Object.entries(area).map(([name, entrances]) => <div>
            <AreaComponent name={name as AreaName}></AreaComponent>
            </div>)}
    </div>
}
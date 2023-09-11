import React from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { AreaName, getArea } from "../services/entrance";
import { EntranceComponent } from "./Entrance";

export function AreaComponent({name} : {name: AreaName}) {

    const area = getArea(name);
    
    return <Accordion activeIndex={0}>
        <AccordionTab header={area.area}>
            {Object.entries(area.entrances).map(([name]) => <EntranceComponent name={name}></EntranceComponent>)}
        </AccordionTab>
    </Accordion>
}
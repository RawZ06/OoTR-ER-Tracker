import React from "react";
import { getEntrances } from "../services/entrance";
import { Dropdown } from 'primereact/dropdown';

export function EntranceComponent({name} : {name: string}) {
    const [value, setValue] = React.useState(null);
    const entrances = getEntrances();
    const options = entrances.map((el) => ({...el, entrances: Object.keys(el.entrances).map(e => e.split('->')[1])}));
    return <div>
        {name.split('->')[1]} :
        <Dropdown showClear value={value} onChange={(e) => setValue(e.value)} options={options} optionGroupLabel="area" optionGroupChildren="entrances"
            placeholder="Not Checked" className="w-full md:w-14rem" />
    </div>
}

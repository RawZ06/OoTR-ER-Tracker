import React from 'react';
import { Button } from 'primereact/button';
import { TrackerComponent } from './components/Tracker';

export default function App() {
    return (
        <div>
            <div className="underline">Hello</div>
            <TrackerComponent></TrackerComponent>
        </div>
    );
}

import {useState} from "react";
import { action } from 'storybook/actions';
import {OnOff} from "./OnOff";


export default {
    title: "OnOff stories",
    component: OnOff,
}

const callback = action('on or off clicked');

export const OnMode = () => <OnOff state={true} onChange={callback} />;
export const OffMode = () => <OnOff state={false} onChange={callback} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff state={value} onChange={setValue}/>;
}
// import type {Meta, StoryObj} from '@storybook/react-vite';
import Accordion from './Accordion';
import {useState} from "react";
import { action } from 'storybook/actions';


export default {
    component: Accordion,
}

// export default meta

// type Story = StoryObj<typeof Accordion>

// export const FirstStory: Story = {
//     args: {
//         titleValue: 'Hello',
//         collapsed: true,
//         // onChange: ()=> {}
//     }
// }

const onChangeHandler = action('onChange')


export const OpenedAccordion = () => {
    return (
        <Accordion
            titleValue={'Opened accordion'}
            collapsed={true}
            onChange={onChangeHandler}/>
    )
}

export const CollapsedAccordion = () => {
    return (
        <Accordion
            titleValue={'Collapsed accordion'}
            collapsed={false} onChange={()=>{}}/>
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <Accordion
            titleValue={'Collapsed accordion'}
            collapsed={collapsed}
            onChange={() => {setCollapsed(!collapsed)}}/>
    )
}
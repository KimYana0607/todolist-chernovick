import {UnControlledAccordion} from './UnControlledAccordion';
// import { action } from 'storybook/actions';


export default {
    title: 'UncontrolledAccordion',
    component: UnControlledAccordion,
}

// const callback = action('onChange')

export const ModeChanging = () => {
    return <UnControlledAccordion titleValue={'Users'}/>;
}

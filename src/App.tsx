import {useState} from 'react';
// // import {FullInput} from "./fullInput/FullInput.tsx";
// import {Input} from "./fullInput/Input.tsx";
// import {Button} from "./fullInput/Button.tsx";
// import OnOff from "./onOff/OnOff.tsx";
// import {UnControlledAccordion} from "./accordion/UnControlledAccordion";
// import {UnControlledRating} from "./rating/UnControlledRating";
// import {Rating, RatingValueType} from './rating/Rating'
import Accordion from "./accordion/Accordion";
import UncontrolledOnOff from "./onOff/UncontrolledOnOff.tsx";

const App = () => {
    // let [ratingValue, setRatingValue] = useState<RatingValueType>(4)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    // const [message, setMessage] = useState([
    //         {message: 'message1'},
    //         {message: 'message2'},
    //         {message: 'message3'},
    //         {message: 'message4'},
    //         {message: 'message5'}
    //     ]
    // )
    //
    // const [title, setTitle] = useState<string>('');
    //
    //
    // const addMessage = (title: string)=> {
    //     let newMessage = {message: title}
    //     setMessage([newMessage, ...message])
    // }
    //
    //
    // const callBackButtonHandler = () => {
    //     addMessage(title)
    //     setTitle('')
    // }

    // let [on, setOn] = useState(false)
    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className={"App"}>
            <Accordion titleValue={'menu'} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledAccordion titleValue={'Menu'}/>*/}
            {/*<UnControlledAccordion titleValue={'Users'}/>*/}
            {/*<OnOff state={on} onChange={setOn}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<Input title = {title} setTitle={setTitle}/>*/}
            {/*<Button name={'+'}*/}
            {/*        callBack={callBackButtonHandler}*/}
            {/*/>*/}
            {/*{message.map((el, index) => {*/}
            {/*    return (*/}
            {/*        <div key={index}>{el.message}</div>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    );
};

export default App;

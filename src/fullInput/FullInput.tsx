import {useState} from "react";

type fullInputPropsType = {
    addMessage: (title:string) => void,
}

export const FullInput = (props: fullInputPropsType) => {

    const [title, setTitle] = useState<string>('');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        props.addMessage(title);
        setTitle('');
    }

    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

type ButtonPropsType = {
    name: string
    onClick?: () => void;
    callBack?: () => void;
    title: string;
    setTitle?: (title: string) => void;
    addMessage?: () => void;
}


export const Button = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
            <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};


type ButtonType = {
    name: string,
    callBack: ()=> void
}
export const ButtonN = (props:ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

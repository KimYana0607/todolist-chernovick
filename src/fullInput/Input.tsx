
type propsInputType = {
    title: string,
    setTitle: (title:string)=> void,
}
export const Input = (props:propsInputType) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value);
    }

    return (
        <input value={props.title} onChange={onChangeHandler}/>);
};


type MoneyType = {
    banknots: string
    value: number
    number: string
}

type NewComponentProps = {
    money: MoneyType[]
}



export const NewComponent = (props: NewComponentProps) => {
    return (
        <ul>
            {props.money.map((m, index) => (
                <li key={index}>
                    <span>{m.banknots} </span>
                    <span>{m.value} </span>
                    <span>{m.number}</span>
                </li>
            ))}
        </ul>
    )
}
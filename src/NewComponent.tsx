type NewComponentType = {
    topCars: TopCarsType[]
}

type TopCarsType = {
    id: number,
    manufacturer: string,
    model: string
}

// const TopCars = [
//     {id: 1, manufacturer: 'BMW', model: 'm5cs'},
//     {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
//     {id: 3, manufacturer: 'Audi', model: 'rs6'},
// ]

{/*<NewComponent topCars={TopCars}/>*/}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.topCars.map((objectFromCarArray) => {
                return (
                    <li key={objectFromCarArray.id}>
                        <span>{objectFromCarArray.manufacturer}</span>
                        <span>model: {objectFromCarArray.model}</span>
                    </li>
                )
            })}
        </ul>
    );
};



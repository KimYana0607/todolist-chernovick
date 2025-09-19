type LessonType = {
    title: string;
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: 'Nezavisimosti street'
        }
    }
}
    let props: ManType;

    beforeEach(() =>
{
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nezavisimosti street',
            }
        }
    }
}
)

test('', () => {
    // const age = props.age;
    // const lessons = props.age;
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons).toBe(2);
    expect(title).toBe('Nezavisimosti street');

})
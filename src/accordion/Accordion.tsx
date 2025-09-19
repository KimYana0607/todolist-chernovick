// export type AccordionCollapsedType = {
    // onClick: () => void
// }

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}


function Accordion (props: AccordionPropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange} />
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <AccordionTitle title={props.titleValue} onChange={props.onChange} />
        )
    }
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}

export default Accordion

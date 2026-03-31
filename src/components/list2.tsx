type List2Props = {
    bulletOne: string,
    bulletTwo: string,
    bulletThree: string,
    bulletFour: string,
    bulletFive: string
}

export function List2WithProps(props: List2Props) {
    return (
        <div>
            Figurines I recommend:
            <ul className="li">
                <li>{props.bulletOne}</li>
                <li>{props.bulletTwo}</li>
                <li>{props.bulletThree}</li>
                <li>{props.bulletFour}</li>
                <li>{props.bulletFive}</li>
            </ul>
        </div>
    )
}

export function List2Demo(){
    return (
        <List2WithProps bulletOne={"Smiski Birthday"} bulletTwo={"Hirono x Le Petit Prince"} bulletThree={"Nyota We Are All Stars"} bulletFour={"Smiski Moving"} bulletFive={"Nyota I Am The Seasons"} />
    )
}
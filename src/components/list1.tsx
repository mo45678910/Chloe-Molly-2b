type ListOneProps = {
    itemOne: string;
    itemTwo: string;
    itemThree: string;
    itemFour: string;
    itemFive: string;
}

export function ListOneWithProps(props: ListOneProps) {
    return (
        <div>
            <hr />
            <h2>Top 5 Countries I Want to Visit:</h2>
            <ol>
                <li>{props.itemOne}</li>
                <li>{props.itemTwo}</li>
                <li>{props.itemThree}</li>
                <li>{props.itemFour}</li>
                <li>{props.itemFive}</li>
            </ol>
        </div>
    )
}

export function ListOneDemo() {
    return (
        <>
            <ListOneWithProps itemOne="Chile" itemTwo="Thailand" itemThree="Peru" itemFour="Japan" itemFive="Scotland" />
        </>
    )
}
type Table2Props = {
    row1: Array<string>,
    row2: Array<string>,
    row3: Array<string>,
    row4: Array<string>,
    row5: Array<string>,
}


export function Table2WithProps(props: Table2Props) {
    return (
        <div>
            <table className="collapse">
                <caption>Buying Blind Boxes</caption>
                <tr>
                    <th>{props.row1.at(1)}</th>
                    <th>{props.row1.at(2)}</th>
                    <th>{props.row1.at(3)}</th>
                    <th>{props.row1.at(4)}</th>
                </tr>
                <tr>
                    <th>{props.row2.at(1)}</th>
                    <th>{props.row2.at(2)}</th>
                    <th>{props.row2.at(3)}</th>
                    <th>{props.row2.at(4)}</th>
                </tr>
                <tr>
                    <th>{props.row3.at(1)}</th>
                    <th>{props.row3.at(2)}</th>
                    <th>{props.row3.at(3)}</th>
                    <th>{props.row3.at(4)}</th>
                </tr>
                <tr>
                    <th>{props.row4.at(1)}</th>
                    <th>{props.row4.at(2)}</th>
                    <th>{props.row4.at(3)}</th>
                    <th>{props.row4.at(4)}</th>
                </tr>
                <tr>
                    <th>{props.row5.at(1)}</th>
                    <th>{props.row5.at(2)}</th>
                    <th>{props.row5.at(3)}</th>
                    <th>{props.row5.at(4)}</th>
                </tr>
            </table>
            <hr/>
        </div>
    )
}

export function Table2Demo(){
    return (
        <Table2WithProps row1={["Brand", "Price Per Blind Box", "Size", "Rating Out of 5 Stars"]} row2={[" ", " ", " ", " "]} row3={[" ", " ", " ", " "]} row4={[" ", " ", " ", " "]} row5={[" ", " ", " ", " "]} />
    )
}
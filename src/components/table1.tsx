type TableOneProps = {
    countryOne: string;
    ratingOne: string;
    citiesOne: string;
    countryTwo: string;
    ratingTwo: string;
    citiesTwo: string;
    countryThree: string;
    ratingThree: string;
    citiesThree: string;
    countryFour: string;
    ratingFour: string;
    citiesFour: string;
}

export function TableOneWithProps(props: TableOneProps) {
    return (
        <div>
            <hr/>
            <table className="collapse">
                <caption><b>Country Ratings</b></caption>
                <tbody>
                <tr>
                    <th>Country</th>
                    <th>Rating</th>
                    <th>Cities Visited</th>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>{props.countryOne}</td>
                    <td>{props.ratingOne}</td>
                    <td>{props.citiesOne}</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>{props.countryTwo}</td>
                    <td>{props.ratingTwo}</td>
                    <td>{props.citiesTwo}</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>{props.countryThree}</td>
                    <td>{props.ratingThree}</td>
                    <td>{props.citiesThree}</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>{props.countryFour}</td>
                    <td>{props.ratingFour}</td>
                    <td>{props.citiesFour}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export function TableOneDemo() {
    return (
        <>
            <TableOneWithProps countryOne="Czech Republic" ratingOne="5/5" citiesOne="Prague, Kutna Hora, Cesky Krumlov, Decin"
                               countryTwo="Portugal" ratingTwo="4.5/5" citiesTwo="Lisbon, Evora, Castello Blanco, Sintra"
                               countryThree="Romania" ratingThree="3/5" citiesThree="Brasov, Bucharest"
                               countryFour="Slovakia" ratingFour="4/5" citiesFour="Bratislava"/>
        </>
    )
}
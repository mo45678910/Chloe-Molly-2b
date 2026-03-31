type HobbyOneProps = {
    hobby: string;
    name: string;
}

export function HobbyOneWithProps(props: HobbyOneProps) {
    return (
        <div>
            <p>My name is {props.name} and my hobby is {props.hobby}.
                I went to Prague
                for IQP this past fall and loved planning trips for my cohort every weekend. In 2025, I visited
                11 new countries! I recently planned a trip to Iceland for my family and we will be going in May.</p>
        </div>
    )
}

export function HobbyOneDemo() {
    return (
        <>
            <HobbyOneWithProps hobby="Travelling" name="Molly" />
            <div id="Prague">
                <img src="../public/prague.jpg" width="481" alt="Prague" />
            </div>
        </>
    )
}
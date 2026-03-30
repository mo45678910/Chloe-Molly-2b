type TitleProps = {
    class: string;
    teamNumber: string;
    hobbyOne: string;
    hobbyTwo: string;
}

export function TitleWithProps(props: TitleProps) {
    return (
        <div>
            <h1>{props.class} {props.teamNumber}: {props.hobbyOne} and {props.hobbyTwo}</h1>
        </div>
    )
}

export function TitleDemo() {
    return (
        <TitleWithProps class="CS3733-D26" teamNumber="1" hobbyOne="Travelling" hobbyTwo="Figurine Collecting" />
    )
}
type NameProps = {
    nameOne: string;
    nameTwo: string;
}

export function IntroWithProps(props: NameProps) {
    return (
        <div>
            <p>Hello! We are {props.nameOne} and {props.nameTwo}! We are both juniors
            at WPI and our hobbies are travelling and figurine collecting!</p>
        </div>
    )
}

export function IntroDemo() {
    return (
        <IntroWithProps nameOne="Molly" nameTwo="Chloe" />
    )
}
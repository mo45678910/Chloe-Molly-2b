type Hobby2Props = {
    name: string;
    hobby: string;
}

export function Hobby2WithProps(props: Hobby2Props) {
    return(
        <div>
            <p>
                Hello! My name is {props.name} and one of my hobbies is {props.hobby}! I love opening
                blind boxes with my sisters and finding artsy cute figurines like Smiskis and Nyota!
            </p>
        </div>
    )
}

export function Hobby2Demo(){
    return (
        <>
            <Hobby2WithProps name={"Chloe"} hobby={"Figurine Collecting"} />
            <div id="Nyota">
                <img src="public/NyotaIcon.jpg" width="300" alt="Nyota"/>
            </div>
        </>
    )
}
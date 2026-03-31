import type {ReactNode} from 'react'

export function FormOneComponent(): ReactNode {
    return (
        <div>
            <hr/>
            <h2>Travel Interest Form</h2>
            <form>
                <label htmlFor="fullname">Your Full Name:</label>
                <input type="text" id="fullname"/>
                <label htmlFor="age">Your Age:</label>
                <input type="text" id="age"/>
                <br/><br/>
                <p>What continents do you want to visit?</p>
                <input type="checkbox" id="asia"/>
                <label htmlFor="asia">Asia</label>
                <input type="checkbox" id="europe"/>
                <label htmlFor="europe">Europe</label>
                <input type="checkbox" id="southamerica"/>
                <label htmlFor="southamerica">South America</label>
                <br/>
                <p>Choose your favorite airline:</p>
                <input type="radio" id="delta" name="airline" value="delta"/>
                <label htmlFor="delta">Delta</label><br/>
                <input type="radio" id="jetblue" name="airline" value="jetblue"/>
                <label htmlFor="jetblue">JetBlue</label><br/>
                <input type="radio" id="united" name="airline" value="united"/>
                <label htmlFor="united">United</label><br/><br/>
                <label htmlFor="comments">Comments</label><br/>
                <textarea id="comments"></textarea>
                <br/>
                <label htmlFor="pricerange">Choose Your Ideal Price Range for a Trip:</label>
                <select name="pricerange" id="pricerange">
                    <option value="low">$500-2000</option>
                    <option value="medium">$2000-3500</option>
                    <option value="high">$3500+</option>
                </select>
                <br/><br/>
                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}

export function FormOneDemo() {
    return (
        <FormOneComponent />
    )
}
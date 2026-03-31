import type {ReactNode} from 'react'

export function FormTwoComponent(): ReactNode {
    return (
        <div>
            <h2>Figurine Interest Form</h2>
            <form>

                <label htmlFor="fullname">Your Full Name:</label>
                <input type="text" id="fullname" name="fullname"/>
                <br/><br/>

                <label htmlFor="whatFig">What figurines or figurine brands do you know of outside this list?</label>
                <input type="text" id="whatFig" name="whatFig"/>
                <br/><br/>

                Select the Collections You're Interested in:
                <input type="checkbox" id="nyot"/>
                <label htmlFor="nyot">Nyota</label>

                <input type="checkbox" id="smiski"/>
                <label htmlFor="smiski">Smiski</label>

                <input type="checkbox" id="hirono"/>
                <label htmlFor="hirono">Hirono</label>

                <input type="checkbox" id="dimoo"/>
                <label htmlFor="dimoo">Dimoo</label>

                <br/><br/>

                Do you already own any figurines?
                <br/>

                <input type="radio" id="hasFigurines" name="ownFigurines"/>
                <label htmlFor="hasFigurines">Yes!</label>

                <input type="radio" id="hasNoFigurines" name="ownFigurines"/>
                <label htmlFor="hasNoFigurines">No, and I don't want to.</label>

                <input type="radio" id="doesntWantFigurines" name="ownFigurines"/>
                <label htmlFor="doesntWantFigurines">No, but I really want to!</label>

                <input type="radio" id="hadBefore" name="ownFigurines"/>
                <label htmlFor="hadBefore">I used to, but not anymore.</label>

                <br/><br/>


                <label htmlFor="favCollection">What's your favorite collection from the ones I listed?</label>
                <select name="favCollection" id="favCollection">
                    <optgroup label="Default">
                        <option value="">Select...</option>
                    </optgroup>
                    <optgroup label="Nyota">
                        <option value="">Love Comes with the Wind</option>
                        <option value="">Love is Armor</option>
                        <option value="">Fluffy Life</option>
                        <option value="">We Are All Stars</option>
                        <option value="">Growing Up By Your Way</option>
                        <option value="">I Am The Seasons</option>
                    </optgroup>
                    <optgroup label="Smiski">
                        <option value="">Birthday</option>
                        <option value="">Living</option>
                        <option value="">Moving</option>
                        <option value="">Work</option>
                    </optgroup>
                    <optgroup label="Hirono">
                        <option value="">Le Petit Prince</option>
                        <option value="">Reshape</option>
                    </optgroup>
                    <optgroup label="Dimoo">
                        <option value="">Shapes in Nature</option>
                    </optgroup>

                </select>
                <br/>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export function FormTwoDemo(){
    return(
        <FormTwoComponent />
    )
}
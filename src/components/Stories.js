import Story from "./Story"
export default function Stories(){
    const names = ["9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai","filomoderna","memeriagourmet" ]
    
    
    return(
        <div class="stories">

            {names.map(name => <Story user={name} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
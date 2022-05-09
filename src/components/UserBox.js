export default function UserBox(props){
    return(
        <div class="usuario">
            <img src={"assets/img/" + props.username +".svg"} />
            <div class="texto">
                <strong>{props.username}</strong>
            {props.name}
            </div>
        </div>
    )
}
export default function Sugestion(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={"assets/img/" + props.user + ".svg"}/>
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
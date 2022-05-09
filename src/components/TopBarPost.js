export default function TopBarPost(props){
  return(  
        <div class="topo">
            <div class="usuario">
                <img src={"assets/img/" + props.user + ".svg"}/>
                {props.user}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}
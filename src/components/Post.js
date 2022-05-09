import React from "react";

import TopBarPost from "./TopBarPost";

export default function Post(props){
    const [liked, setLiked] = React.useState("hidden");
    let classBackgrounIonIcon = "";
    if(liked === "red"){
        classBackgrounIonIcon = "hidden";
   }
   function likeButton(){
       if(liked === "red"){
           setLiked("hidden");
           classBackgrounIonIcon = "";
       }else{
            setLiked("red");
            classBackgrounIonIcon = "hidden"
       }
   }
    return(
        <div class="post">
            <TopBarPost user={props.user}/>
           <div class="conteudo" onClick={() => setLiked("red")}>
                <img src={props.img} />
            </div>
            <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon class={classBackgrounIonIcon + " md hydrated"} onClick={likeButton} name="heart-outline"></ion-icon>
                    <ion-icon class={liked + " md hydrated"} onClick={likeButton} name="heart"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src="assets/img/respondeai.svg" />
                <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>
        </div>           
    )
}
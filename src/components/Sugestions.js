import Sugestion from "./Sugestion"
export default function Sugestions(){
    const sugestionsUsers = ["bad.vibes.memes","chibirdart","razoesparaacreditar","adorable_animals","smallcutecats"]
    
    
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestionsUsers.map(name => <Sugestion user= {name}/>) }
        </div>
    )
}
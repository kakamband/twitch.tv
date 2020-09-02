import React from 'react'
import Iconfront from "./Iconfront"

export default function Carouselfront(props) {
    return (
        <div>
            
            <Iconfront 
                photoPainel="https://www.oficinadanet.com.br/imagens/post/30406/riot-valorant-beta-fechado-comeca-7-de-abril.jpg"
                photoUser="https://static-cdn.jtvnw.net/jtv_user_pictures/zeusads-profile_image-fb223fd5b56c0b31-150x150.jpeg" nomeUsuario="Jukes" nomeGame="League Of Legends" 
                description="Oi, sou o Jukes! Jogo principalmente MMOs e jogos de luta. Também organizo torneios online! 
                Tenho 35 anos mas carinha de 18 (Kappa) e mesmo que você não jogue o mesmo que eu, cola no chat, vai valer a pena."  viewUser="20.000" userLanguage="Português"
            />


            <style jsx>{`

            `}</style>
        </div>
    )
}

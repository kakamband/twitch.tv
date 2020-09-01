import React from 'react'

export default function Iconfront() {
    return (
        <div className="wrapper">

            <div className="topo">
                <div className="user-Photo"></div>
                <div className="info">
                    <div className="user-Name">Jukes</div>
                    <div className="user-Game">League Of Legends</div>
                    <div className="user-View">20.000 espectadores</div>
                </div>
            </div>


            <button>Português</button>


            <div className="user-Description">
                Oi, sou o Jukes! Jogo principalmente MMOs e jogos de luta. Também organizo torneios online! 
                Tenho 35 anos mas carinha de 18 (Kappa) e mesmo que você não jogue o mesmo que eu, cola no chat, vai valer a pena.
            </div>



            {/* Criar uma outra pasta para englobar o carousel onde vão ficar os Iconfronts (user props e states) */}



            <style jsx>{`
            .wrapper{
                width: 200px;
                height: 420px;
                background-color: #191919;
                color: white;
            }
            .topo{
                display: flex;
                align-items: space-between;
            }
            .user-Photo{
                background: url(https://static-cdn.jtvnw.net/jtv_user_pictures/zeusads-profile_image-fb223fd5b56c0b31-150x150.jpeg) no-repeat center center / cover;
                width: 40px;
                height: 40px;
                border-radius: 100%;
                margin: 8px;
            }
            .info{

            }
            .user-Name{
                padding-top: 5px;
                padding-bottom: 3px;
                font-size: 16px;
                
            }
            .user-Game{
                padding: 3px 0;
                font-size: 12px;
            }
            .user-View{
                font-size: 15px;
            }
            button{
                padding: 5px 10px;
                border: none;   
                border-radius: 15px;  
                background-color: grey;   
                margin: 8px;      
            }
            button:hover{
                background-color: #A9A9A9;
            }
            .user-Description{
                padding: 8px;                
            }
            `}</style>
        </div>
    )
}

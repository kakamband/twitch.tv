import React from 'react'

export default function Icon(props) {
    return (
        <div className="wrapper">
            
            {props.min == true ? <div className="user-photo"></div> : <><div className="user-photo"></div>
                <div className="user-info">
                <h4>{props.userName || "User Name"}</h4>
                <h6>{props.userGame || "Game Name"}</h6>
            </div>
            {props.userOnline == true ? <div className="user-views"><div className="online"></div>{props.userViews}</div> : "Offline"}</>} 

            <style jsx>{`
            .wrapper{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #191919;
                color: white;
                width: 100%;
                padding-bottom: 8px;
            }

            .resolver-a-merda{
                padding-left: 5px;
            }

            .user-photo{
                background: url(${props.userPhoto || "https://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg"}) no-repeat center center / cover;
                width: 40px;
                height: 40px;
                border-radius: 100%;
            }

            .user-info{
                flex: 1;
                margin-left: 10px;
                font-family: 'Balsamiq Sans', cursive;
                font-family: 'Nunito', sans-serif;

            }

            h4{
                margin: 0px;
                font-size: 15px;
                padding-bottom: 3px;
                font-family: 'Balsamiq Sans', cursive;
                font-family: 'Nunito', sans-serif;
            }

            h6{
                margin: 0px;
                font-size: 10px;
                font-family: 'Balsamiq Sans', cursive;
                font-family: 'Nunito', sans-serif;
            }

            .user-views{
                display: flex;
                justify-content: center;
                align-items: center;
                padding-right: 8px;
                font-size: 15px;
                font-family: 'Balsamiq Sans', cursive;
                font-family: 'Nunito', sans-serif;

            }

            .online{
                background-color: red;
                width: 8px;
                height: 8px;
                border-radius: 100%;
                margin: 3px;
            }

            `}</style>

        </div>
    )
}

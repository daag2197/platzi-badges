import React from 'react';

import './Badge.css';
import confLogo from '../../images/image.svg';


class Badge extends React.Component {
    
    render(){
        let firstName = "Diego Alejandro";
        let lastName  = "Arevalo Garcia";
        return <div className = "Badge">
            <div className = "Badge_header">
                <img src = {confLogo} alt="Logo de prueba"></img>
            </div>

            <div className = "Badge_section-name">
                <img className = "Badge_avatar" src = "https://www.gravatar.com/avatar?d=identicon" alt = "Avatar"></img>
                <h1>{firstName}<br/>{lastName}</h1>
            </div>

            <div className = "Badge_section-info">
                <h3>Computer Enginner</h3>
                <p>@Arevalo_97</p>
            </div>

            <div className = "Badge_footer">
                #platziconf
            </div>
        </div>;
    }

}

export default Badge;
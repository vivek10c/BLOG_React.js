import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"
export default function Footer(){
    return(
        <>
            <footer>
                <div className="para">
                    <p>@2025 Manwar - All Rights Reserved.</p>
                </div>
                <div className="icon">
                    <i><FontAwesomeIcon icon={faSquareFacebook} /></i>
                    <i><FontAwesomeIcon icon={faInstagram} /></i>
                    <i><FontAwesomeIcon icon={faTwitter} /></i>
                    <i><FontAwesomeIcon icon={faYoutube} /></i>
                </div>
            </footer>
        </>
    )
}
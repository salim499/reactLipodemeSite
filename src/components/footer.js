import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGoogle,
  } from "@fortawesome/free-brands-svg-icons";


function Footer(){
    return(
     <FooterContainer className="main-footer">
         <div className="footer-middle">
         <div className="container">
             <div className="row">
                 <div className="col-md-3 col-sm-6">
                 <p className="feu"><a href="https://www.doctolib.fr/chirurgien-plastique/paris/nicolas-zwillinger" target="_blank">Prendre Rendez-Vous</a></p>
                 </div>
                 <div className="col-md-3 col-sm-6">
                     <p className="simple">Contactez-nous &#128522;</p>
                     <ul className="list-unstyled">
                         <li>
                         <a href="https://www.youtube.com/user/DrZwillinger"className="youtubeSocial" target="_blank">
                         <FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
                         <li>
                         <a href="https://www.facebook.com/plasticienparis/"className="facebookSocial" target="_blank">
                         <FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                         <li>
                         <a href="https://twitter.com/DrZwillinger"className="twitterSocial" target="_blank">
                         <FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
                         <li>
                         <a href="https://www.google.com/+Docteurzwillingerchirurgien-esthetique-paris"className="googleSocial" target="_blank">
                         <FontAwesomeIcon icon={faGoogle} size="2x" /></a></li>     
                         <li>
                         <a href="https://www.instagram.com/drnzwillinger/"className="instagramSocial" target="_blank">
                         <FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>                     
                     </ul>
                 </div>
                 <div className="col-md-3 col-sm-6">
                     <p className="simple">Adresse</p>
                     <h5>Clinique du Dr Zwillinger, 42 avenue Mozart, 75016 Paris</h5>
                     <h5>Ouvert du Lundi au Vendredi 9.30h - 20.00h</h5>
                     <h5><a href="#">01 45 74 12 25</a></h5>
                 </div>
                 <div className="col-md-3 col-sm-6">
                 <Link to="Mentions_Légales"><h6 className="sahit">Mentions-légales</h6></Link>
                     <Link to="Plan_Du_Site"><h6 className="sahit">Plan-du-site</h6></Link>
                     <Link to="#"><h6 className="sahit">Blog</h6></Link>
                 </div>
             </div>

                 <h5 className="text-xs-center">
                     &copy;{new Date().getFullYear}2016. All Rights Reserved by Dr Zwillinger
Antipodes Médical | Créateurs de sites
                 </h5>
             
         </div>
      </div>
     </FooterContainer>
             
    )
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 0.8rem;
    color: var(--mainWhite);
}
.footer-bottom {
    padding-top:0.7rem;
    padding-bottom:0.2rem;
}

.youtubeSocial  {
    color:var(--red);
    text-align:center;
    display:block;
    float:left;  
    width:60px; 
    padding:4px;
    }
.googleSocial  {
    color:#347dfe;
    text-align:center;
    display:block;
    float:left;   
    width:60px;
    padding:4px;

    }
.facebookSocial  {
    color:var(--blue);
    text-align:center;
    display:block;
    float:left; 
    width:60px;  
    padding:4px;
    margin-left: 0em
    }
.twitterSocial  {
    color:var(--whiteBlue);
    text-align:center;
    display:block;
    float:left; 
    width:60px;  
    padding:4px;
    }
.instagramSocial {
    color:#d6249f; 
    text-align:center;
    display:block;
    float:left; 
    width:60px;  
    padding:10px;
    }  
ul li a:hover {
    background-color:#D3D3D3;
    border-color:var(--mainLightGray);
    } 
p {
    /* basic font setting */
    font: bold 3em Impact, sans-serif;
    text-align: center;
    letter-spacing: 2px
    }
.feu {
    color: var(--blue);
    text-shadow: 0    0   2px #fefcc9,
                1px -1px 3px #f65c85,
               -2px -2px 4px #ffae34,
                2px -4px 5px #bbbbbb,
               -2px -6px 6px #cccccc,
                0   -8px 7px black,
                1px -9px 8px gray;
    }
.simple {
        text-shadow: 1px 1px 3px rgba(240,240,45,0.5);
       }
h6 {
    font:  2.4em Impact;
    text-align: center;
    }
.sahit {
    text-shadow: 1px 1.5px 2px rgba(240,240,45,0.5); 
}
h5 {
    text-align: center; 
}
`;

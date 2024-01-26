import "./FooterStyles.css"
import { FaFacebook, FaGithub, FaHome,
         FaLinkedin, FaMailBulk, FaPhone,
          FaTwitter } from "react-icons/fa"
import React from 'react'

const Footer = () => {
    return (
        <div className="footer" >
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>35 Triveni Enclave Raipur</p>
                            <p>Dehradun Uttarakhand</p>
                            <p>India.</p>
                        </div>
                    </div>
                    <div className="Phone">
                        <h4><FaPhone size={20}
                         style={{ color: "#fff", marginRight: "2rem" }} />
                          +91 9557548668 </h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20}
                         style={{ color: "#fff", marginRight: "2rem" }} /> 
                         amankothiyal.ak@gmail.com </h4>
                    </div>


                </div>
                <div className="left">
                    <h4>About Me</h4>
                    <p>I am Aman Kothiyal, a driven individual who has successfully
                         attained a B.Tech degree in Computer Science with a strong
                         academic performance from DIT University. My academic journey
                         showcases my commitment to learning and excelling in the field.</p>

                         <div className="Social">
                         <FaFacebook size={20} 
                         style={{ color: "#fff", marginRight: "2rem" }} />

                         <FaLinkedin size={20} 
                         style={{ color: "#fff", marginRight: "2rem" }} />

                         <FaGithub size={20} 
                         style={{ color: "#fff", marginRight: "2rem" }} />

                         <FaTwitter size={20} 
                         style={{ color: "#fff", marginRight: "2rem" }} />

                         </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
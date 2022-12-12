import React from "react"
import "./Landing.css"
import image from "../assets/Image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faFacebook,
    faTwitter,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useMoralis } from "react-moralis"

function Landing() {
    const { account,enableWeb3, isWeb3EnableLoading } = useMoralis()
    const navigate = useNavigate()
    useEffect(() => {
        if(account !=null)
        navigate("/home")
    }, [account])

    return (
        <div className="landingContainer">
            <div className="navContainer">
                <div className="logoNavContainer">StrawPoll</div>
                <div
                    to="/home"
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected")
                        }
                        
                    }}
                    className="buttonNavContainer"
                    disable={isWeb3EnableLoading}
                >
                    Connect to Metamask
                </div>
            </div>
            <div className="mainLandingContainer">
                <div className="headingLandingContainer">
                    <div className="heading1Container">Straw Poll</div>
                    <div className="heading2Container">
                        A democratised and accesible precursor to governance{" "}
                    </div>
                    <div className="socialContainer">
                        <div className="socialLogoContainer">
                            <FontAwesomeIcon
                                icon={faGithub}
                                color="#e5007a"
                                width={16}
                            />
                        </div>
                        <div className="socialLogoContainer">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                color="#e5007a"
                                width={16}
                            />
                        </div>
                        <div className="socialLogoContainer">
                            <FontAwesomeIcon
                                icon={faDiscord}
                                color="#e5007a"
                                width={16}
                            />
                        </div>
                        <div className="socialLogoContainer">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                color="#e5007a"
                                width={16}
                            />
                        </div>
                    </div>
                </div>
                <div className="photoLandingContainer">
                    <img src={image} height={600} width={600} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default Landing

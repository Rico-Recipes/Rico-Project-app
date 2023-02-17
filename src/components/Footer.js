import { React } from "react";
import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillApple
} from "react-icons/ai"
import { FaGooglePlay } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="page-footer pt-4 bg-black text-white mr-0 ">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h2 className="text-white font-bold lowercase italic">
                            Rico<span className="text-white-500">Recipes</span>
                        </h2>
                        <p>&copy; {new Date().getFullYear()} Rico. All rights reserved.</p>
                        <div>
                        </div>
                    </div>
                </div>

                <b>Social links</b>
                <div>
                    <AiFillFacebook />
                    <AiFillTwitterCircle />
                    <AiFillInstagram />
                    <AiFillApple />
                    <FaGooglePlay />

                </div>

            </div>


        </footer>
    );
};

export default Footer;

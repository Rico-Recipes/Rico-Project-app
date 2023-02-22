import { React } from "react";
import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillGithub
} from "react-icons/ai"

import { Link } from "react-router-dom";




const Footer = () => {
    return (
        <footer className="page-footer bg-black text-white mr-4 mt-5 ">
            <div className="container-fluid  text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h2 className="text-white font-bold lowercase italic">
                            Rico<span className="text-white-500">Recipes</span>
                        </h2>
                        <p>&copy; {new Date().getFullYear()} Rico. All rights reserved.</p>
                        <div>
                        </div>
                   
                
                <b>Social links</b>
                <div>
                    <AiFillFacebook />
                    <AiFillTwitterCircle />
                  <Link  to="https://github.com/Rico-Recipes/Rico-Project-app" >
                    <AiFillGithub bg='white' />
                   </Link>  
                    
                  
                </div>
                </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

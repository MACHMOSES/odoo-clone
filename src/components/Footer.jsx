import FooterCommunity from "./FooterCommunity";
import FooterServices from "./FooterServices";
import FooterAboutUs from "./FooterAboutUs";
import FooterInput from "./FooterInput";

const Footer = () => {
    return(
        <div className="bg-dark text-white rounded">
            <div className="m-1 pt-2 ">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-3 col-12 mb-1">
                        <FooterCommunity/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3 col-12 mb-1"> 
                        <FooterServices/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3 col-12 mb-1">
                        <FooterAboutUs/>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-3 col-12 mb-1">
                        <FooterInput/>
                    </div>
                    
                </div>
            
            </div>
                <div style={{background:'hsla(0, 10%, 6%, 1.00)'}}>
                    <p>Website made with <span>Odoo</span> </p>
                </div>
        </div>
    );
}

export default Footer;

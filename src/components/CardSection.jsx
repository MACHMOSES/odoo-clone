import RightCardSection from "./RightCardSection";
import LeftCardSection from "./LeftCardSection";
const CardSection = () => {
    return(
        <div className="container-fluid m-2">
            <h2 className='text-center fw-bold' style={{fontSize:'30px', fontFamily:'Cursive'}}>Enterprise software done right</h2>

            <div className="row m-5">
                <div className="col-md-8 " >
                <RightCardSection/>
            </div>
            <div className=" d-flex col-md-4" >
                <LeftCardSection/>
            </div>
            </div>
            
        </div>
    );
}

export default CardSection;
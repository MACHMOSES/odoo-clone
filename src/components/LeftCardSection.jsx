import leftsidecardimage from '../assets/images/leftsidecardimage.svg';
const LeftCardSection = () => {
    return(
        <div className="">
            <div className="rounded-3" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding:'10px'}}>
                <h5 className="fw-bold">No vendor lock-in</h5>
                <p className='' style={{fontSize:'17px'}}>
                    No proprietary data format, just PostgreSQL: you own your data. No software lock-in: you get the source code, GitHub access, and the flexibility to host on our infrastructure, or on premise.
                </p>
               
                
                <button className="rounded border border-1 p-1" style={{backgroundColor:'hsla(0, 38%, 20%, 1.00)'}}>
                    <a href="#" className="text-decoration-none text-white fw-bold"> Follow Us On GitHub</a>
                </button>
            </div>

            <div className="rounded-3" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding:'10px'}}>
                <h5 className="fw-bold">Fair pricing</h5>
                <p className='' style={{fontSize:'17px'}}>
                    No usage-based pricing, no feature upselling, no long term contracts, no hosting limits, no surprises... just a single price per user - all inclusive.
                </p>
               
                
                <button className="rounded border border-1 p-1" style={{backgroundColor:'hsla(0, 38%, 20%, 1.00)'}}>
                    <a href="#" className="text-decoration-none text-white fw-bold"> Viewing Pricing</a>
                </button>
            </div>
            <div className="rounded-3" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding:'10px'}}>
                <h5 className="fw-bold">A unique value proposition</h5>
                <img src={leftsidecardimage} alt="a graph showing the use odoo verses productivity" />
            </div>
        </div>
    )
}

export default LeftCardSection;
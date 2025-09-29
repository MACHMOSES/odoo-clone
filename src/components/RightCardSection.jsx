import CardImage1 from '../assets/images/cardImage1.webp'

const RightCardSection = () => {
    return(
        <div className=''>
            <div className="rounded-3" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding:'10px'}}>
                <h5 className="fw-bold">Open Source</h5>
                <p className='' style={{fontSize:'17px'}}>
                    Behind the technology is a community of 100k+ developers collaborating worldwide. We're united by the spirit of open source, and a common vision: "to transform companies, empower employees".
                </p>
                <p>
                    Odoo is available in two editions:
                </p>
                <ul>
                    <li>
                        <span>Community</span> <span>: Open Source, 100% free.</span>
                    </li>
                    <li>
                        <span>Enterprise</span> <span>: extra apps, infrastructure and professional services.</span>
                    </li>
                </ul>
                <button className="rounded border border-1 p-1" style={{backgroundColor:'hsla(0, 38%, 20%, 1.00)'}}>
                    <a href="#" className="text-decoration-none text-white fw-bold"> Compare Editions</a>
                </button>
            </div>
            <div className="rounded-3 mt-3" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding:'10px'}}>
                <h5 className="fw-bold">Open Source</h5>
                <p className='' style={{fontSize:'17px'}}>
                    Use Odoo Studio to automate actions, design custom screens, custom reports, or web hooks.
                </p>
                <div className='align-item-center'>
                    <img src={CardImage1} alt=" it shows the advantages of having odoo" className='img-fluid' />
                </div>
                
            </div>
            <div className="rounded-3 mt-3" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding:'10px'}}>
                <h5 className="fw-bold">40k+ community apps</h5>
                <p className='' style={{fontSize:'17px'}}>
                    Thanks to its open source development model, Odoo became the world's largest business apps store. Imagine getting an app for every business needs.
                </p>
                 <button className="rounded border border-1 p-1" style={{backgroundColor:'hsla(0, 38%, 20%, 1.00)'}}>
                    <a href="#" className="text-decoration-none text-white fw-bold"> Browse Community Apps</a>
                </button>
            </div>

            <div className="rounded-3 mt-3" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding:'10px'}}>
                <h5 className="fw-bold">No corporate bullsh*t</h5>
                <p className='' style={{fontSize:'17px'}}>
                    <i>
                        "With most systems, you get 70% of what you hoped. With Odoo, you get more than what you expected. You, guys, will transform the market." - Anonymous competitor
                    </i>
                </p>
                
            </div>
        </div>
    )
}

export default RightCardSection;
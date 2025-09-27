import optimizedProductiv from '../assets/images/optimizedProductivity.webp'

const IconSectiona = () => {
    return(
        <div className='container mt-1 mb-1 p-1 rounded-5'  style={{backgroundColor:'hsla(0, 4%, 69%, 1.00)'}}>
            <div className="d-flex justify-content-between align-items-center">

                <div className="clearfix">
                    <div className="form-check form-switch">
                    <input className="form-check-input " style={{backgroundColor:'hsla(0, 82%, 68%, 1.00)', height:'25px', width:'50px'}} type="checkbox" id="flexSwitchCheck"/>
                    <label className="form-check-label text-white fw-bold ps-2" for="flexSwitchCheck"> imagine without odoo</label>
                    </div>
                </div>
                <div className="">
                    
                    <a href="#" className="fw-bold text-decoration-none" style={{color:'green'}}>View all apps</a>
                </div>
                
            </div>

            <div className="mt-5">
                <h4>Imagine a vast collection of business apps at your disposal.</h4>
                <p className="text-dark" style={{fontSize:'17px'}}>
                    Got something to improve? There is an app for that. No complexity, no cost, just a one-click install.
                </p>
            </div>

            <div>
                <p className="text-dark" style={{fontSize:'17px'}}> 
                    Each app simplifies a process and empowers more people. Imagine the impact when everyone gets the right tool for the job, with perfect integration.
                </p>
            </div>
            <div className="clearfix">
                <button className="bg-white rounded-5 p-2 border-0 float-end" style={{width:''}}>
                    <p>If you simplify everything, you can do anything!</p>
                    <span>- Bill McDermott, former CEO of SAP</span>
                </button>
            </div>

             <div>
                    <br/>
                    <br/>
                    <h6 className='text-center fw-bold' style={{fontSize:'50px', fontFamily:'Cursive'}}>Level up your quality of work </h6>

            </div>
            <div className="ratio ratio-16x9 mt-5">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video"
                    allowFullScreen
                ></iframe>
            </div>

            <div>
                    <br/>
                    <br/>
                    <h6 className='text-center fw-bold' style={{fontSize:'50px', fontFamily:'Cursive'}}>Optimized for productivity</h6>

            </div>
            <div className='d-flex'>
                    <br/>
                    <br/>
                    <img src={optimizedProductiv} alt="various features of productive optimization" style={{maxWidth:'1200px'}} />
                    
            
            </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <p style={{maxWidth:'400px', fontSize:'25px'}}>
                        <span className='fw-bold'> Experience true speed</span>, reduced data entry, smart AI, and a fast UI. All operations are done in less than 90ms - faster than a blink.
                    </p>
            </div>
        
            
        </div>
    );
}

export default IconSectiona;
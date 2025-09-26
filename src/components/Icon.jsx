const Icon = ({listIcon}) => {
    return(
        <div className="container-fluid rounded-5 row mt-5" style={{background:'hsla(0, 4%, 69%, 1.00)'}}>
            <div className="row text-center p-5">
            {
            
                listIcon.map(
                    (listIcon)=>{
                        return( 
                            <div className='col-md-3 col-sm-6 p-3'key={listIcon.id}>
                                <div className=''>
                                    <div className="mx-auto" style={{background:'white', borderRadius:'20px',width:'80px', height:'80px'}}><img src={listIcon.src} alt="icon" style={{width:'50px', height:'50px'}}/></div> 
                                    {/* <h5 className='fw-bold pt-3' style={{fontFamily:'Cursive'}}>{listIcon.text}</h5> */}
                                    <div><h6 className="fw-bold p-1 " style={{fontFamily:'Cursive'}}>{listIcon.text}</h6></div>
                                </div>
                            </div>  

                        );
                    }
                )
            
            }
            </div>
        </div>
    );
}

export default Icon;
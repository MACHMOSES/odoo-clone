import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const HeaderComponent = (props) => {

    return (
        
            <nav className='navbar navbar-expand-sm d-flex bg-light'>
                <div className='container-fluid'> 
                    <div className='navbar-brand'>
                        <span style={{color:'hsla(0, 27%, 41%, 1.00)'}} className='h1'>o</span>
                        <span style={{color:'gray', fontFamily:'cursive'}} className='h1'>doo</span>
                    </div>

                    <div>
                      <button className='navbar-toggler ms-auto' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon' ></span>
                        </button>  
                    </div>

                        <div className='collapse navbar-collapse container-fluid ms-auto me-auto mx-auto' id='navbarNav'> 


                            <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-auto mx-auto'>

                                <div className=' container-fluid  navbar-nav'>
                                   <li className="nav-item" >
                                        <a href="www.google.com" className='nav-link'>
                                            <h4>App</h4> 
                                            
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                    <a href="www.google.com" className='nav-link'>
                                            <h4>Community</h4>
                                            
                                    </a>
                                    </li>
                                    <li className='nav-item'><a href="www.google.com" className='nav-link'><h4>pricing</h4></a></li> 
                                </div>
                            </ul>

                            <ul className='navbar-nav mx-auto '>
                                     <div className=' container-fluid-sm|md |lg|xl  navbar-nav d-flex'>
                                       <li className='nav-item '><a href="www.google.com" className='nav-link h3 pt-3 fw-bold'>Sign in</a></li>
                                        <li className='nav-item'><a type='' href="www.google.com" className='nav-link text-white'><button className='btn text-white fw-bold' style={{backgroundColor:'hsla(0, 27%, 41%, 1.00)'}}>Try it free</button></a></li> 
                                    </div>
                            </ul>


                         </div>   


                </div>

                    
                    <div>
                       
                    </div>   
            </nav>
    
    )
}

export default HeaderComponent
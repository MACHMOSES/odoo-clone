import kenyaflag from '../assets/images/kenyaflag.png'; 
import IconSectiona from './IconSectiona';

const Icon = ({listIcon}) => {
    const getDate = () =>{
        let toDay = new Date();
        let date = toDay.getDate();
        let month = toDay.getMonth() + 1;
        let year = toDay.getFullYear();
        return `${date}/${month}/${year}`;
    }
    return(
        <div style={{background:'hsla(0, 4%, 69%, 1.00)'}} className='container-fluid p-3 mt-3 rounded-5 text-center'>
                    <button className='btn rounded-5 text-white fw-bold bg-light ' style={{background:'hsla(0, 27%, 41%, 1.00)'}}>
                                <div className='d-flex gap-3 justify-content-center align-items-center'>
                                    <img className='rounded' src={kenyaflag} alt=" it is a kenya flag" style={{height:'20px',width:'30px'}}/> <p className='mt-3 text-black'>formation - eCommerce/Website</p> <span className='text-dark'>{getDate()}</span><a href="#" className='text-decoration-none' style={{color:'green'}}>regiter</a>
                                </div>
                            </button>

                    <div className="container-fluid row mt-1">
                        <div className="row text-center p-5">
                        {
                        
                            listIcon.map(
                                (listIcon)=>{
                                    return( 
                                        <div className='col-md-3 col-sm-6 p-3'key={listIcon.id}>
                                            
                                            <div className=''>
                                                <div className="mx-auto" style={{background:'white', borderRadius:'20px',width:'80px', height:'80px'}}><img src={listIcon.src} alt="icon" style={{width:'50px', height:'50px'}}/></div> 
                                                <div><h6 className="fw-bold p-1 " style={{fontFamily:'Cursive'}}>{listIcon.text}</h6></div>
                                            </div>
                                        </div>  

                                    );
                                }
                            )
                        
                        }
                        </div>
                    </div>

                    <IconSectiona/>
        </div>
    );
}

export default Icon;
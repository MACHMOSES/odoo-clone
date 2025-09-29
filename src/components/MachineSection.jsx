import machine1 from '../assets/images/machine1.webp'   
import machine2 from '../assets/images/machine2.webp'
import machine3 from '../assets/images/machine3.webp'
import machine4 from '../assets/images/machine4.webp'
import machine5 from '../assets/images/machine5.webp'
import machine6 from '../assets/images/machine6.webp'
import machine7 from '../assets/images/machine7.webp'

const MachineSection = () => {
    const images = [
  { id: 1, src: machine1, title: "Image One" },
  { id: 2, src: machine2, title: "Image Two"},
  { id: 4, src: machine3, title: "Image Three"},
  { id: 5, src: machine4, title: "Image Three"},
  { id: 6, src: machine5, title: "Image Three"},
  { id: 7, src: machine6, title: "Image Three"},
  { id: 8, src: machine7, title: "Image Three"}

];

    return(
        <div className='container my-5 py-5'>   
            <div className='text-center'>
                <h2 className='fw-bold' style={{fontSize:'40px', fontFamily:'Cursive'}}>All tech in one platform</h2>
            </div>  
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <div className='d-flex flex-wrap justify-content-center align-items-start gap-4 '>
                {
                    images.map(image => (
                    
                        <div key={image.id} className='text-center rounded-5' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding:'10px'}}>
                            <img  src={image.src} alt={image.title} style={{maxWidth:'200px', margin:'10px'}} />
                            <p className='fw-bold' style={{fontSize:'12px', fontFamily:'Cursive'}}>
                                {image.title}
                            </p>
                        </div>
                    
                    ))

                }
                    
                </div>
                
            </div>         
        </div>
    )
}

export default MachineSection;
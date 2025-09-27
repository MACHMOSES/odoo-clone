import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Icon from './Icon';
import IconPreviews from '../assets/data/IconPreview.json';
import { useState, useEffect } from 'react';

const getSectionPreview = ()=>{
    return new Promise((resolve) => { 
        resolve({data:{iconLists:IconPreviews}}) 
    .then((res) => {
        console.log(res.data);
    });
    })

}

const Main = (props) => {
    const [listIcon, setListIcon] = useState([]);
    useEffect(
        () => {
            getSectionPreview()
            .then((res) => {
                setListIcon(res.data.iconLists);
            });
        }, []
    )
    return(
        <div className='container-fluid'>
            <section>
                <div>
                    <br/>
                    <br/>
                    <h1 className='text-center fw-bold' style={{fontSize:'70px', fontFamily:'Cursive'}}>All you business on <span> one platform</span> </h1>

                </div>
                <div>
                    <h2 className='text-center fw' style={{fontSize:'50px', fontFamily:'Cursive'}}>Simple,efficient, yet affordable</h2>
                </div>
                <div className='text-center' style={{fontSize:'30px', fontFamily:'Cursive'}}>
                    <span>US$ 7.5/MONTH</span>
                    <span>for ALL your apps</span>
                </div>
            </section>
            
            <section>
                <div className='container text-center d-flex justify-content-center gap-3 pt-3 '>
                    <button className='btn roundedn text-white fw-bold' style={{background:'hsla(0, 27%, 41%, 1.00)'}}>start now-it's free</button>
                    <div className='dropdown'>
                        <button type='button' className='bt rounded dropdown-toggle fw-bold border border-1 p-1 ' data-bs-toggle='dropdown' style={{color:'hsla(0, 27%, 41%, 1.00)'}}>Meet an Advisor</button>
                        <ul className='dropdown-menu'>
                            <li><a className='dropdown-item fw-bold' href="#">Small Business (&lt;50)</a></li>
                            <li><a className='dropdown-item fw-bold' href="#">Small Business (&lt;50)</a></li>
                            <li><a className='dropdown-item fw-bold' href="#" >Mid sized / Large company</a></li>
                        </ul>
                    </div>    
                </div>
            </section>
            <Icon listIcon={listIcon}/>
        </div>
    )
}

export default Main;
import img1 from './img/1.jpeg'
import{ useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Galley = () => {
    const elementR = <FontAwesomeIcon icon={faArrowRight} size="2x" />
    const elementL = <FontAwesomeIcon icon={faArrowLeft} size="2x" />

    const [toggle, setToggle] = useState(true);

    return ( 
        <div id="gallery" className = "flx">
            <h2>{toggle ? "OPEN Gallery" : "Close Gallery"}</h2>
            <div className={toggle ? 'gal-box toggle' : "gal-box" } >
                <img  className="img-box" src={img1} alt="pic1" />
                <img  className="img-box" src={img1} alt="pic1" />
                <img  className="img-box" src={img1} alt="pic1" />
                <img  className="img-box" src={img1} alt="pic1" />
                <img  className="img-box" src={img1} alt="pic1" />
                <img  className="img-box" src={img1} alt="pic1" />
            </div>
            <button
                onClick={() => setToggle(!toggle)}
                className='btn-more btn'>
                {toggle ? elementR : elementL}
            </button>
        </div>
     );
}
 
export default Galley;
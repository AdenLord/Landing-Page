import { useState } from "react";

const FeedNews = () => {

    const[ val , setVal ] = useState(true);

    return ( 
        <div id="feed-box" className="col-12">
            <div id="feed-box-cover" className="flx ">
                <div id="input-div">
                    <input onClick={() => setVal(!val)} className="input" type="text" value={val ?'Enter your email' :""} />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
     );
}
 
export default FeedNews;
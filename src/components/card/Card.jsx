// import React from 'react'
// import "./card.css"

// function Card({card}) {

//   return (
//    <>
//       <div className='card'>
//         <div className='Upper'>
//             <div>
//               <h5 className='dis'>CAM-11</h5>
//             </div>
//               <div className='profile'>
//                 <img className='profile_image' src="https://ui-avatars.com/api/?name=vicky+shah&background=random&color=fff" alt="Profile" />
//                 <div id='Circle'></div>
//               </div>    
//         </div >


//         <div className='container'>
//           <div className="round-checkbox">
//             <input type="checkbox" id="myCheckbox"></input>
//             <label htmlFor="myCheckbox"></label>
            
//           </div>
          
//           <h5>Conduct Security Vulnerability Assessment</h5>
          
          
//         </div>


//         <div className='lower'>
//               <div>
//                   <img src="#" alt="Priority" />
//               </div>
//               <div className='bottomRight'>
//                   <div className='circle'></div>
//                   <div>TAG</div>
//               </div>
//         </div>
//       </div>
//    </>
//   )
// }

// export default Card
import React from 'react';
import './card.css';

function Card({ card }) {
  if (!card) {
    return null; // or some default content or placeholder if you prefer
  }
  const { id, title, userId, name, available, tag } = card;

  return (
    <>
      <div className="card">
        <div className="Upper">
          <div>
            <h5 className="dis">{id}</h5>
          </div>
          <div className="profile">
            <img
              className="profile_image"
              src={`https://ui-avatars.com/api/?name=${name}&background=random&color=fff`}
              alt="Profile"
            />
            <div id="Circle"></div>
          </div>
        </div>

        <div className="container">
          <div className="round-checkbox">
            <input type="checkbox" id={`myCheckbox-${id}`} />
            <label htmlFor={`myCheckbox-${id}`}></label>
          </div>

          <div className="title">
            <h5>{title}</h5>
          </div>
        </div>

        <div className="lower">
          <div>
            <img src="#" alt="Priority" />
          </div>
          <div className="bottomRight">
            <div className="circle"></div>
            <div>{`TAG: ${tag}`}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

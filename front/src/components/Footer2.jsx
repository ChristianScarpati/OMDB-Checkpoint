import React from "react";
import style from '../styles/footer.module.css'

function Footer2() {
  return (
    <div className={style.mainFooter} >
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1 color="red" size="20px" className={style.paddingLeft}>MOVIE THEATER INC</h1>
            <h1 className="list-unstyled">
              <li className={style.liSize}> tel number: 342-420-6969</li>
              
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 className={style.paddingLeft}>BILLBOARD</h4>
            <ui className="list-unstyled">
              <li>Release</li>
              <li>All Movies</li>
              <li>Movies 2D</li>
              <li>Movies 3D</li>
              <li>Movies XD</li>
              <li>Premium Class</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className={style.paddingLeft}>CANDY</h4>
            <ui className="list-unstyled">
              <li>All products</li>
              <li>promotions</li>
              <br />
              <h4 className={style.bold}> CINEMA</h4>
              <li>Prices</li>
              <li>Formats</li>
              <li>Gamer zone</li>
            </ui>
          </div>

          <div className="col">
            <h4 className={style.paddingLeft}>CINEMA FAN</h4>
            <ui className="list-unstyled">
              <li>Contests</li>
              <li>Cinema fan </li>
              <br />
              <h4 className={style.bold}> ABOUT US</h4>
              <li>Contact</li>
              <li>Complaint book</li>
              <li>Human Resources</li>
            </ui>
          </div>



        </div>
        <hr />
        <div className="row">
          <h5 className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Footer2;

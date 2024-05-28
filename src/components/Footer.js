import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer-1" style={{backgroundColor:'#212529',color:'white',paddingTop:'20px'}}>
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">Find The Store<span></span></h5>
                <p>Become a Member</p>
                <p>Send us feedback</p>

              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title" style={{marginLeft:'20px'}}>Get Help<span></span></h5>
                <ul className="thumbnail-widget" style={{listStyleType:'none'}}>
                  <li>
                    <p>Orders</p>
                  </li>
                  <li>
                    <p>Delivery</p>
                  </li>
                  <li>
                    <p>Returns</p>
                  </li>
                  <li>
                    <p>Payment Options</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Follow up<span></span></h5>
                <a href="#" style={{textDecoration:'none',color:'white',marginRight:'10px'}}> <i className="fa fa-facebook"> </i> </a>
                <a href="#" style={{textDecoration:'none',color:'white',marginRight:'10px'}}> <i className="fa fa-twitter"> </i> </a>
                <a href="#" style={{textDecoration:'none',color:'white',marginRight:'10px'}}> <i className="fa fa-youtube"> </i> </a>
                <a href="#" style={{textDecoration:'none',color:'white',marginRight:'10px'}}> <i className="fa fa-instagram"> </i> </a>

              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Contact Us<span></span></h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className="emailfield">
                  <input type="text" name="email" value="Email" />
                  <input name="uri" type="hidden" value="arabiantheme" />
                  <input name="loc" type="hidden" value="en_US" />
                  <input className="submitbutton ripplelink" type="submit" value="Subscribe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p><i class="fa fa-map-marker" aria-hidden="true" style={{marginRight:'10px'}}></i>
                     India
© 2023 Nike, Inc. All Rights Reserved
</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

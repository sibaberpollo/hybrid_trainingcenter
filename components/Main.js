/* eslint-disable @next/next/no-img-element */

const Main = () => (
  <main>
  
      {/* End Header area */}
      {/* Start slider area  */}
      <div className="slider-area slider-top-space-header1 slider1-caption">
        <div className="bend niceties preview-2">
          <div id="ensign-nivoslider" className="slides">
            <img src="img/slides/slide1.jpg" alt="image" title="#slider-direction-1" />
            <img src="img/slides/slide2.jpg" alt="image" title="#slider-direction-1" />
            <img src="img/slides/slide1.jpg" alt="image" title="#slider-direction-1" />
          </div>
          {/* direction 1 */}
          <div id="slider-direction-1" className="t-cn slider-direction">
            {/* <div className="slider-progress"></div> */}
            <div className="slider-content t-cn s-tb slider-1">
              <div className="title-container s-tb-c title-compress">
                <div data-wow-delay="0.1s" data-wow-duration="1s" className="tp-caption big-title rs-title customin customout bg-sld-cp-primary ">Build <span>Your</span> Body <span>Strong</span>
                </div>
                <div data-wow-delay="0.2s" data-wow-duration="2s" className="tp-caption small-content customin customout rs-title-small bg-sld-cp-primary tp-resizeme rs-parallaxlevel-0 ">
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the idustry's standard type specimen book. It has survived not only five centuries, bu
                </div>
                <div className="button">
                  <a href="index.html" className="btn custom-button" data-title="Join With Us">Join With Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End slider area*/}
      {/* Start About fitness area */}
      <div className="about-fitness-area">
        <div className="container-fluid">
          <div className="about-fitness-left">
            <div className="about-left-img padding-space">
              <img src="img/about-fitness-img.png" alt="about-fitness-img" />
              <div className="overly">
                <h3>All <span>About</span><br />Fitness</h3>
              </div>
            </div>
          </div>
          <div className="about-fitness-right padding-space">
            <div className="about-single-service">
              <div className="media service-item">
                <div className="pull-left service-image">
                  <a href="index.html">
                    <span className="flaticon-olympic-weightlifting" />
                  </a>
                </div>
                <div className="media-body service-content">
                  <h3 className="media-heading"><a href="index.html">Wight Lifting</a></h3>
                  <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyy text of the printing and typesetting.</p>
                </div>
              </div>
            </div>
            <div className="about-single-service">
              <div className="media service-item">
                <div className="pull-left service-image">
                  <a href="index.html">
                    <span className="flaticon-people" />
                  </a>
                </div>
                <div className="media-body service-content">
                  <h3 className="media-heading"><a href="index.html">Running</a></h3>
                  <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyy text of the printing and typesetting.</p>
                </div>
              </div>
            </div>
            <div className="about-single-service">
              <div className="media service-item last-item">
                <div className="pull-left service-image">
                  <a href="index.html">
                    <span className="flaticon-exercise" />
                  </a>
                </div>
                <div className="media-body service-content">
                  <h3 className="media-heading"><a href="index.html">Yoga</a></h3>
                  <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyy text of the printing and typesetting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About fitness area */}
      {/* Start feature classes area */}
      <div className="feature-classes-area nav-on-hover">
        <div className="container">
          <div className="section-title">
            <h2>Featured Classes</h2>
          </div>
        </div>
        <div className="container">
          <div className="gym-carousel nav-control-top" data-loop="true" data-items={3} data-margin={15} data-autoplay="false" data-autoplay-timeout={10000} data-smart-speed={2000} data-dots="false" data-nav="true" data-nav-speed="false" data-r-x-small={1} data-r-x-small-nav="true" data-r-x-small-dots="false" data-r-x-medium={2} data-r-x-medium-nav="true" data-r-x-medium-dots="false" data-r-small={2} data-r-small-nav="true" data-r-small-dots="false" data-r-medium={3} data-r-medium-nav="true" data-r-medium-dots="false" data-r-large={3} data-r-large-nav="true" data-r-large-dots="false">
            <div className="single-product-classes">
              <div className="single-product">
                <a href="index.html"><img className="img-responsive" src="img/feature1.jpg" alt="product" /></a>
                <div className="overly">
                  <ul>
                    <li>16 Dec</li>
                    <li>06.AM</li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-classes.html">Weight Lifting</a></h3>
                <span className="author"><i className="fa fa-user" />Jhon Carry</span>
              </div>
            </div>
            <div className="single-product-classes">
              <div className="single-product">
                <a href="index.html"><img className="img-responsive" src="img/feature2.jpg" alt="product" /></a>
                <div className="overly">
                  <ul>
                    <li>16 Dec</li>
                    <li>06.AM</li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-classes.html">Daily Yoga</a></h3>
                <span className="author"><i className="fa fa-user" />Jhon Carry</span>
              </div>
            </div>
            <div className="single-product-classes">
              <div className="single-product">
                <a href="index.html"><img className="img-responsive" src="img/feature3.jpg" alt="product" /></a>
                <div className="overly">
                  <ul>
                    <li>16 Dec</li>
                    <li>06.AM</li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-classes.html">Running Way</a></h3>
                <span className="author"><i className="fa fa-user" />Jhon Carry</span>
              </div>
            </div>
            <div className="single-product-classes">
              <div className="single-product">
                <a href="index.html"><img className="img-responsive" src="img/feature4.jpg" alt="product" /></a>
                <div className="overly">
                  <ul>
                    <li>16 Dec</li>
                    <li>06.AM</li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-classes.html">Free Hand</a></h3>
                <span className="author"><i className="fa fa-user" />Jhon Carry</span>
              </div>
            </div>
            <div className="single-product-classes">
              <div className="single-product">
                <a href="index.html"><img className="img-responsive" src="img/feature1.jpg" alt="product" /></a>
                <div className="overly">
                  <ul>
                    <li>16 Dec</li>
                    <li>06.AM</li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-classes.html">Weight Lifting</a></h3>
                <span className="author"><i className="fa fa-user" />Jhon Carry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End feature product area */}
      {/* Start being body builder area */}
      <div className="being-body-builder  bg-secondary padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="being-left-img">
                <img src="img/being-builder.png" alt="being-builder" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="being-right-content">
                <div className="being-content">
                  <h2>Being <span>Body</span></h2>
                  <p>Builders</p>
                  <a className="btn sign-button" href="index.html">Sign up!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End being body builder area */}
      {/* Start class schedule area */}
      <div className="class-schedule">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h2>Class ScheDule</h2>
              </div>
              <div className="class-schedule-wrap">
                {/* Tabs */}
                <ul id="myTab" className="nav nav-tabs">
                  <li className="active"><a href="index.html#monday" data-toggle="tab">Monday</a></li>
                  <li><a href="index.html#tuesday" data-toggle="tab">Tuesday</a></li>
                  <li><a href="index.html#wednesday" data-toggle="tab">Wednesday</a></li>
                  <li><a href="index.html#thursday" data-toggle="tab">Thursday</a></li>
                  <li><a href="index.html#friday" data-toggle="tab">Friday</a></li>
                  <li><a href="index.html#saturday" data-toggle="tab">Saturday</a></li>
                  <li><a href="index.html#sunday" data-toggle="tab">Sunday</a></li>
                </ul>
                <div id="myTabContent" className="tab-content class-schedule-tab">
                  <div className="tab-pane fade in active" id="monday">
                    <ul className="odd">
                      <li>Yoga</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Robert Smith</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Running</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Petter john</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="odd">
                      <li>Gym</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Kazi Fahim</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Free Hand</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Jessy Reo</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="odd">
                      <li>Weight Lifting</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Zara Keron</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Fitness</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Jack Sparrow</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="tuesday">
                    <ul className="odd">
                      <li>Yoga</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Robert Smith</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Running</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Petter john</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="odd">
                      <li>Gym</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Kazi Fahim</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Free Hand</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Jessy Reo</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="odd">
                      <li>Weight Lifting</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Zara Keron</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="wednesday">
                    <ul className="odd">
                      <li>Yoga</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Robert Smith</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Running</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Petter john</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="odd">
                      <li>Gym</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Kazi Fahim</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Free Hand</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Jessy Reo</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="thursday">
                    <ul className="odd">
                      <li>Yoga</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Robert Smith</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Running</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Petter john</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="odd">
                      <li>Gym</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Kazi Fahim</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Free Hand</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Jessy Reo</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="odd">
                      <li>Weight Lifting</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Zara Keron</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="friday">
                    <ul className="odd">
                      <li>Yoga</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Robert Smith</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Running</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Petter john</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="saturday">
                    <ul className="odd">
                      <li>Yoga</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Robert Smith</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Running</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Petter john</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="odd">
                      <li>Gym</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Kazi Fahim</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="sunday">
                    <ul className="odd">
                      <li>Yoga</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Robert Smith</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Running</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Petter john</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="odd">
                      <li>Gym</li>
                      <li>10.00 am - 12.00 pm</li>
                      <li>Kazi Fahim</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                    <ul className="even">
                      <li>Free Hand</li>
                      <li>09.00 am - 12.00 pm</li>
                      <li>Jessy Reo</li>
                      <li><a href="index.html">Join Now!</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End class schedule area */}
      {/* Start what clients say area  */}
      <div className="what-client-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h2>What Client’s Say</h2>
              </div>
              <div className="gym-carousel dot-control" data-loop="true" data-items={2} data-margin={15} data-autoplay="false" data-autoplay-timeout={10000} data-smart-speed={2000} data-dots="false" data-nav="true" data-nav-speed="false" data-r-x-small={1} data-r-x-small-nav="false" data-r-x-small-dots="true" data-r-x-medium={1} data-r-x-medium-nav="false" data-r-x-medium-dots="true" data-r-small={2} data-r-small-nav="false" data-r-small-dots="true" data-r-medium={2} data-r-medium-nav="false" data-r-medium-dots="true" data-r-large={2} data-r-large-nav="false" data-r-large-dots="true">
                <div className="single-client-say">
                  <div className="pull-left client-picture">
                    <img src="img/client1.jpg" alt="client1" />
                  </div>
                  <div className="media-body client-content">
                    <h3>Honey Jisa <span> / CEO</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet, consectet ad elit sed onummy.</p>
                  </div>
                </div>
                <div className="single-client-say">
                  <div className="pull-left client-picture">
                    <img src="img/client2.jpg" alt="client2" />
                  </div>
                  <div className="media-body client-content">
                    <h3>Tahmid Alom <span> / Founder</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet, consectet ad elit sed onummy.</p>
                  </div>
                </div>
                <div className="single-client-say">
                  <div className="pull-left client-picture">
                    <img src="img/client1.jpg" alt="client1" />
                  </div>
                  <div className="media-body client-content">
                    <h3>Honey Jisa <span> / CEO</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet, consectet ad elit sed onummy.</p>
                  </div>
                </div>
                <div className="single-client-say">
                  <div className="pull-left client-picture">
                    <img src="img/client2.jpg" alt="client2" />
                  </div>
                  <div className="media-body client-content">
                    <h3>Honey Jisa <span> / CEO</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaLorem ipsum dolor sit amet, consectet ad elit sed onummy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End what clients say area */}
      {/* Start Expert trainers area */}
      <div className="expert-trainer-area nav-on-hover">
        <div className="container">
          <div className="section-title">
            <h2>Expert Trainers</h2>
          </div>
        </div>
        <div className="container">
          <div className="gym-carousel nav-control-top" data-loop="true" data-items={3} data-margin={15} data-autoplay="false" data-autoplay-timeout={10000} data-smart-speed={2000} data-dots="false" data-nav="true" data-nav-speed="false" data-r-x-small={1} data-r-x-small-nav="true" data-r-x-small-dots="false" data-r-x-medium={1} data-r-x-medium-nav="true" data-r-x-medium-dots="false" data-r-small={2} data-r-small-nav="true" data-r-small-dots="false" data-r-medium={3} data-r-medium-nav="true" data-r-medium-dots="false" data-r-large={3} data-r-large-nav="true" data-r-large-dots="false">
            <div className="single-trainer-item">
              <div className="trainer-item">
                <div className="trainer-img">
                  <img src="img/trainers/trainer1.jpg" alt="trainer1" />
                  <div className="social-overly">
                    <ul>
                      <li><a href="index.html"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                  <div className="trainer-overly">
                    <h3><a href="single-trainer.html">Jessica</a></h3>
                    <span className="builder">Body Builder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-trainer-item">
              <div className="trainer-item">
                <div className="trainer-img">
                  <img src="img/trainers/trainer2.jpg" alt="trainer2" />
                  <div className="social-overly">
                    <ul>
                      <li><a href="index.html"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                  <div className="trainer-overly">
                    <h3><a href="single-trainer.html">Jecy Deoko</a></h3>
                    <span className="builder">Running Specialist</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-trainer-item">
              <div className="trainer-item">
                <div className="trainer-img">
                  <img src="img/trainers/trainer3.jpg" alt="trainer3" />
                  <div className="social-overly">
                    <ul>
                      <li><a href="index.html"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                  <div className="trainer-overly">
                    <h3><a href="single-trainer.html">John Smith</a></h3>
                    <span className="builder">Weight Lifting</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-trainer-item">
              <div className="trainer-item">
                <div className="trainer-img">
                  <img src="img/trainers/trainer4.jpg" alt="trainer4" />
                  <div className="social-overly">
                    <ul>
                      <li><a href="index.html"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                      <li><a href="index.html"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                  <div className="trainer-overly">
                    <h3><a href="single-trainer.html">Stephen</a></h3>
                    <span className="builder">Body Builder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Expert tainers area */}
      {/* Start Price Table area */}
      <div className="price-table-area">
        <div className="container">
          <div className="section-title">
            <h2>Our Pricing Table</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 hvr-float-shadow">
              <div className="price-table-box">
                <span>Standard</span>
                <h3>$99<span>/month</span></h3>
                <ul>
                  <li>Free Hand</li>
                  <li>Gym Fitness</li>
                  <li>Running</li>
                  <li>-------</li>
                  <li>-------</li>
                </ul>
                <a className="custom-button" data-title="Become A Member" href="index.html">Details</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 hvr-float-shadow">
              <div className="price-table-box">
                <span>Premium</span>
                <h3>$199<span>/month</span></h3>
                <ul>
                  <li>Free Hand</li>
                  <li>Gym Fitness</li>
                  <li>Running</li>
                  <li>Yoga</li>
                  <li>-------</li>
                </ul>
                <a className="custom-button" data-title="Become A Member" href="index.html">Details</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 hvr-float-shadow">
              <div className="price-table-box">
                <span>Platinum</span>
                <h3>$299<span>/month</span></h3>
                <ul>
                  <li>Free Hand</li>
                  <li>Gym Fitness</li>
                  <li>Running</li>
                  <li>Yoga</li>
                  <li>Body Building</li>
                </ul>
                <a className="custom-button" data-title="Become A Member" href="index.html">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Price Table area */}
      {/* Gallery Area Start Here */}
      <div className="gallery-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="section-title">
                <h2>Our Gallery</h2>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="isotop-classes-tab isotop-btn">
                <a href="index.html" data-filter="*" className="current">All</a>
                <a href="index.html" data-filter=".Yoga">Yoga</a>
                <a href="index.html" data-filter=".Running">Running</a>
                <a href="index.html" data-filter=".Gym">Gym</a>
                <a href="index.html" data-filter=".Fitness">Fitness</a>
              </div>
            </div>
          </div>
          <div className="row portfolioContainer gallery-wrapper zoom-gallery">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 Yoga Gym">
              <div className="gallery-box">
                <img src="img/gallery/1.jpg" className="img-responsive" alt="gallery" />
                <div className="gallery-content">
                  <a href="img/gallery/1.jpg" className="elv-zoom" title="Fitness"><i className="fa fa-plus" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 Running Gym Fitness">
              <div className="gallery-box">
                <img src="img/gallery/2.jpg" className="img-responsive" alt="gallery" />
                <div className="gallery-content">
                  <a href="img/gallery/2.jpg" className="elv-zoom" title="Push Up"><i className="fa fa-plus" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 Yoga Running Fitness">
              <div className="gallery-box">
                <img src="img/gallery/3.jpg" className="img-responsive" alt="gallery" />
                <div className="gallery-content">
                  <a href="img/gallery/3.jpg" className="elv-zoom" title="Weight Lifting"><i className="fa fa-plus" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 Yoga Gym">
              <div className="gallery-box">
                <img src="img/gallery/4.jpg" className="img-responsive" alt="gallery" />
                <div className="gallery-content">
                  <a href="img/gallery/4.jpg" className="elv-zoom" title="Free Hand"><i className="fa fa-plus" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 room Gym Fitness">
              <div className="gallery-box">
                <img src="img/gallery/5.jpg" className="img-responsive" alt="gallery" />
                <div className="gallery-content">
                  <a href="img/gallery/5.jpg" className="elv-zoom" title="Body Building"><i className="fa fa-plus" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 Yoga campus">
              <div className="gallery-box">
                <img src="img/gallery/6.jpg" className="img-responsive" alt="gallery" />
                <div className="gallery-content">
                  <a href="img/gallery/6.jpg" className="elv-zoom" title="Gym"><i className="fa fa-plus" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Area End Here */}
      {/* Start Fitness class summer area */}
      <div className="fitness-summer-area padding-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="fitness-summer">
                <div className="fitness-content">
                  <h3><span>Fitness Classes</span> This Summer.</h3>
                  <p>Pay Now and
                    <br /> Get <span>35%</span> Discount</p>
                  <a className="custom-button" data-title="Become A Member" href="index.html">Become A Member</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Fitness class summer area */}
      {/* Start online store area */}
      <div className="online-store-area nav-on-hover">
        <div className="container">
          <div className="section-title">
            <h2>Online Store</h2>
          </div>
        </div>
        <div className="container">
          <div className="gym-carousel nav-control-top nav-on-hover" data-loop="true" data-items={4} data-margin={15} data-autoplay="false" data-autoplay-timeout={10000} data-smart-speed={2000} data-dots="false" data-nav="true" data-nav-speed="false" data-r-x-small={1} data-r-x-small-nav="true" data-r-x-small-dots="false" data-r-x-medium={2} data-r-x-medium-nav="true" data-r-x-medium-dots="false" data-r-small={2} data-r-small-nav="true" data-r-small-dots="false" data-r-medium={3} data-r-medium-nav="true" data-r-medium-dots="false" data-r-large={4} data-r-large-nav="true" data-r-large-dots="false">
            <div className="single-product-store">
              <div className="single-product">
                <a href="index.html"><img src="img/product/product1.png" alt="product" /></a>
                <div className="overlay" />
                <div className="product-info">
                  <ul>
                    <li><a href="index.html" title="Cart"><i className="fa fa-shopping-cart" /></a></li>
                    <li><a href="index.html" title="Whishlist"><i className="fa fa-heart-o" /></a></li>
                    <li><a href="index.html" title="Campare"><i className="fa fa-compress" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-product.html">Product Title Here</a></h3>
                <div className="review">
                  <ul>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li className="uncolor"><a href="index.html"><i className="fa fa-star" /></a></li>
                  </ul>
                </div>
                <span className="regular-price">
                  <span className="product-price">$59.00</span>
                </span>
              </div>
            </div>
            <div className="single-product-store">
              <div className="single-product">
                <a href="index.html"><img src="img/product/product2.png" alt="product" /></a>
                <div className="overlay" />
                <div className="product-info">
                  <ul>
                    <li><a href="index.html" title="Cart"><i className="fa fa-shopping-cart" /></a></li>
                    <li><a href="index.html" title="Whishlist"><i className="fa fa-heart-o" /></a></li>
                    <li><a href="index.html" title="Campare"><i className="fa fa-compress" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-product.html">Product Title Here</a></h3>
                <div className="review">
                  <ul>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li className="uncolor"><a href="index.html"><i className="fa fa-star" /></a></li>
                  </ul>
                </div>
                <span className="regular-price">
                  <span className="product-price">$59.00</span>
                </span>
              </div>
            </div>
            <div className="single-product-store">
              <div className="single-product">
                <a href="index.html"><img src="img/product/product3.png" alt="product" /></a>
                <div className="overlay" />
                <div className="product-info">
                  <ul>
                    <li><a href="index.html" title="Cart"><i className="fa fa-shopping-cart" /></a></li>
                    <li><a href="index.html" title="Whishlist"><i className="fa fa-heart-o" /></a></li>
                    <li><a href="index.html" title="Campare"><i className="fa fa-compress" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-product.html">Product Title Here</a></h3>
                <div className="review">
                  <ul>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li className="uncolor"><a href="index.html"><i className="fa fa-star" /></a></li>
                  </ul>
                </div>
                <span className="regular-price">
                  <span className="product-price">$59.00</span>
                </span>
              </div>
            </div>
            <div className="single-product-store">
              <div className="single-product">
                <a href="index.html"><img src="img/product/product4.png" alt="product" /></a>
                <div className="overlay" />
                <div className="product-info">
                  <ul>
                    <li><a href="index.html" title="Cart"><i className="fa fa-shopping-cart" /></a></li>
                    <li><a href="index.html" title="Whishlist"><i className="fa fa-heart-o" /></a></li>
                    <li><a href="index.html" title="Campare"><i className="fa fa-compress" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-product.html">Product Title Here</a></h3>
                <div className="review">
                  <ul>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li className="uncolor"><a href="index.html"><i className="fa fa-star" /></a></li>
                  </ul>
                </div>
                <span className="regular-price">
                  <span className="product-price">$59.00</span>
                </span>
              </div>
            </div>
            <div className="single-product-store">
              <div className="single-product">
                <a href="index.html"><img src="img/product/product1.png" alt="product" /></a>
                <div className="overlay" />
                <div className="product-info">
                  <ul>
                    <li><a href="index.html" title="Cart"><i className="fa fa-shopping-cart" /></a></li>
                    <li><a href="index.html" title="Whishlist"><i className="fa fa-heart-o" /></a></li>
                    <li><a href="index.html" title="Campare"><i className="fa fa-compress" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <h3><a href="single-product.html">Product Title Here</a></h3>
                <div className="review">
                  <ul>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li><a href="index.html"><i className="fa fa-star" /></a></li>
                    <li className="uncolor"><a href="index.html"><i className="fa fa-star" /></a></li>
                  </ul>
                </div>
                <span className="regular-price">
                  <span className="product-price">$59.00</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End online store area */}
      {/* Counter Area Start Here */}
      <div className="counter-area" style={{backgroundImage: 'url("img/banner/counter-back.jpg")'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 counter1-box wow fadeInDown" data-wow-duration=".5s" data-wow-delay=".20s">
              <h2 className="counter">1520</h2>
              <p>Satisfied Customers</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 counter1-box wow fadeInDown" data-wow-duration=".5s" data-wow-delay=".40s">
              <h2 className="counter">23</h2>
              <p>Trainers</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 counter1-box wow fadeInDown" data-wow-duration=".5s" data-wow-delay=".60s">
              <h2 className="counter">199</h2>
              <p>Received Awards</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 counter1-box wow fadeInDown" data-wow-duration=".5s" data-wow-delay=".80s">
              <h2 className="counter">130</h2>
              <p>Equipments</p>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area End Here */}
      {/* Start latest news area */}
      <div className="latest-news-area nav-on-hover">
        <div className="container">
          <div className="section-title">
            <h2>Latest News</h2>
          </div>
        </div>
        <div className="container">
          <div className="gym-carousel nav-control-top" data-loop="true" data-items={3} data-margin={30} data-autoplay="false" data-autoplay-timeout={10000} data-smart-speed={2000} data-dots="false" data-nav="true" data-nav-speed="false" data-r-x-small={1} data-r-x-small-nav="true" data-r-x-small-dots="false" data-r-x-medium={1} data-r-x-medium-nav="true" data-r-x-medium-dots="false" data-r-small={2} data-r-small-nav="true" data-r-small-dots="false" data-r-medium={3} data-r-medium-nav="true" data-r-medium-dots="false" data-r-large={3} data-r-large-nav="true" data-r-large-dots="false">
            <div className="single-latest-news">
              <div className="single-news">
                <div className="single-image"><img src="img/news1.jpg" alt="news1" /></div>
                <div className="date">20
                  <br />Jan
                  <br />2016</div>
              </div>
              <div className="news-content">
                <h3><a href="single-news.html">Body Combat</a></h3>
                <p>BodyCombat is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...</p>
              </div>
            </div>
            <div className="single-latest-news">
              <div className="single-news">
                <div className="single-image"><img src="img/news2.jpg" alt="news2" /></div>
                <div className="date">20
                  <br />Jan
                  <br />2016</div>
              </div>
              <div className="news-content">
                <h3><a href="single-news.html">Zumba Fitness</a></h3>
                <p>BodyCombat is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...</p>
              </div>
            </div>
            <div className="single-latest-news">
              <div className="single-news">
                <div className="single-image"><img src="img/news3.jpg" alt="news3" /></div>
                <div className="date">20
                  <br />Jan
                  <br />2016</div>
              </div>
              <div className="news-content">
                <h3><a href="single-news.html">Running Practice</a></h3>
                <p>BodyCombat is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...</p>
              </div>
            </div>
            <div className="single-latest-news">
              <div className="single-news">
                <div className="single-image"><img src="img/news1.jpg" alt="news1" /></div>
                <div className="date">20
                  <br />Jan
                  <br />2016</div>
              </div>
              <div className="news-content">
                <h3><a href="single-news.html">Body Combat</a></h3>
                <p>BodyCombat is the empowering cardio workout are where you are exercitation ullamco totally unleashed. This fiercely ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End latest news area */}
      {/* Start logo showcase area */}
      <div className="logo-showcase-area nav-on-focus">
        <div className="container">
          <div className="gym-carousel nav-control-middle-opacity" data-loop="true" data-items={6} data-margin={30} data-autoplay="false" data-autoplay-timeout={10000} data-smart-speed={2000} data-dots="false" data-nav="true" data-nav-speed="false" data-r-x-small={2} data-r-x-small-nav="true" data-r-x-small-dots="false" data-r-x-medium={3} data-r-x-medium-nav="true" data-r-x-medium-dots="false" data-r-small={4} data-r-small-nav="true" data-r-small-dots="false" data-r-medium={5} data-r-medium-nav="true" data-r-medium-dots="false" data-r-large={6} data-r-large-nav="true" data-r-large-dots="false">
            <div className="single-logo-area">
              <div className="single-logo">
                <a href="index.html"><img src="img/client/1.jpg" alt="client1" /></a>
              </div>
            </div>
            <div className="single-logo-area">
              <div className="single-logo">
                <a href="index.html"><img src="img/client/2.jpg" alt="client2" /></a>
              </div>
            </div>
            <div className="single-logo-area">
              <div className="single-logo">
                <a href="index.html"><img src="img/client/3.jpg" alt="client3" /></a>
              </div>
            </div>
            <div className="single-logo-area">
              <div className="single-logo">
                <a href="index.html"><img src="img/client/4.jpg" alt="client4" /></a>
              </div>
            </div>
            <div className="single-logo-area">
              <div className="single-logo">
                <a href="index.html"><img src="img/client/5.jpg" alt="client5" /></a>
              </div>
            </div>
            <div className="single-logo-area">
              <div className="single-logo">
                <a href="index.html"><img src="img/client/6.jpg" alt="client6" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End logo showcase area */}
      {/* Start footer Area */}
  </main>
);

export default Main;

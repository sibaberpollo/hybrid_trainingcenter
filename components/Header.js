/* eslint-disable @next/next/no-img-element */

const Header = () => (
  <header className="main-header header-style1" id="sticker">
    <div className="header-top-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="logo-area">
              <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-10">
            <div className="main-menu">
              <nav>
                <ul>
                  <li className="active"><a href="index.html">Home</a>
                    <ul className="mega-menu-dropdown2">
                      <li className="single-mega-menu">
                        <a href="index.html">Home 1</a>
                        <a href="index2.html">Home 2</a>
                        <a href="index3.html">Home 3</a>
                        <a href="index4.html">Home 4</a>
                        <a href="index5.html">Home 5</a>
                      </li>
                      <li className="single-mega-menu">
                        <a href="../one-page/index.html">Home 1 (One Page)</a>
                        <a href="../one-page/index2.html">Home 2 (One Page)</a>
                        <a href="../one-page/index3.html">Home 3 (One Page)</a>
                        <a href="../one-page/index4.html">Home 4 (One Page)</a>
                        <a href="../one-page/index5.html">Home 5 (One Page)</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="index.html">Classes</a>
                    <ul>
                      <li><a href="classes.html">Classes</a></li>
                      <li><a href="single-classes.html">Single Classes</a></li>
                    </ul>
                  </li>
                  <li><a href="schedule.html">Schedule</a></li>
                  <li><a href="trainer.html">Trainers</a></li>
                  <li><a href="index.html">News</a>
                    <ul>
                      <li><a href="news.html">News</a></li>
                      <li><a href="single-news.html">News Details</a></li>
                      <li className="has-child-menu"><a href="index.html">Demo Menu</a>
                        <ul className="thired-level">
                          <li><a href="index.html">Demo Menu 1</a></li>
                          <li><a href="index.html">Demo Menu 2</a></li>
                          <li><a href="index.html">Demo Menu 3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="index.html">Pages</a>
                    <ul className="mega-menu-dropdown">
                      <li className="single-mega-menu">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="classes.html">Classes</a>
                        <a href="schedule.html">Schedule</a>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li className="single-mega-menu">
                        <a href="trainer.html">Our Trainer</a>
                        <a href="single-trainer.html">Trainer Details</a>
                        <a href="single-classes.html">Single Classes</a>
                        <a href="news.html">News</a>
                        <a href="single-news.html">News Details</a>
                      </li>
                      <li className="single-mega-menu">
                        <a href="store-grid.html">Store Grid View</a>
                        <a href="store-list.html">Store List View</a>
                        <a href="single-product.html">Single product</a>
                        <a href="page.html">Single Page</a>
                        <a href="404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 hidden-sm">
            <div className="header-top-right">
              <ul>
                <li>
                  <div className="header-top-search search-box">
                    <form>
                      <input className="search-text" type="text" placeholder="Search Here..." />
                      <a className="search-button" href="index.html">
                        <i className="fa fa-search" aria-hidden="true" />
                      </a>
                    </form>
                  </div>
                </li>
                <li>
                  <a href="index.html" className="cart-area floatright">
                    <i className="fa fa-shopping-cart" /><span>2</span>
                  </a>
                  <ul>
                    <li>
                      <div className="cart-single-product">
                        <div className="media">
                          <div className="pull-left cart-product-img">
                            <a href="index.html">
                              <img className="media-object" src="img/product/cart-img.png" alt="product" />
                            </a>
                          </div>
                          <div className="media-body cart-content">
                            <h4 className="media-heading"><a href="index.html">Product Title Here</a></h4>
                            <a href="index.html" className="trash"><i className="fa fa-trash-o" /></a>
                            <p>Quantity : 1</p>
                            <div className="cart-product-price">
                              <a href="index.html">$49</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="cart-single-product">
                        <div className="media">
                          <div className="pull-left cart-product-img">
                            <a href="index.html">
                              <img className="media-object" src="img/product/cart-img.png" alt="product" />
                            </a>
                          </div>
                          <div className="media-body cart-content">
                            <h4 className="media-heading"><a href="index.html">Product Title Here</a></h4>
                            <a href="index.html" className="trash"><i className="fa fa-trash-o" /></a>
                            <p>Quantity : 1</p>
                            <div className="cart-product-price">
                              <a href="index.html">$99</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><a href="checkout.html" className="checkout-button">Checkout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mobile-menu-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mobile-menu">
              <nav id="dropdown">
                <ul>
                  <li><a href="index.html">Home</a>
                    <ul>
                      <li><a href="index.html">Home 01</a></li>
                      <li><a href="index2.html">Home 02</a></li>
                      <li><a href="index3.html">Home 03</a></li>
                      <li><a href="index4.html">Home 04</a></li>
                      <li><a href="index5.html">Home 05</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="classes.html">Classes</a>
                    <ul>
                      <li><a href="single-classes.html">Single Classes</a></li>
                    </ul>
                  </li>
                  <li><a href="schedule.html">Schedule</a></li>
                  <li><a href="news.html">News</a>
                    <ul>
                      <li><a href="single-news.html">News Details</a></li>
                      <li className="has-child-menu"><a href="index.html">Demo Menu</a>
                        <ul className="thired-level">
                          <li><a href="index.html">Demo Menu 1</a></li>
                          <li><a href="index.html">Demo Menu 2</a></li>
                          <li><a href="index.html">Demo Menu 3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="page.html">Pages</a>
                    <ul className="mega-menu-area">
                      <li><a href="trainer.html">Our Trainer</a></li>
                      <li><a href="single-trainer.html">Trainer Details</a></li>
                      <li><a href="gallery.html">Gallery</a></li>
                      <li><a href="store-grid.html">Store Grid View</a></li>
                      <li><a href="store-list.html">Store List View</a></li>
                      <li><a href="single-product.html">Single product</a></li>
                      <li><a href="404.html">404 Page</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;


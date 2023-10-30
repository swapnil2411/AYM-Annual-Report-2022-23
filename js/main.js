$(document).ready(function(){

    // Common Header
    class MyHeader extends HTMLElement{
        connectedCallback() {
            this.innerHTML = `
            <header>
    <div class="navbar_area">

      <div class="menu_toogle">
        <div class="hamburger">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>MENU</span>
        </div>
      </div>
      <div class="logo_area">
        <a href="index.html">
          <img src="images/aym-logo.png" alt="logo" class="img-fluid">
        </a>
      </div>
    </div>
    <aside>
      <div class="slider_logo">
        <a href="index.html">
          <img src="images/aym-logo.png" alt="logo" class="img-fluid">
        </a>
        <div class="close_slider">
          <div class="close_menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" />
            </svg>
            <span>Close</span>
          </div>
        </div>
      </div>
      <div class="slider_menu">
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne"
                  aria-expanded="false" aria-controls="collapseOne">
                  <span>Organisational Outline
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z" />
                  </svg>
                </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                <ul>
                  <li><a href="mdmessage.html">- MD's Message</a></li>
                  <li><a href="boardmembers.html">- Board Members</a></li>
                  <li><a href="companyoverview.html">- Company Overview</a></li>
                  <li><a href="index.html#essential_metrics_area">- Essential Metrics</a></li>
                  <li><a href="ourjourney.html">- Journey From Inception to Implementation</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="false" aria-controls="collapseTwo">
                  <span>Nurturing Excellence to Drive Transformation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z" />
                  </svg>
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                <ul>
                  <li><a href="growthwithpurpose.html">- Growth with Purpose</a></li>
                  <li><a href="valuecreationmodel.html">- Value Creation Model</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="false" aria-controls="collapseThree">
                  <span>Annual Business Review</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293Z" />
                  </svg>
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
                <ul>
                  <li><a href="quarterlyresults.html">- Quarterly Financials</a></li>
                  <li><a href="transformationwithtechnology.html">- Transformation with Technology</a></li>
                  <li><a href="putpeopleonpedestal.html">- Putting People on a Pedestal</a></li>
                  <li><a href="caringcommunity.html">- Caring for Communities</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingFive">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive"
                  aria-expanded="false" aria-controls="collapseFive">
                  <a href="index.html#download_centre">Financial Statements</a>
                </button>
              </h5>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingSix">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix"
                  aria-expanded="false" aria-controls="collapseSix">
                  <a href="#">Auditor’s Report - Standalone Statements</a>
                </button>
              </h5>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingSeven">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven"
                  aria-expanded="false" aria-controls="collapseSeven">
                  <a href="#">Auditor’s Report - Consolidated Statements</a>
                </button>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </header>
            `
        }
    }
    customElements.define('my-header', MyHeader);
    //Menu Toggle
    $('.hamburger').on('click', function(){
        $('aside').addClass('show_sidebar');
        $(this).css('visibility','hidden');
    });

    $('.close_menu').on('click', function(){
        $('aside').removeClass('show_sidebar');
        $('.hamburger').css('visibility','visible')
    })

    $('#microsite_navigate_carousel').owlCarousel({
        loop:false,
        dots: false,
        margin:0,
        nav:true,
        navText: ['<span class="iconify" data-icon="bi:arrow-left"></span>','<span class="iconify" data-icon="bi:arrow-right"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $(".banner_area").addClass("animation_banner");

  //   let tl = gsap.timeline({
  //     scrollTrigger:{
  //         trigger: "#home_excellence_area",
  //         start: "50% 50%",
  //         end: "150% 50%",
  //         //markers: true,
  //         scrub: true,
  //         pin: true,
  //     }
  // })
  
  // tl.to('.inner_top_con', {
  //     rotateX: "110deg",
  //     opacity: 0,
  //     duration: 2,
  // },'banner_txt')
  
  // tl.to('.inner_bottom_con', {
  //     rotateX: "-110deg",
  //     opacity: 0,
  //     duration: 2,
  // },'banner_txt')
  
  // tl.to('.nurturing_img', {
  //     width: "100%",
  //     height: "100%",
  //     scale: 1.1,
  //     duration: 5,
  // })

  new WOW().init();

  $('.count-up').countUp({
    'time': 2000,
  });
})
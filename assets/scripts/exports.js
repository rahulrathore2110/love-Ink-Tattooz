let navhead = () => {
  return `<header>
            <div class="nav-social" id="home">
                <div><a href="https://api.whatsapp.com/send?phone=7838823923" target="_blank"><i
                            class="fa-brands fa-whatsapp"></i></i></a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100065522500072&mibextid=LQQJ4d"
                        target="_blank"><i class="fa-brands fa-facebook-f"></i></a></div>

                <div><a href="https://www.instagram.com/loveinktattooz/" target="_blank"><i
                            class="fa-brands fa-instagram"></i></a></div>
                <div><a href="https://in.pinterest.com/loveinktattooz/?invite_code=b3aaad4ac099472492f5a9f23b0f7bbe&sender=670121756962470856"
                        target="_blank"><i class="fa-brands fa-pinterest-p"></i></a></div>
            </div>
            <div id="navbar">
                <div class="logo">
                    <a href="#"><img src="./assets/images/logo.png" alt="logo"></a>
                </div>
                <div id="close">
                    <a href="#"><i class="fa-solid fa-xmark"></i></a>
                </div>
                <div class="nav-menu">
                    <div class="nav-items">
                        <ul>
                            <li><a href="./index.html">Home</a></li>

                            <li><a href="./service.html">Service</a></li>

                            <li><a href="./gallary.html">Gallary</a></li>

                            <li><a href="./about.html">About Us</a></li>

                            <li><a href="./contact.html">Contact US</a></li>
                        </ul>
                    </div>
                </div>
                <div class="hamburger" id="navbars">
                    <a href="#"><i class="fa-solid fa-bars"></i></a>
                </div>


            </div>
        </header>`;
};

let footersec = () => {
  return ` <footer>


            <div class="co-info">
                <div>
                    <!-- <div>
                        <img src="./assets/images/footer-logo.png" alt="">
                    </div> -->

                    <h4>Address</h4>
                    <p>G-floor C-100, 40 Feet Road, Molar Band Extn Badarpur New Delhi-110044</p>
                    <p><a href="tel:7838823923"><i class="fa-solid fa-link"></i>  7838823923</a></p>
                    <p><a href="tel:9354931319"><i class="fa-solid fa-link"></i>  9354931319</a></p>
                    <p><a href="mailto:loveinktattooz@gmail.com"> <i class="fa-solid fa-link"></i> loveinktattooz@gmail.com</a></p>
                </div>
                <div>
                    <h4>Hour of Operations</h4>
                    <p>Monday : 11:30AM - 09:30AM</p>
                    <p>Tuesday : 11:30AM - 09:30AM</p>
                    <p>Wednesday : 11:30AM - 09:30AM</p>
                    <p>Thursday : 11:30AM - 09:30AM</p>
                    <p>Friday : 11:30AM - 09:30AM</p>
                    <p>Saturday : 11:30AM - 09:30AM</p>
                    <p>Sunday : 11:30AM - 09:30AM</p>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3506.648915903541!2d77.3035087754956!3d28.490117975742784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI5JzI0LjQiTiA3N8KwMTgnMjEuOSJF!5e0!3m2!1sen!2sin!4v1693308796936!5m2!1sen!2sin"
                    width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <p>2023 © Copyright Loveinktattooz All rights Reserved. </p>

        </footer>`;
};

export { navhead, footersec };

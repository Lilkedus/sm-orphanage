import Link from "next/link";
import "./style.css";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="about-us-wrapper">
                  <div className="about-us">ABOUT US</div>
                </div>
                <div className="orphan-care-wrapper">
                  <div className="orphan-care">ORPHAN CARE</div>
                </div>
                <div className="church-partnerships-wrapper">
                  <div className="church-partnerships">CHURCH PARTNERSHIPS</div>
                </div>
                <div className="adoption-wrapper">
                  <div className="adoption">ADOPTION</div>
                </div>
                <div className="give-wrapper">
                  <div className="give">GIVE</div>
                </div>
                <div className="foster-care-wrapper">
                  <div className="foster-care">FOSTER CARE</div>
                </div>
              </div>
            </div>
            <div className="frame-3">
              <div className="frame-wrapper">
                <img
                  className="img"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/e358983e95b00bc91dac10e99c3a2b3b/img/frame@2x.png"
                />
              </div>
              <div className="img-wrapper">
                <img
                  className="frame-4"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/e358983e95b00bc91dac10e99c3a2b3b/img/frame-3@2x.png"
                />
              </div>
              <div className="frame-5">
                <img
                  className="frame-6"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/e358983e95b00bc91dac10e99c3a2b3b/img/frame-3@2x.png"
                />
              </div>
              <div className="frame-7">
                <img
                  className="frame-8"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/e358983e95b00bc91dac10e99c3a2b3b/img/frame-3@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-9">
          <form>
            <div className="frame-10">
              <div className="frame-11">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="frame-12">
                      <div className="frame-13">
                        <div className="frame-14">
                          <div className="frame-15">
                            <input type="text" required className="rectangle" />
                            <div className="text-wrapper">First</div>
                          </div>
                          <div className="frame-16">
                            <input type="text" required className="rectangle" />
                            <div className="text-wrapper-2">Last</div>
                          </div>
                        </div>
                        <div className="your-name">
                          <span className="span">Your Name </span>
                          <span className="text-wrapper-3">*</span>
                        </div>
                      </div>
                      <div className="frame-17">
                        {/* TODO: Fix form requirement and submissions functionality */}
                        <input type="text" required className="rectangle-2" />
                        <div className="your-email">
                          <span className="span">Your Email </span>
                          <span className="text-wrapper-3">*</span>
                        </div>
                      </div>
                      <div className="frame-18">
                        {/* TODO: Fix form requirement and submissions functionality */}
                        <input type="text" required className="rectangle-3" />
                        <div className="your-message">
                          <span className="span">Your Message </span>
                          <span className="text-wrapper-3">*</span>
                        </div>
                      </div>
                    </div>
                    <Link href="/">
                        {/* TODO: Fix form requirement and submissions functionality */}
                      <div className="rectangle-4" />
                      <div className="text-wrapper-4">Send</div>
                    </Link>
                  </div>
                </div>
                <p className="p">
                  We would love to hear from you! Please fill out this form and
                  we will get in touch with you shortly.
                </p>
              </div>
              <div className="frame-19">
                <img
                  className="IMAGE"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/e358983e95b00bc91dac10e99c3a2b3b/img/image-2@2x.png"
                />
                <img
                  className="IMAGE-2"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/e358983e95b00bc91dac10e99c3a2b3b/img/image-1@2x.png"
                />
                <img
                  className="IMAGE-3"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/e358983e95b00bc91dac10e99c3a2b3b/img/image@2x.png"
                />
                <div className="frame-20">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-5">Phone:</div>
                    <div className="text-wrapper-6">+251 4421286</div>
                  </div>
                </div>
                <div className="overlap">
                  <div className="text-wrapper-7">Email Address:</div>
                  <a
                    className="text-wrapper-8"
                    href="mailto:info@sosenfantsethiopie.org"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    info@sosenfantsethiopie.org
                  </a>
                </div>
                <div className="overlap-2">
                  <div className="text-wrapper-9">Physical Address:</div>
                  <p className="text-wrapper-10">
                    Addis Ababa, Bole Sub City, Woreda 01, Kebele 03, House No.
                    15
                  </p>
                </div>
              </div>
            </div>
          </form>
          <h1 className="h-1">Contact Us</h1>
          <p className="text-wrapper-11">Please contact us any time</p>
        </div>
        <div className="group">
          <Link href="/">
            <img
              className="soleil-matinal-logo"
              alt="Soleil matinal logo"
              src="https://generation-sessions.s3.amazonaws.com/e358983e95b00bc91dac10e99c3a2b3b/img/soleil-matinal-logo-1@2x.png"
            />
          </Link>

          <div className="group-2">
            <div className="text-wrapper-12">
              <Link href="/about-us">About Us</Link>
            </div>
            <div className="text-wrapper-13">
              <Link href="/contact-us">Contact Us</Link>
            </div>
            <div className="text-wrapper-14">
              <Link href="/about-us#services">Services</Link>
            </div>
            <Link href="/donate">
              <div className="group-3">
                <div className="overlap-group-4">
                  <div className="rectangle-5" />
                  <div className="text-wrapper-15">Donate</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-3">
            <div className="rectangle-6" />
            <div className="bringing">BRINGING</div>
            <div className="joy">JOY</div>
            <div className="text-wrapper-16">&amp;</div>
            <div className="purpose">PURPOSE</div>
            <div className="to-orphans">TO ORPHANS</div>
            <div className="group-4">
              <div className="adoption-2">ADOPTION</div>
              <div className="sponsoring-a-child">SPONSORING A CHILD</div>
              <div className="orphan-care-2">ORPHAN CARE</div>
              <div className="foster-care-2">FOSTER CARE</div>
            </div>
            <div className="overlap-4">
              <p className="text-wrapper-17">Addis Ababa, Bole Sub City</p>
              <div className="text-wrapper-18">Privacy</div>
              <div className="text-wrapper-19">Donor Policy</div>
            </div>
            <div className="overlap-group-5">
              <div className="text-wrapper-20">+251 4421286</div>
              <div className="text-wrapper-21">Contact Us</div>
            </div>
            <img
              className="soleil-matinal-low"
              alt="Soleil matinal low"
              src="https://generation-sessions.s3.amazonaws.com/e358983e95b00bc91dac10e99c3a2b3b/img/soleil-matinal-low-resolution-logo-white-on-transparent-backgrou@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

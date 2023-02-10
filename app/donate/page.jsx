import Link from "next/link";
import "./style.css";

export default function Frame() {
  return (
    <div className="donate">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="rectangle" />
          <div className="div-wrapper">
            <div className="div">
                <Link href="/">
                    <img
                        className="soleil-matinal-logo"
                        alt="Soleil matinal logo"
                        src="https://generation-sessions.s3.amazonaws.com/c423df260d286104a11be81c818e3500/img/soleil-matinal-logo-1@2x.png"
                    />
                </Link>
              <div className="group-wrapper">
                    <Link href="/about-us">
                <div className="group">
                  <div className="overlap-group">
                        <div className="about-soleil-matinal">ABOUT SOLEIL MATINAL</div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="frame-2">
            <div className="rectangle-2" />
            <div className="frame-3">
              <div className="rectangle-3" />
              <div className="overlap">
                <div className="rectangle-4" />
                <div className="group-2">
                  <div className="rectangle-4" />
                  <div className="group-3">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <div className="text-wrapper">10009682935</div>
                      </div>
                    </div>
                    <div className="text-wrapper-2">Comercial Banking Information</div>
                  </div>
                </div>
              </div>
              <div className="group-4">
                <div className="rectangle-4" />
                <div className="group-5">
                  <div className="group-6">
                    <div className="overlap-group-2">
                      <div className="text-wrapper">10002050837</div>
                    </div>
                  </div>
                  <div className="text-wrapper-2">Zemen Banking Information</div>
                </div>
              </div>
              <div className="group-7">
                <div className="rectangle-4" />
                <div className="group-8">
                  <div className="group-9">
                    <div className="overlap-group-2">
                      <div className="text-wrapper">10001293947</div>
                    </div>
                  </div>
                  <div className="text-wrapper-2">Telebirr</div>
                </div>
              </div>
            </div>
            <div className="frame-4">
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="frame-5">
                    <div className="overlap-group-3">
                      <p className="p">Every penny of your gift goes straight to caring for orphans.</p>
                      <div className="text-wrapper-3">Your gift is tax-deductible.</div>
                    </div>
                    <div className="rectangle-5" />
                  </div>
                  <p className="soleil-matinal">
                    Soleil Matinal Orphanage
                    <br />
                    Addis Ababa
                    <br />
                    Kebele 03
                    <br />
                    Sub City, Woreda 01
                    <br />
                    ET
                  </p>
                </div>
              </div>
              <div className="frame-6">
                <h1 className="h-1">Thanks for your generous support!</h1>
                <p className="text-wrapper-4">100% of your received donation will directly help children in need.</p>
                <p className="a-gift-to-where-most">
                  A gift to where most needed will help orphans become sons &amp; daughters as well as provide essential
                  support for ongoing ministry around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

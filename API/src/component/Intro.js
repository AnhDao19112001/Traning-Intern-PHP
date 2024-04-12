import Header from "./Header";

function Intro() {
    return(
        <>
        <Header style={{ position:'sticky', position: '-webkit-sticky', top: 0 }}/>
        <section className="bg-light pt-5 text-center">
      <div className="container">
        <div className="pb-5 pt-5 row">
          <div className="col-lg-8 col-xl-6 mx-auto">
            <h1 className="display-4 fw-normal mb-3 text-dark">
              Todo app
            </h1>
            <p className="fw-light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor. Aliqua id fugiat nostrud irure ex duis ea
              quis id quis ad et. Sunt qui esse pariatur duis deserunt molli.
            </p>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mb-0 me-auto ms-auto mt-0 pb-0 pt-0">
            <div
              className="bg-white m-0 p-0"
              style={{ borderRadius: "0.5rem" }}
            >
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_fbzszqak.json"
                background="transparent"
                speed={1}
                style={{ width: "100%", background: "none" }}
                loop=""
                autoPlay=""
                className="m-0 p-0"
              />
              <div id="bodymovin-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-dark">
      {" "}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="currentColor"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        height={80}
        width="100%"
        className="bg-light d-block text-white"
      >
        <path d="M 100 100 V 0 L 0 100" />{" "}
      </svg>{" "}
    </div>
    <section className="pb-5 pt-5 text-center">
      <div className="container pb-5 pt-5">
        <div className="align-items-center mb-3 row">
          <div className="col-lg-9 ms-auto me-auto">
            <h2 className="fw-normal h1 mb-1 text-dark">
            User-ready performance and control
            </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xl-3 pb-3 pt-3">
            {" "}
            <a
              href="#"
              className="border btn d-block link-secondary pb-5 pe-4 ps-4 pt-5"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={80}
                height={80}
                fill="currentColor"
                className="mb-3 text-primary"
              >
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z" />
              </svg>
              <h3 className="fw-normal h5 text-dark">Simple, yet powerful</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.
              </p>
              <span className="border-bottom d-inline-block text-dark">
                Learn More
              </span>
            </a>{" "}
          </div>
          <div className="col-sm-6 col-xl-3 pb-3 pt-3">
            {" "}
            <a
              href="#"
              className="border btn d-block link-secondary pb-5 pe-4 ps-4 pt-5"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={80}
                height={80}
                fill="currentColor"
                className="mb-3 text-primary"
              >
                <path d="M5.636 12.707l1.828 1.829L8.88 13.12 7.05 11.293l1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414L13.12 8.88l1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 5.636 9.878z" />
              </svg>
              <h3 className="fw-normal h5 text-dark">Buil-in AI Feature</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.
              </p>
              <span className="border-bottom d-inline-block text-dark">
                Learn More
              </span>
            </a>{" "}
          </div>
          <div className="col-sm-6 col-xl-3 pb-3 pt-3">
            {" "}
            <a
              href="#"
              className="border btn d-block link-secondary pb-5 pe-4 ps-4 pt-5"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={80}
                height={80}
                fill="currentColor"
                className="mb-3 text-primary"
              >
                <path d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2z" />
              </svg>
              <h3 className="fw-normal h5 text-dark">Cloud Based</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.
              </p>
              <span className="border-bottom d-inline-block text-dark">
                Learn More
              </span>
            </a>{" "}
          </div>
          <div className="col-sm-6 col-xl-3 pb-3 pt-3">
            {" "}
            <a
              href="#"
              className="border btn d-block link-secondary pb-5 pe-4 ps-4 pt-5"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={80}
                height={80}
                fill="currentColor"
                className="mb-3 text-primary"
              >
                <path d="M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zm10 5h3v9h-3v3h-2v-3h-3v-9h3V7h2v3z" />
              </svg>
              <h3 className="fw-normal h5 text-dark">Advanced Encryption</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.
              </p>
              <span className="border-bottom d-inline-block text-dark">
                Learn More
              </span>
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
    <section className="pb-5 pt-5">
      <div className="container pb-4 pt-4">
        <div className="align-items-center row">
          <div className="col-lg-6 ms-auto order-lg-2 py-3 text-center">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_sk5h1kfn.json"
              background="transparent"
              speed={1}
              style={{ width: "100%", height: "auto" }}
              loop=""
              autoPlay=""
            />
          </div>
          <div className="col-lg-5 order-lg-1 py-3">
            <h2 className="fw-normal h1 mb-2 text-dark">
              We analyze our services from every direction
            </h2>
            <p className="fw-light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor. Aliqua id fugiat nostrud irure ex duis ea
              quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
              dolore cillum minim tempor enim
            </p>{" "}
            <a
              href="#"
              className="btn btn-primary fw-light pb-2 ps-3 pe-3 pt-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="container pb-4 pt-4">
        <div className="align-items-center row">
          <div className="col-lg-6 me-lg-3 pb-3 pt-3 text-center">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_kwgmvgfy.json"
              background="transparent"
              speed={1}
              style={{ width: "100%", height: "auto" }}
              loop=""
              autoPlay=""
            />
          </div>
          <div className="col-lg-5 pb-3 pt-3">
            <h2 className="fw-normal h1 mb-2 text-dark">
              Our proven system is made to succeed
            </h2>
            <p className="fw-light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor. Aliqua id fugiat nostrud irure ex duis ea
              quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
              dolore cillum minim tempor enim
            </p>{" "}
            <a
              href="#"
              className="btn btn-primary fw-light pb-2 ps-3 pe-3 pt-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>{" "}
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="currentColor"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height={64}
      width="100%"
      className="d-block text-primary"
    >
      <path d="M 100 100 V 0 L 0 100" />{" "}
    </svg>
    <section className="bg-primary pb-5 pt-5 text-white">
      <div className="container pb-3 pt-3">
        <div className="align-items-center row">
          <div className="col-xl-5 mt-n5 order-xl-2 pb-3 pt-3">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_4ayeqfsd.json"
              background="transparent"
              speed={1}
              style={{ width: "100%", height: "auto" }}
              loop=""
              autoPlay=""
            />
          </div>
          <div className="col-xl-7 ms-auto order-xl-1 pb-3 pt-3">
            <h2 className="fw-normal h1 mb-2">
              Everything you need to manage in one place
            </h2>
            <p className="fw-light mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor. Aliqua id fugiat nostrud irure ex duis ea
              quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
              dolore cillum minim tempor enim
            </p>
            <div className="row">
              <div className="col-md-4 pb-3 pt-3">
                <div className="text-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={60}
                    height={60}
                    fill="currentColor"
                    className="mb-3"
                  >
                    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z" />
                  </svg>
                  <h3 className="fw-normal h5">Premium Support</h3>
                  <p className="mb-0 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae congue tortor.
                  </p>
                </div>
              </div>
              <div className="col-md-4 pb-3 pt-3">
                <div className="text-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={60}
                    height={60}
                    fill="currentColor"
                    className="mb-3"
                  >
                    <path d="M5.636 12.707l1.828 1.829L8.88 13.12 7.05 11.293l1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414L13.12 8.88l1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 5.636 9.878z" />
                  </svg>
                  <h3 className="fw-normal h5">Advanced Features</h3>
                  <p className="mb-0 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae congue tortor.
                  </p>
                </div>
              </div>
              <div className="col-md-4 pb-3 pt-3">
                <div className="text-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={60}
                    height={60}
                    fill="currentColor"
                    className="mb-3"
                  >
                    <path d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2z" />
                  </svg>
                  <h3 className="fw-normal h5">99.99% Uptime</h3>
                  <p className="mb-0 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae congue tortor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{" "}
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="currentColor"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height={64}
      width="100%"
      className="bg-primary d-block text-light"
    >
      <path d="M 100 100 V 0 L 0 100" />{" "}
    </svg>
    <section className="bg-light pb-5 pt-5 text-center">
      <div className="container ">
        <div className="align-items-center row">
          <div className="col-xl-10 ms-auto me-auto">
            <div className="bg-primary pb-5 ps-4 pe-4 pt-5 rounded-3 text-white">
              <h2 className="fw-normal h1 mb-2">
                Let's simplify &amp; automate your operations
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>{" "}
              <a
                href="#"
                className="btn btn-light fw-light pb-2 ps-3 pe-3 pt-2"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light pb-5 pt-5 text-center">
      <div className="container pb-4 pt-4">
        <h2 className="fw-normal h1 mb-1 text-dark">
          Be part of something special
        </h2>
        <p className="mb-4">Choose the plan that’s right for you.</p>
        <div className="col-xl-11 ms-auto me-auto px-0">
          <div className="align-items-center justify-content-center row">
            <div className="col-lg-4 col-md-6 py-3">
              <div className="bg-light border rounded text-secondary">
                <div className="align-items-center d-flex fw-light h5 justify-content-center pb-4 pe-3 ps-3 pt-4">
                  {" "}
                  <span className="align-self-start">$</span>{" "}
                  <span className="display-4 fw-normal text-dark">10</span>{" "}
                  <span className="align-self-end">/mo</span>{" "}
                </div>
                <h3 className="bg-dark fw-normal h4 mb-0 pb-3 pe-2 ps-2 pt-3 text-uppercase text-white">
                  Starter
                </h3>
                <div className="pb-5 ps-3 pe-3 pt-4">
                  <ul className="list-unstyled mb-4">
                    <li className="pb-2 pt-2">20 Pages</li>
                    <li className="pb-2 pt-2">10 GB Storage</li>
                    <li className="pb-2 pt-2">500 GB Bandwidth</li>
                    <li className="pb-2 pt-2">Custom Domain</li>
                    <li className="pb-2 pt-2">24/7 Support</li>
                  </ul>{" "}
                  <a
                    href="#"
                    className="btn btn-dark fw-light pb-2 pe-4 ps-4 pt-2"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 py-3">
              <div className="bg-light border rounded text-secondary">
                <div className="align-items-center d-flex fw-light h5 justify-content-center pb-4 ps-3 pe-3 pt-4">
                  {" "}
                  <span className="align-self-start">$</span>{" "}
                  <span className="display-4 fw-normal text-dark">24</span>{" "}
                  <span className="align-self-end">/mo</span>{" "}
                </div>
                <h3 className="bg-primary fw-normal h4 mb-0 pb-3 pe-2 ps-2 pt-3 text-uppercase text-white">
                  Professional
                </h3>
                <div className="pb-5 ps-3 pe-3 pt-4">
                  <ul className="list-unstyled mb-4">
                    <li className="pb-2 pt-2">100 Pages</li>
                    <li className="pb-2 pt-2">100 GB Storage</li>
                    <li className="pb-2 pt-2">2 TB Bandwidth</li>
                    <li className="pb-2 pt-2">Custom Domain</li>
                    <li className="pb-2 pt-2">24/7 Support</li>
                  </ul>{" "}
                  <a
                    href="#"
                    className="btn btn-primary fw-light pb-2 ps-4 pe-4 pt-2"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 py-3">
              <div className="bg-light border rounded text-secondary">
                <div className="align-items-center d-flex fw-light h5 justify-content-center pb-4 ps-3 pe-3 pt-4">
                  {" "}
                  <span className="align-self-start">$</span>{" "}
                  <span className="display-4 fw-normal text-dark">40</span>{" "}
                  <span className="align-self-end">/mo</span>{" "}
                </div>
                <h3 className="bg-dark fw-normal h4 mb-0 pb-3 pe-2 ps-2 pt-3 text-uppercase text-white">
                  Epic
                </h3>
                <div className="pb-5 ps-3 pe-3 pt-4">
                  <ul className="list-unstyled mb-4">
                    <li className="pb-2 pt-2">Unlimited Pages</li>
                    <li className="pb-2 pt-2">Unlimited Storage</li>
                    <li className="pb-2 pt-2">Unlimited Bandwidth</li>
                    <li className="pb-2 pt-2">Custom Domain</li>
                    <li className="pb-2 pt-2">24/7 Support</li>
                  </ul>{" "}
                  <a
                    href="#"
                    className="btn btn-dark fw-light pb-2 ps-4 pe-4 pt-2"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{" "}
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="currentColor"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height={64}
      width="100%"
      className="bg-light d-block text-dark"
    >
      <path d="M 100 100 V 0 L 0 100" />{" "}
    </svg>
        </>
    )
}
export default Intro;
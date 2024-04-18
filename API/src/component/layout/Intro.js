import Header from "./Header";
import { NavLink } from "react-router-dom";
function Intro() {
    return(
        <>
        <Header style={{ position:'sticky', position: '-webkit-sticky', top: 0 }}/>
        <section className="bg-light pt-5 text-center">
      <div className="container">
        <div className="pb-5 pt-5 row">
          <div className="col-lg-8 col-xl-6 mx-auto">
            <h1 className="display-4 fw-normal mb-3 text-dark">
              Todo App
            </h1>
            <p className="fw-light mb-4 h2">
            To Do gives you focus, from work to entertainment. 
            </p>{" "}
            <p>
              <NavLink to={`/login`} className="btn btn-primary" >Get Start</NavLink>
            </p>
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
              <h3 className="fw-normal h5 text-dark">Get More Tasks Done</h3>
              <p>
              Todo Cloud keeps you on task by helping you see what’s most important and gives you tools that help you plan how to get things done.
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
              <h3 className="fw-normal h5 text-dark">Get in Sync</h3>
              <p>
              With powerful and intuitive features that help you organize and prioritize your todo, you'll love your newfound ability to stay focused on getting more done in less time.
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
              <h3 className="fw-normal h5 text-dark">Get Done</h3>
              <p>
              With this goal-setting app supercharging your productivity you’ll strike through your tasks and then have more fun and relaxation with all the time you’ll free up.
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
              <h3 className="fw-normal h5 text-dark">Get Organized</h3>
              <p>
              This smart to-do list app makes it easy to enter, update, delete, search , organize and track your to-dos and visualize your goals and projects.
              </p>
              <span className="border-bottom d-inline-block text-dark">
                Learn More
              </span>
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
    
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
              <NavLink
                to={`/register`}
                className="btn btn-light fw-light pb-2 ps-3 pe-3 pt-2"
              >
                Sign Up Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    
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
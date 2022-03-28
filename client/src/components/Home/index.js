import React from "react";
import "./home.css";
import Auth from "../../utils/auth";
import "../../components/Card/style.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoIosBusiness } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineBusinessCenter } from "react-icons/md";

function Home() {
  if (!Auth.loggedIn()) {
    return (
      <div className="homepage">
        <section className="homeContainer">
          <div className="homeText">
            <h1 className="welcome">welcome to QRad.</h1>
            <p className="description">
              QRad allows you to maintain a list of people you've met in real
              life.
              <br></br>
              <br></br>
              Business cards are useful—until you forget them, run out, or lose
              your new contact’s card. With QRad, you’re always ready to provide
              your contact information, and you always have a record of those
              you’ve met.
              <br></br>
              <br></br>
              Create your digital business card today.
            </p>
          </div>
        </section>
        <center>
          <div className="card">
            <div className="intro">
              <h4>Delores Deville</h4>
              <p className="pronouns">(she/her)</p>

              <p className="tagline">It's business time! </p>
            </div>

            <div className="card-img">
              <img
                alt="delores"
                src="https://i.pinimg.com/originals/75/3d/54/753d54f1c9137aca6bb000234b6abeb4.jpg"
              />
            </div>

            <ul>
              <li>
                <IoIosBusiness />
                Good const
              </li>
              <li>
                <MdOutlineBusinessCenter />
                Librarian
              </li>
              <li>
                <HiOutlineMailOpen /> delores@goodco.com
              </li>
              <li>
                <BsFillTelephoneForwardFill />
                (999)999-999
              </li>
              <li>
                <CgWebsite />
                goodco.com/delores
              </li>
              <li>
                <AiOutlineLinkedin />
                linkedin.com/deloresdeville
              </li>
              <li>
                <AiFillInstagram />
                instagram.com/deloresdeville777
              </li>
            </ul>
          </div>
        </center>
      </div>
    );
  }

  return (
    <>
      <section className="homeContainer">
        <div className="homeText">
          <h1 className="welcome">welcome to QRad.</h1>
          <p className="description">
            QRad allows you to maintain a list of people you've met in real
            life.
            <br></br>
            <br></br>
            Business cards are useful—until you forget them, run out, lose your
            new contact’s card, etc. With QRad, you’re always ready to provide
            your contact information, and you always have a record of those
            you’ve met.
            <br></br>
            <br></br>
            Create your digital business card today.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;

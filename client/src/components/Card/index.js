import React from "react";
import "./style.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoIosBusiness } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineBusinessCenter } from "react-icons/md";

const Card = ({ data }) => {
  if (!data) {
    return <h3>No data here yet!</h3>;
  }
  else {
    console.log(data);
  }

  return (
    <>
      <div className="card">
        <div className="intro">
          <h4>
            {data.firstName} {data.lastName}
          </h4>
          {data.pronouns && <p className="pronouns">({data.pronouns})</p>}
          {data.tagline && <p className="tagline">{data.tagline}</p>}
        </div>
        {data.avatar && (
          <div className="card-img">
            <img alt={data.usernmae} src={data.avatar} />
          </div>
        )}
        <ul>
          {data.company && (
            <li>
              <IoIosBusiness />
              {data.company}
            </li>
          )}
          {data.title && (
            <li>
              <MdOutlineBusinessCenter />
              {data.title}
            </li>
          )}

          {data.email && (
            <li>
              <HiOutlineMailOpen /> {data.email}
            </li>
          )}
          {data.phone && (
            <li>
              <BsFillTelephoneForwardFill />
              {data.phone}
            </li>
          )}
          {data.website && (
            <li>
              <CgWebsite />
              <a href={data.website}> {data.website}</a>
            </li>
          )}
          {data.linkedIn && (
            <li>
              <AiOutlineLinkedin />
              {data.linkedIn}
            </li>
          )}
          {data.instagram && (
            <li>
              <AiFillInstagram />
              {data.instagram}
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Card;

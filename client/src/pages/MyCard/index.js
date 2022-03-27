import React, { useState } from "react";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_CONTACT } from "../../utils/mutations";

const Profile = () => {
  let myContacts = [];
  let myUsername = "";
  const [addContact] = useMutation(ADD_CONTACT);
  const { data: myData } = useQuery(QUERY_ME);
  if (myData) {
    myContacts = myData.me.contacts;
    myUsername = myData.me.username;
    console.log(myData);
  }

  const handleClick = async (user) => {
    try {
      await addContact({
        variables: { _id: user._id },
      });
      myContacts = myData.me.contacts;
      window.location.assign("/contacts");
    } catch (e) {
      console.log(e);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { _id: id },
  });

  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (data) {
    return (
      <>
        <center>
          <button onClick={() => setIsOpen(true)}></button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
          <Card data={data.user.cards[0]} />
          {isOpen && <Modal setIsOpen={setIsOpen} />}
          {!useParams && (
            <button className="btn ml-auto" onClick={handleClick}>
              Add Contact
            </button>
          )}
        </center>
      </>
    );
  }
};

export default Profile;

import React, { useState } from "react";
import { ADD_CARD } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
// import Auth from "../../utils/auth";
import { storage } from "../../utils/firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import "./editform.css";
import { v4 as uuidv4 } from "uuid";

//export and calling function
export default function EditForm() {
  const [addCard] = useMutation(ADD_CARD);
  //targeting formState and then setFormState
  // allows to setup the form for the values so that consologging will work
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    pronouns: "",
    title: "",
    company: "",
    tagline: "",
    email: "",
    phone: "",
    website: "",
    linkedIn: "",
    instagram: "",
  });
  const [selectedImg, setSelectedImg] = useState(null);
  //form state targets specific event values
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const previewImg = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedImg(readerEvent.target.result);
    };
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // use try/catch instead of promises to handle errors
    const uploadImg = ref(storage, `/image/${uuidv4()}`);
    try {
      await uploadString(uploadImg, selectedImg, "data_url").then(
        async (snapshot) => {
          const profileURL = await getDownloadURL(uploadImg);
          // console.log(profileURL);
          await addCard({
            variables: { ...formState, avatar: profileURL },
          });
          window.location.assign("/profile");
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    //adding css into the js file instead of using a css file
    <div id="biz-profile">
      <p className="biz-card">
        {/* missing picture of the business card */}
        create your digital business card
      </p>
      {/* form for business card  */}
      <form onSubmit={handleFormSubmit}>
        <label className="form-label">
          First Name:
          <input
            placeholder="first name"
            onChange={handlechange}
            name="firstName"
            value={formState.firstName}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Last Name:
          <input
            placeholder="last name"
            onChange={handlechange}
            name="lastName"
            value={formState.lastName}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Pronouns:
          <input
            placeholder="pronouns"
            onChange={handlechange}
            name="pronouns"
            value={formState.pronouns}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Title:
          <input
            placeholder="title"
            onChange={handlechange}
            name="title"
            value={formState.title}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Tagline:
          <input
            placeholder="tagline"
            onChange={handlechange}
            name="tagline"
            value={formState.tagline}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Email:
          <input
            placeholder="email"
            onChange={handlechange}
            name="email"
            value={formState.email}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Phone:
          <input
            placeholder="phone"
            onChange={handlechange}
            name="phone"
            value={formState.phone}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Company:
          <input
            placeholder="company"
            onChange={handlechange}
            name="company"
            value={formState.company}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Website:
          <input
            placeholder="website"
            onChange={handlechange}
            name="website"
            value={formState.website}
            className="form-input"
          />
        </label>
        <label className="form-label">
          LinkedIn:
          <input
            placeholder="linkedIn"
            onChange={handlechange}
            name="linkedIn"
            value={formState.LinkedIn}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Instagram:
          <input
            placeholder="instagram"
            onChange={handlechange}
            name="instagram"
            value={formState.Instagram}
            className="form-input"
          />
        </label>
        <label className="form-label">Avatar:</label>
        <input type="file" onChange={previewImg} />
        {selectedImg ? (
          <img src={selectedImg} name={selectedImg} alt="preview" />
        ) : (
          ""
        )}
      </form>
      <button onClick={handleFormSubmit} className="save-btn">
        save
      </button>
    </div>
  );
}

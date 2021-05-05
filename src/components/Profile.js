import { useState, React } from "react";
import "../profile.css";

export function Profile(props) {
  const info = props.info;
  const socket = props.socket;
  const [edit, changeEdit] = useState(false);

  function isEdit() {
    changeEdit(true);
  }

  function onSubmit() {
    changeEdit(false);
    var editAge = document.getElementById("editAge").value;
    if (editAge === "") editAge = info.age;

    var editGender = document.getElementById("editGender").value;
    if (editGender === "") editGender = info.gender;

    var editWeight = document.getElementById("editWeight").value;
    if (editWeight === "") editWeight = info.weight;

    var editHeight = document.getElementById("editHeight").value;
    if (editHeight === "") editHeight = info.height;

    socket.emit("onSubmit", {
      googleID: info.googleID,
      editAge: editAge,
      editGender: editGender,
      editWeight: editWeight,
      editHeight: editHeight,
    });
  }

  return (
    <div className="profilePage">
      <h1>Personal Information</h1>
      <div className="profileBg">
        <div className="profileWrap">
          <div className="profile_head">
            <img src={info.imageUrl} alt="Current users profile pic" />
            <p>
              {info.givenName} {info.familyName}
            </p>
          </div>
          {edit ? (
            <div className="editHeader">
              <h3>Edit Profile Below</h3>
              <div className="profile_body">
                <div className="boxes">
                  <p>Age: </p>
                </div>
                <div className="boxes">
                  <input
                    id="editAge"
                    defaultValue={info.age}
                    placeholder="10"
                  ></input>
                </div>
                <div className="boxes">
                  <p>Gender: </p>
                </div>
                <div className="boxes">
                  <input
                    id="editGender"
                    defaultValue={info.gender}
                    placeholder="male/female/other"
                  ></input>
                </div>
                <div className="boxes">
                  <p>Weight: </p>
                </div>
                <div className="boxes">
                  <input
                    id="editWeight"
                    defaultValue={info.weight}
                    placeholder="150"
                  ></input>
                </div>
                <div className="boxes">
                  <p>Height: </p>
                </div>
                <div className="boxes">
                  <input
                    id="editHeight"
                    defaultValue={info.height}
                    placeholder="65"
                  ></input>
                </div>
                <button
                  id="submitButton"
                  className="submitButton"
                  style={{ display: "block" }}
                  onClick={() => onSubmit()}
                  type="button"
                >
                  Submit Changes
                </button>
              </div>
            </div>
          ) : (
            <div className="profile_body">
              <div className="boxes">
                <p>Age:</p>
              </div>
              <div className="boxes">
                <p>{info.age} years</p>
              </div>
              <div className="boxes">
                <p>Gender: </p>
              </div>
              <div className="boxes">
                <p>{info.gender}</p>
              </div>
              <div className="boxes">
                <p>Weight: </p>
              </div>
              <div className="boxes">
                <p>{info.weight} pounds</p>
              </div>
              <div className="boxes">
                <p>Height:</p>
              </div>
              <div className="boxes">
                <p>{info.height} inches</p>
              </div>
              <button
                className="submitButton"
                id="editButton"
                style={{ display: "block" }}
                onClick={() => isEdit()}
                type="button"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

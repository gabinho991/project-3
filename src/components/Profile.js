import { useState, React } from "react";
// import '../profile.css';

export function Profile(props) {
  const info = props.info;
  const socket = props.socket;
  const [edit, changeEdit] = useState(false);
  function isEdit() {
    changeEdit(true);
    document.getElementById("editButton").style.display = "none";
    document.getElementById("editPage").style.display = "block";
  }

  function onSubmit() {
    changeEdit(true);
    document.getElementById("editButton").style.display = "block";
    document.getElementById("editPage").style.display = "none";
    var editAge = document.getElementById("editAge").value;
    if (editAge === "") editAge = info.age;

    var editGender = document.getElementById("editGender").value;
    if (editGender === "") editGender = info.gender;

    var editWeight = document.getElementById("editWeight").value;
    if (editWeight === "") editWeight = info.weight;

    var editHeight = document.getElementById("editHeight").value;
    if (editHeight === "") editHeight = info.height;

    console.log({
      googleID: info.googleID,
      editAge: editAge,
      editGender: editGender,
      editWeight: editWeight,
      editHeight: editHeight,
    });
    socket.emit("onSubmit", {
      googleID: info.googleID,
      editAge: editAge,
      editGender: editGender,
      editWeight: editWeight,
      editHeight: editHeight,
    });
  }
  socket.on("personal_info", (data) => {
    console.log(data);
  });

  return (
    <div className="overarching">
      <h1>Personal Information Page</h1>
      <div className="profile_head">
        <img src={info.imageUrl} alt="Current users profile pic" />
        <h1>
          {info.givenName} {info.familyName}
        </h1>
      </div>
      <div className="profile_body">
        <div className="boxes">
          <h1>Age: {info.age}</h1>
        </div>
        <div className="boxes">
          <h1>Gender: {info.gender}</h1>
        </div>
        <div className="boxes">
          <h1>Weight: {info.weight} pounds</h1>
        </div>
        <div className="boxes">
          <h1>Height: {info.height} inches</h1>
        </div>
        <br />
        <button
          id="editButton"
          className="editButton"
          style={{ display: "block" }}
          onClick={() => isEdit()}
          type="button"
        >
          Edit Profile
        </button>
        {edit ? (
          <div id="editPage">
            <h1>Edit Personal Info Below:</h1>
            Age: <input id="editAge" placeholder="10"></input>
            <br />
            Gender:{" "}
            <input id="editGender" placeholder="male/female/other"></input>
            <br />
            Weight: <input id="editWeight" placeholder="150"></input>
            <br />
            Height: <input id="editHeight" placeholder="65"></input>
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
        ) : (
          <div id="editPage" style={{ display: "none" }}></div>
        )}
      </div>
    </div>
  );
}

export default Profile;

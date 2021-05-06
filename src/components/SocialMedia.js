import * as React from "react";
import { useState, useRef } from "react";
import "../social.css";

export function SocialMedia(props) {
  const message = useRef(null);
  // eslint-disable-next-line
  const [isShown, setshow] = useState(true); //setshow is used, and and we need it in this format because be need to use the state
  const info = props.info;
  const npost = props.post[0];
  const quote=props.post[1];
  const socket = props.socket;

  console.log(npost);
  const [post, updatepost] = useState(npost);
  // let x = Object.keys(npost).length;
  let num= Math.floor(Math.random() * Object.keys(quote).length);
  
  let item = quote[num]['text'];
  let item2 = quote[num]['author'];
 
  console.log(npost);
  function post_function() {
    const nmessage = message.current.value;
    const new_post = { ...post };
    document.getElementById("output").value = "";
    if (info.familyName + " " + info.givenName in new_post) {
      new_post[info.familyName + " " + info.givenName].push(nmessage);
    } else {
      new_post[info.familyName + " " + info.givenName] = [nmessage];
    }

    updatepost(new_post);
    socket.emit("post", [
      info.googleID,
      nmessage,
      info.familyName + " " + info.givenName,
      info.imageUrl,
    ]);

    setshow((prevShow) => !prevShow);
  }

  function foo() {
    return (
      <div>
        {Object.keys(post).map((key, i) => (
          <div>
            {post[key].map((item, index) => (
              <div style={{ margin: "3em 0" }}>
                <p>{key}</p>
                <div className="chatBox">
                  <pre>{item}</pre>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  // function post_button() {
  //   setshow((prevShow) => !prevShow);
  // }

  return (
    <div className="socialMediaWrap">
      <h1>Social Media Page </h1>
     
      <div className="socialBody">
       
        <div className="messageBody">
        <p>{'"'+item +'" : '}{item2} </p>
          <textarea
            ref={message}
            placeholder="Type message.."
            rows="6"
            cols="50"
            id="output"
          />
          <button
            class="button2"
            type="button"
            onClick={() => {
              post_function();
            }}
          >
            POST
          </button>
        </div>
        <div class="userpost">
          <div style={{ overflow: "auto", width: "100%" }}>{foo()}</div>
        </div>
      </div>
    </div>
  );
}
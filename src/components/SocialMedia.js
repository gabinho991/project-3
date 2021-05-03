import * as React from "react";
import { useState, useRef } from "react";
import "../social.css";

export function SocialMedia(props) {
  const message = useRef(null);
  const [isShown, setshow] = useState(true);
  const info = props.info;
  const npost = props.post;
  const socket = props.socket;

  console.log(npost);
  const [post, updatepost] = useState(npost);
  let x = Object.keys(npost).length;

  //updatepost({...npost});
  console.log(npost);
  function post_function() {
    const nmessage = message.current.value;
    const new_post = { ...post };
    if (info.familyName + " " + info.givenName in new_post) {
      new_post[info.familyName + " " + info.givenName].push(nmessage);
    } else {
      new_post[info.familyName + " " + info.givenName] = nmessage;
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
              <div>
                <pa1>{key}</pa1>
                <pa> {item}</pa>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  function post_button() {
    setshow((prevShow) => !prevShow);
  }

  return (
    <div>
      <h1>Social Media Page </h1>
      {x}

      <div className="post">
        <button
          class="button"
          type="button"
          onClick={() => {
            post_button();
          }}
        >
          {" "}
          Click here to add a post
        </button>

        {!isShown ? (
          <div>
            <textarea
              ref={message}
              placeholder="Type message.."
              rows="6"
              cols="50"
            />
            <button
              class="button2"
              type="button"
              onClick={() => {
                post_function();
              }}
            >
              {" "}
              Post
            </button>
          </div>
        ) : null}
        <div class="userpost">
          <div>{foo()}</div>
        </div>
      </div>
    </div>
  );
}

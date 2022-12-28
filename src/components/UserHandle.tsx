import { useState } from "react";

function UserHandle(props: any) {
  let [userHandle, setUserHandle] = useState<string>("");

  const userHandleSubmit = (evnt: Event) => {
    evnt.preventDefault();
    props.updateName(userHandle);
  };

  return (
    <div>
      <form className="Handle" onSubmit={userHandleSubmit as any}>
        <label htmlFor="handle">Handle</label>
        <input
          onChange={(evnt) => setUserHandle(evnt.target.value)}
          type="text"
          id="handle"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserHandle;

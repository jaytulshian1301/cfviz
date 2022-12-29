import { useState, useRef } from "react";

function UserHandle({ updateName } : {updateName: any}) {
  const form = useRef<any>();

  const userHandleSubmit = (e : any) => {
    e.preventDefault();
    updateName(form.current["handle"].value)

  }

  console.log(form)
  return (
    <div>
      <form ref={form} className="Handle" onSubmit={(userHandleSubmit as any)}>
        <label htmlFor="handle">Handle</label>
        <input type="text" id="handle" name="handle" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserHandle;

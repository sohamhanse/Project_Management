import { useRef } from "react";
import Input from "./Input";
import Modal from "../components/Model";

export default function AddNewProject({
  shownewproject,
  closenewproject,
  onsave,
}) {
  const title = useRef();
  const description = useRef();
  const deudate = useRef();
  const modal = useRef();

  function handlesave() {
    const enteredtitle = title.current.value;
    const entereddescription = description.current.value;
    const entereddeudate = deudate.current.value;

    if (
      enteredtitle.trim() === "" ||
      entereddescription.trim() === "" ||
      entereddeudate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onsave({
      title: enteredtitle,
      description: entereddescription,
      deudate: entereddeudate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      {shownewproject && (
        <div id="newproject">
          <div id="newproject2">
            <div id="btn">
              <button id="btncancel" onClick={closenewproject}>
                cancel
              </button>
              <button id="btnsave" onClick={handlesave}>
                save
              </button>
            </div>
            <div>
              <Input ref={title} type="text" label="TITLE" />
              <Input ref={description} label="DESCRIPTION" textarea />
              <Input ref={deudate} type="date" label="DUE DATE" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

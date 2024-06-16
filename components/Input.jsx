import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <div id="inputdiv">
      <p>
        <label>{label}</label>
      </p>
      {textarea ? (
        <textarea ref={ref} id="textareafield" {...props} />
      ) : (
        <input ref={ref} id="inputfield" {...props} />
      )}
    </div>
  );
});

export default Input;

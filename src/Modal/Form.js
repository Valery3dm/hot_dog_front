import React from "react";
import { Field } from "redux-form";

import "./Form.css";

export default function Form(props) {
  return (
    <form className="input-form" onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"name"}
          name={"name"}
          component={"input"}
          required
        />
      </div>
      <div>
        <Field
          placeholder={"type"}
          name={"type"}
          component={"input"}
          required
        />
      </div>
      <div>
        <Field
          placeholder={"description"}
          name={"description"}
          component={"input"}
          required
        />
      </div>
      <div>
        <Field
          placeholder={"image"}
          name={"image"}
          component={"input"}
          required
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
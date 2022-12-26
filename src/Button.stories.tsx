import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

const stories = storiesOf("Button", module);
stories.add("Button", () => {
  const [value, setValue] = useState("Hello");
  const setChange = () => {
    setValue(value === "Hello" ? "Bye" : "Hello");
  };
  return <Button onClick={setChange}>{value}</Button>;
});

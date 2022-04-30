import React from "react";
// import Header from "./Header";
import Sidebar from "./Sidebar";

const Forthetwo = () => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      {/* <Header toggle={toggle} open={open} /> */}
      <Sidebar toggle={toggle} open={open} />
    </div>
  );
};

export default Forthetwo;

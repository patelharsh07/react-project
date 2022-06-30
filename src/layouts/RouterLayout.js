import React from "react";
import Home from "../pages/Index/Home";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import School from "../pages/School/School";
import MedicalProfessionals from "../pages/MedicalProfessionals/MedicalProfessionals";
import Workshops from "../pages/Workshops/Workshops";
import Insprations from "../pages/Inspirations/Insprations";
import ContactUs from "../pages/ContactUs/ContactUs";
const RouterLayout = () => {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/about"} element={<About />} />
      <Route exact path={"/schools"} element={<School />} />
      <Route
        exact
        path={"/medicalProfessionals"}
        element={<MedicalProfessionals />}
      />
      <Route exact path="/workshops" element={<Workshops />} />
      <Route exact path="/inspirations" element={<Insprations />} />
      <Route exact path="/contactus" element={<ContactUs />} />
    </Routes>
  );
};

export default RouterLayout;

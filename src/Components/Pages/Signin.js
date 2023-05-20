import React from "react";
import Button from "../Button";
import SectionHero from "../SectionHero";

const Signin = () => {
  return (
    <>
      <SectionHero heading={"Login"} />
      <div className="sign-in">
        <div className="container">
          <div className="row justify-center">
            <div className="col-12 col-md-8">
              <form action="">
                <div className="col-12">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email..."
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="button-basic orange">
                    Login
                  </button>
                </div>
                <div className="row gap-1">
                  <div className="col-12 col-md-6">
                    <Button type={"blue"}>Create A Account</Button>
                  </div>
                  <div className="col-12 col-md-6">
                    <Button type={"white"}>Forgot Password?</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

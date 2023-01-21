import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import Login from "./Login";
import AccountMenu from "./AccountMenu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleClickFlight = () => navigate("/flights");
  const handleClickHotels = () => navigate("/hotel");
  const handleClickHomeWork = () => navigate("/homestay");
  const handleClickTrain = () => navigate("/train");
  const handleClickBus = () => navigate("/bus");
  const handleClickCabs = () => navigate("/cab");
  const handleClickVisa = () => navigate("/visa");
  const handleClickCharter = () => navigate("/charter");
  const handleClickActivities = () => navigate("/activitie");


  //faisal
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  return (
    <>
      <nav className={styles.navbarWrapper}>
        <div className={styles.navbarContent}>
          {/* 1st part of navbar .ie. left side of navbar */}
          <div className={styles.leftSideNavbar}>
            {/* logo wrapper */}
            <div className={styles.logoWrapper}>
              <a href="/" className={styles.logoimg}>
                <img src="./Images/logo.png" alt="Logo" />
              </a>
            </div>
            {/* hamberger menu */}
            <div
              className={styles.hamburgr_menu}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <CloseIcon style={{ fontSize: "1.4em" }} />
              ) : (
                <MenuIcon style={{ fontSize: "1.4em" }} />
              )}
            </div>
          </div>

          {/* 2nd part of navbar will start which contains logo */}

          <div
            className={
              open ? styles.rightSideNavbarMobile : styles.rightSideNavbar
            }
          >
            {/* icons container */}
            <div className={styles.iconWrapper}>
              <div onClick={handleClickFlight}>
                <span>
                  <FlightIcon
                    className={styles.flightICON}
                    style={{ fontSize: 30, padding: 4 }}
                  ></FlightIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Flights</p>
              </div>
              <div onClick={handleClickHotels}>
                <span>
                  <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Hotels</p>
              </div>
              <div onClick={handleClickHomeWork}>
                <span>
                  <HomeWorkIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></HomeWorkIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Homestays</p>
              </div>

              <div onClick={handleClickTrain}>
                <span>
                  <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Trains</p>
              </div>
              <div onClick={handleClickBus}>
                <span>
                  <DirectionsBusFilledIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></DirectionsBusFilledIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Buses</p>
              </div>
              <div onClick={handleClickCabs}>
                <span>
                  <LocalTaxiIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></LocalTaxiIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Cabs</p>
              </div>
              <div onClick={handleClickVisa}>
                <span>
                  <CreditCardIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></CreditCardIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Visa</p>
              </div>
              <div onClick={handleClickCharter}>
                <span>
                  <FlightTakeoffIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></FlightTakeoffIcon>
                </span>
                <p>Charter flights</p>
              </div>
              <div onClick={handleClickActivities}>
                <span>
                  <DownhillSkiingIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></DownhillSkiingIcon>
                </span>
                <p>Activities</p>
              </div>

              <div
                className={isLoggedIn ? "" : styles.login}
                style={isLoggedIn ? { color: "black" } : {}}
              >
                <div >
                  {isLoggedIn ? <AccountMenu /> : <Login />}
                </div>

                {/* <div className={styles.login}>
                  <div onClick={handleClickLogin}>
                    <Button variant="login">Login Or Create Account</Button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

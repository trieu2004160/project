import React, { useState } from "react";
import { Col, Row, Input, Button } from "antd";
import { IoBag, IoLocationSharp } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import Box from "@mui/material/Box";
import findjob2 from "../../images/findjob2.jpg";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import "../../components/Basicfind/basicfind.css";
import iuhanh from "../../images/lu-hanh-logo.png";
import concnet from "../../images/concentlogo.jpg";
import hungphat from "../../images/hungphat.jpg";
import atx from "../../images/atx.jpg";
import { Carousel } from "antd";
import { CSSProperties } from "react";
import tuyen1 from "../../images/tuyen1.jpg";
import tuyen2 from "../../images/tuyen2.jpg";
import tuyen3 from "../../images/tuyen3.jpg";
import tuyen5 from "../../images/tuyen5.png";
import job1 from "../../images/job1.png";
import job2 from "../../images/job2.png";
import job3 from "../../images/job3.jpeg";
import job4 from "../../images/job4.png";
const contentStyle: CSSProperties = {
  height: "420px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center" as "center",
  background: "#364d79",
};
const { Search } = Input;

const colors = ["#2563EB", "#F5F5F5", "#09090A"];
const selectedColor = colors[0];
const mau2 = colors[1];
const mau3 = colors[2];

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const handleFindJobClick = () => {
    console.log("Navigating to find job...");
  };

  const onSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSortMenu = () => {
    setSortOpen(!sortOpen);
  };

  return (
    <>
      {/* Hang1 */}
      <Row justify="center">
        <Col span={24} style={{ maxWidth: "1200px", padding: "20px" }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: mau2,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <IoBag style={{ color: selectedColor, fontSize: "24px" }} />
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    color: selectedColor,
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Dream
                </div>
                <div
                  style={{ color: mau3, fontSize: "30px", fontWeight: "bold" }}
                >
                  Job
                </div>
              </div>
            </div>
            {/* Search */}
            <Search
              placeholder="Title, keywords,..."
              onSearch={onSearch}
              enterButton={
                <Button
                  type="primary"
                  style={{ backgroundColor: selectedColor }}
                >
                  Search
                </Button>
              }
              style={{ width: "100%", maxWidth: "500px" }}
            />
            <div style={{ display: "flex", gap: "8px" }}>
              <Button
                style={{ backgroundColor: selectedColor, color: "white" }}
                onClick={handleFindJobClick}
              >
                Login
              </Button>
              <Button
                style={{ backgroundColor: selectedColor, color: "white" }}
                onClick={handleFindJobClick}
              >
                Find Jobs
              </Button>
            </div>
          </Box>
        </Col>
      </Row>
      {/* hang 2 */}
      <Row>
        <Col span={24}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#17588E",
              padding: "20px 0px 30px 0px",
              color: "white",
              textAlign: "center",
              width: "100%",
              margin: "0px",
            }}
          >
            <h1 className="text-4xl font-bold mb-4">
              Find jobs fast 24 hours, latest jobs nationwide.
            </h1>

            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-lg p-2 w-[90%]">
              <div className="flex items-center px-4 text-gray-600 border-r border-gray-300 cursor-pointer">
                <FaListUl className="mr-2" />
                <span className="whitespace-nowrap">Career Directory</span>
              </div>
              <input
                type="text"
                placeholder="Job position, company name"
                className="flex-1 px-4 py-2 outline-none"
              />
              <div className="flex items-center px-4 text-gray-600 border-l border-gray-300 cursor-pointer">
                <IoLocationSharp className="mr-2" />
                <span>Location</span>
              </div>
              <Button
                type="primary"
                className="ml-2 bg-gray-200 hover:bg-gray-300"
                style={{ backgroundColor: "#f5f5f5", color: "#000" }}
                onClick={() => onSearch("some value")}
              >
                Search
              </Button>
            </div>

            {/* Categories & Banner */}
            <div className="flex mt-8 w-[90%] gap-6">
              {/* Job Categories */}
              <div className="bg-white rounded-lg p-4 w-1/3">
                <ul className="text-gray-800 divide-y">
                  {[
                    "Business/Sales",
                    "Marketing/PR/Advertising",
                    "Customer Service/Operations",
                    "Human Resources/Administration/Legal",
                    "Finance/Banking/Insurance",
                    "Information Technology",
                  ].map((category, index) => (
                    <li
                      key={index}
                      className="py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                    >
                      <span>{category}</span>
                      <span className="text-gray-400">›</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Banner */}
              <div className="bg-white rounded-lg  overflow-hidden">
                <img
                  src={findjob2}
                  alt="Recruitment Banner"
                  className="w-full h-full object-cover"
                  // style={{ maxHeight: "400px" }}
                />
              </div>
            </div>
          </Box>
        </Col>
      </Row>
      {/* hàng 3 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div className="font-semibold text-3xl ml-5 mt-3">Best Job</div>

        <div>
          <div
            style={{ display: "flex", gap: "10px " }}
            className="text-2xl mr-4 mt-3"
          >
            <div>See all</div>
            <SlArrowLeftCircle />
            <SlArrowRightCircle />
          </div>
        </div>
      </div>
      {/* *** */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Row className="ml-12">
          <Col span={24} style={{ maxWidth: "400px" }}>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded={sortOpen}
                  aria-haspopup="true"
                  onClick={toggleSortMenu}
                >
                  Filter by: Sort By
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {sortOpen && (
                <div
                  className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Low to High
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      High to Low
                    </a>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SlArrowLeftCircle
              style={{ cursor: "pointer", fontSize: "24px" }}
            />
            <div style={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
              <button
                style={{
                  padding: "0px 20px",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "15px",
                  border: "none",
                }}
              >
                All
              </button>
              <button
                style={{
                  padding: "0px 20px",
                  backgroundColor: "lightgray",
                  color: "black",
                  borderRadius: "15px",
                  border: "none",
                }}
              >
                Under 10 million
              </button>
              <button
                style={{
                  padding: "7px 20px",
                  backgroundColor: "lightgray",
                  color: "black",
                  borderRadius: "15px",
                  border: "none",
                }}
              >
                From 10-15 million
              </button>
            </div>
            <SlArrowRightCircle
              style={{
                cursor: "pointer",
                fontSize: "24px",
                marginLeft: "10px",
              }}
            />
          </div>
        </div>
      </div>
      {/* **hàng 4  */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Hàng 1 */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="job-card">
            <div className="canngang">
              <img src={iuhanh} alt="Company Logo" className="company-logo" />
              <div className="job-info">
                <div className="job-title">
                  Deputy Director of the Company - In charge of the Travel
                  Center specializing ...
                </div>
                <div className="company-name">
                  VIET TRAVEL JOINT STOCK COMPANY
                </div>
              </div>
            </div>
            <div className="job-description">
              Agreement - Hanoi & other places
            </div>
            <div className="job-details">
              <div className="location">Hanoi</div>
              <div className="salary">10 - 20 Million</div>
            </div>
          </div>

          <div className="job-card">
            <div className="canngang">
              <img src={concnet} alt="Company Logo" className="company-logo" />
              <div className="job-info">
                <div className="job-title">
                  Consultant / Sales by Phone / Telesales / Customer Care (Data
                  Available / 100%)
                </div>
                <div className="company-name">
                  VIETNAM CONCENTRIX SERVICES ...
                </div>
              </div>
            </div>
            <div className="job-description">Agreement - Ho Chi Minh</div>
            <div className="job-details">
              <div className="location">Ho Chi Minh</div>
              <div className="salary">10 - 20 Million</div>
            </div>
          </div>
        </div>

        {/* *** 2 */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="job-card">
            <div className="canngang">
              <img src={hungphat} alt="Company Logo" className="company-logo" />
              <div className="job-info">
                <div className="job-title">
                  General Accountant - Manufacturing Company in Hanoi - Salary
                  from 12-18 ...
                </div>
                <div className="company-name">
                  Hung Phat Construction and Materials
                </div>
              </div>
            </div>
            <div className="job-description">Full-time - Da Nang</div>
            <div className="job-details">
              <div className="location">Da Nang</div>
              <div className="salary">12 - 18 Million</div>
            </div>
          </div>

          <div className="job-card">
            <div className="canngang">
              <img src={atx} alt="Company Logo" className="company-logo" />
              <div className="job-info">
                <div className="job-title">Growth Data Analyst Upto 22M</div>
                <div className="company-name">ATX</div>
              </div>
            </div>
            <div className="job-description">Contract - Ho Chi Minh</div>
            <div className="job-details">
              <div className="location">Ho Chi Minh</div>
              <div className="salary">20 - 23 Million</div>
            </div>
          </div>
        </div>
      </div>
      <div className="chuyen">
        <SlArrowLeftCircle style={{ cursor: "pointer", fontSize: "24px" }} />
        <SlArrowRightCircle
          style={{
            cursor: "pointer",
            fontSize: "24px",
            marginLeft: "10px",
          }}
        />
      </div>
      {/* **hang5 */}
      <div className="carosel">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img src={tuyen1} alt="Company Logo" className="carosel1" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={tuyen2} alt="Company Logo" className="carosel1" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={tuyen3} alt="Company Logo" className="carosel1" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={tuyen5} alt="Company Logo" className="carosel1" />
            </h3>
          </div>
        </Carousel>
      </div>
      {/* *** hang6  */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div className="font-semibold text-3xl ml-5 mt-3">Attractive Jobs</div>

        <div>
          <div
            style={{ display: "flex", gap: "10px " }}
            className="text-2xl mr-4 mt-3"
          >
            <div>See all</div>
            <SlArrowLeftCircle />
            <SlArrowRightCircle />
          </div>
        </div>
      </div>
      {/* *** */}
      <div className="hang6 ">
        <div style={{ display: "flex", gap: "10px" }}>
          <Row className="ml-12">
            <Col span={24} style={{ maxWidth: "400px" }}>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded={sortOpen}
                    aria-haspopup="true"
                    onClick={toggleSortMenu}
                  >
                    Filter by: Location
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {sortOpen && (
                  <div
                    className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Low to High
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        High to Low
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SlArrowLeftCircle
                style={{ cursor: "pointer", fontSize: "24px" }}
              />
              <div style={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
                <button
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "15px",
                    border: "none",
                  }}
                >
                  All
                </button>
                <button
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "lightgray",
                    color: "black",
                    borderRadius: "15px",
                    border: "none",
                  }}
                >
                  Hanoi
                </button>
                <button
                  style={{
                    padding: "7px 20px",
                    backgroundColor: "lightgray",
                    color: "black",
                    borderRadius: "15px",
                    border: "none",
                  }}
                >
                  Ho Chi Minh City
                </button>
                <button
                  style={{
                    padding: "0px 20px",
                    backgroundColor: "lightgray",
                    color: "black",
                    borderRadius: "15px",
                    border: "none",
                  }}
                >
                  Da Nang
                </button>
              </div>
              <SlArrowRightCircle
                style={{
                  cursor: "pointer",
                  fontSize: "24px",
                  marginLeft: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Hàng 1 */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="job-card">
            <div className="canngang">
              <img src={job1} alt="Company Logo" className="company-logo" />
              <div className="job-info">
                <div className="job-title">Graphic Designer Junior HCM</div>
                <div className="company-name">
                  YOMARKER ADVERTISING COMPANY LIMITED
                </div>
              </div>
            </div>
            <div className="job-description">Accounts Receivable</div>
            <div className="job-details">
              <div className="location">Hanoi</div>
              <div className="salary">10 - 20 Million</div>
            </div>
          </div>

          <div className="job-card">
            <div className="canngang">
              <img src={job2} alt="Company Logo" className="company-logo" />
              <div className="job-info">
                <div className="job-title">Accounts Receivable</div>
                <div className="company-name">
                  Tien Tien Distribution Co., Ltd.
                </div>
              </div>
            </div>
            <div className="job-description">Agreement - Ho Chi Minh</div>
            <div className="job-details">
              <div className="location">Ho Chi Minh</div>
              <div className="salary">8 - 10 million</div>
            </div>
          </div>
        </div>

        {/* *** 2 */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="job-card">
            <div className="canngang">
              <img src={job3} alt="Company Logo" className="company-logo" />
              <div className="job-info">
                <div className="job-title">Primary School Teacher</div>
                <div className="company-name">
                  VIETNAM AUSTRALIA INTERNATIONAL EDUCATION JOINT STOCK COMPANY
                </div>
              </div>
            </div>
            <div className="job-description">Full-time - Da Nang</div>
            <div className="job-details">
              <div className="location">Da Nang</div>
              <div className="salary">Agreement</div>
            </div>
          </div>

          <div className="job-card">
            <div className="canngang">
              <img src={job4} alt="Company Logo" className="company-logo" />
              <div className="job-info">
                <div className="job-title">
                  Ielts Teacher (Part-Time) Working in Dong Da, Hanoi -
                  Attractive Income with Final ...
                </div>
                <div className="company-name">
                  VINGO ACADEMY COMPANY LIMITED
                </div>
              </div>
            </div>
            <div className="job-description">Contract - Ho Chi Minh</div>
            <div className="job-details">
              <div className="location">Ho Chi Minh</div>
              <div className="salary">Agreement</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

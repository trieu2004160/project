/* eslint-disable no-unused-vars */
import React, { ReactElement } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { IoBag } from "react-icons/io5";
import { Input, Button } from "antd";
import { SearchOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import people from "../../images/hang2.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";

import {
  FcBullish,
  FcLike,
  FcDatabase,
  FcMusic,
  FcAdvertising,
  FcCamcorderPro,
  FcPuzzle,
  FcParallelTasks,
} from "react-icons/fc";

interface Job {
  title: string;
  company: string;
  location: string;
  logo: ReactElement;
  type: string;
  salary: string;
  remaining: string;
}

interface Category {
  icon: ReactElement;
  title: string;
  positions: number;
}

interface PopularJob {
  title: string;
  positions: string;
  isLink?: boolean;
}

const jobs: Job[] = [
  {
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: <IoBag className="w-8 h-8 text-blue-600" />,
    type: "Full-time",
    salary: "$50k-$120k",
    remaining: "2 days left",
  },
  {
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: <IoBag className="w-8 h-8 text-blue-600" />,
    type: "Remote",
    salary: "$30k-$60k",
    remaining: "3 days left",
  },
  {
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: <IoBag className="w-8 h-8 text-blue-600" />,
    type: "Full-time",
    salary: "$60k-$100k",
    remaining: "5 days left",
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    logo: <IoBag className="w-8 h-8 text-blue-600" />,
    type: "Contract",
    salary: "$40k-$80k",
    remaining: "1 week left",
  },
  {
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    logo: <IoBag className="w-8 h-8 text-blue-600" />,
    type: "Full-time",
    salary: "$60k-$100k",
    remaining: "5 days left",
  },
  {
    title: "Brand Designer",
    company: "Maze",
    location: "San Francisco, USA",
    logo: <IoBag className="w-8 h-8 text-blue-600" />,
    type: "Contract",
    salary: "$40k-$80k",
    remaining: "1 week left",
  },
  {
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    logo: <IoBag className="w-8 h-8 text-blue-600" />,
    type: "Remote",
    salary: "$30k-$60k",
    remaining: "3 days left",
  },
  {
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    logo: <IoBag className="w-8 h-8 text-blue-600" />,
    type: "Full-time",
    salary: "$50k-$120k",
    remaining: "2 days left",
  },
];

const { Search } = Input;

const onSearch = (
  value: string,
  _e?:
    | React.ChangeEvent<HTMLInputElement>
    | React.MouseEvent<HTMLElement>
    | React.KeyboardEvent<HTMLInputElement>,
  info?: { source?: string }
) => {
  console.log(info?.source, value);
};

const categories: Category[] = [
  { icon: <FcMusic />, title: "Music & Audio", positions: 204 },
  { icon: <FcBullish />, title: "Account & Finance", positions: 167 },
  { icon: <FcLike />, title: "Health & Care", positions: 125 },
  { icon: <FcDatabase />, title: "Data & Science", positions: 57 },
  { icon: <FcPuzzle />, title: "Graphics & Design", positions: 357 },
  { icon: <FcParallelTasks />, title: "Code & Programming", positions: 312 },
  { icon: <FcAdvertising />, title: "Digital Marketing", positions: 297 },
  { icon: <FcCamcorderPro />, title: "Video & Animation", positions: 247 },
];

const Item = styled(Paper)({
  backgroundColor: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  margin: "0",
  padding: "20px 0",
  boxSizing: "border-box",
  borderRadius: "0",
  boxShadow: "none",
});

const colors = ["#2563EB", "#202020", "#2A2A2A"] as const;
const selectedColor = colors[0];
const mau2 = colors[1];
const mau3 = colors[2];

export default function CSSGrid() {
  const navigate = useNavigate();

  const handleFindJobClick = () => {
    navigate("/find-job");
  };

  return (
    <Box sx={{ width: "100vw", padding: "10px" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          width: "100%",
          gap: 0,
        }}
      >
        {/* Hàng 1 */}
        <Box
          sx={{
            gridColumn: "span 12",
          }}
        >
          <Item>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "1200px",
                // padding: "10px 20px",
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
                    style={{
                      color: mau2,
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
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
                    style={{
                      backgroundColor: selectedColor,
                      borderColor: selectedColor,
                    }}
                  >
                    Search
                  </Button>
                }
                style={{ width: "100%", maxWidth: "500px" }}
              />
              <div style={{ display: "flex", gap: "8px" }}>
                <Button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
                  onClick={handleFindJobClick}
                >
                  Login
                </Button>
                <Button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
                  onClick={handleFindJobClick}
                >
                  Find Jobs
                </Button>
              </div>
            </div>
          </Item>
        </Box>

        {/* Hàng 2 */}
        <Box
          className="bg-white"
          sx={{
            gridColumn: "span 12",
            minHeight: "470px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <hr />
          <section className="md:px-40 flex flex-col md:flex-row items-center w-full">
            {/* Left Side - Content */}
            <div className="md:w-1/2 space-y-2">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight text-left">
                Find a job that <br />
                <span className="text-blue-600">
                  suits your interest & skills.
                </span>
              </h1>
              <p className="text-gray-600 text-lg text-left">
                Start now! Looking for a job you have dream.
              </p>

              {/* Search Bar */}
              <div className="flex items-center bg-white p-4 rounded-lg shadow-md max-w-lg border border-black">
                <SearchOutlined className="text-gray-500 ml-3 text-lg" />
                <Input
                  placeholder="Title, keywords..."
                  className="flex-1 mx-3 border-none shadow-none"
                />
                <EnvironmentOutlined className="text-gray-500 text-lg" />
                <Input
                  placeholder="Your location..."
                  className="flex-1 mx-3 border-none shadow-none"
                />
                <Button type="primary" className="px-8 py-2">
                  Search
                </Button>
              </div>
              <p className="text-gray-500 text-sm text-left">
                Suggestion: Designer, Programming,{" "}
                <span className="text-blue-600 cursor-pointer">
                  Digital Marketing
                </span>
                , Video, Animation.
              </p>
            </div>

            {/* Right Side - Illustration */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={people}
                alt="people"
                className="w-[650px] h-auto md:w-[650px]"
              />
            </div>
          </section>
          <hr />
        </Box>

        {/* Hàng 3 - Most Popular Jobs */}

        {/* Hàng 3 - Most Popular Jobs */}
        <Box
          sx={{ gridColumn: "span 12", minHeight: "400px", display: "flex" }}
        >
          <Item
            sx={{
              flexGrow: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                fontWeight: "bold",
                color: mau3,
                textAlign: "left",
                textDecorationColor: "20px",
              }}
            >
              <span style={{ color: selectedColor }}>Most Popular</span> Job Who
              Can Do!
            </h2>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: "40px",
                width: "100%",
                padding: "20px",
              }}
            >
              {[
                {
                  title: "Anesthesiologists",
                  positions: "45,904 Open Positions",
                  isLink: false,
                },
                {
                  title: "Obstetricians-Gynecologists",
                  positions: "4,339 Open Positions",
                  isLink: false,
                },
                {
                  title: "Surgeons",
                  positions: "50,364 Open Positions",
                  isLink: false,
                },
                {
                  title: "Orthodontists",
                  positions: "20,079 Open Positions",
                  isLink: false,
                },
                {
                  title: "Receptionist",
                  positions: "28,200 Open Positions",
                  isLink: false,
                },
                {
                  title: "Maxillofacial Surgeons",
                  positions: "74,875 Open Positions",
                  isLink: false,
                },
                {
                  title: "Software Developer",
                  positions: "43,359 Open Positions",
                  isLink: false,
                },
                {
                  title: "Psychiatrists",
                  positions: "18,599 Open Positions",
                  isLink: false,
                },
                {
                  title: "Financial Manager",
                  positions: "61,391 Open Positions",
                  isLink: false,
                },
                {
                  title: "Management Analysis",
                  positions: "93,046 Open Positions",
                  isLink: false,
                },
                {
                  title: "IT Manager",
                  positions: "50,963 Open Positions",
                  isLink: false,
                },
                {
                  title: "Operations Research Analysis",
                  positions: "16,627 Open Positions",
                  isLink: false,
                },
              ].map((job: PopularJob, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: job.isLink ? selectedColor : "black",
                      cursor: job.isLink ? "pointer" : "default",
                      textDecoration: job.isLink ? "underline" : "none",
                    }}
                  >
                    {job.title}
                  </div>
                  <div style={{ color: "gray", fontSize: "14px" }}>
                    {job.positions}
                  </div>
                </div>
              ))}
            </Box>
          </Item>
        </Box>

        {/* Hàng 4 */}
        <Box
          className="bg-white"
          sx={{
            gridColumn: "span 12",
            minHeight: "60vh", // Đảm bảo chiếm đủ chiều cao
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <hr />
          <section className="py-10 px-5 md:px-20 bg-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">
                Popular <span className="text-blue-600">category</span>
              </h2>
              <a href="#" className="text-blue-600 flex items-center gap-1">
                View All <ArrowRightOutlined />
              </a>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <span className="text-4xl text-black">{cat.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                    <p className="text-gray-500">
                      {cat.positions} Open position
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>{" "}
          <hr />{" "}
        </Box>

        {/* Hàng 5 */}

        <Box
          className="bg-white"
          sx={{
            gridColumn: "span 15",
            minHeight: "400px",
            display: "flex",
          }}
        >
          <div className="w-screen mx-auto p-9">
            <h2 className="text-5xl font-bold mb-6 ml-9 mt-6">
              Featured <span className="text-blue-600">job</span>
            </h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 rounded-lg border bg-white transition-all hover:border-blue-500 hover:shadow-lg w-full max-w-screen-xl mx-auto"
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center bg-white">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-2xl text-gray-800">
                        {job.title}{" "}
                        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-md">
                          {job.type}
                        </span>
                      </h3>
                      <p className="text-lg text-gray-500 mt-1">
                        {job.location} • {job.salary} • {job.remaining}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Bookmark className="w-6 h-6 text-gray-400 hover:text-blue-600 cursor-pointer" />
                    <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
                      Apply Now →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

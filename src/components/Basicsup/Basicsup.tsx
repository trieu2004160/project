import React, { useState } from "react";
import { Col, Row, Input, Button, Table } from "antd";
import Box from "@mui/material/Box";
import { IoBag } from "react-icons/io5";

const { Search } = Input;

const data = [
  { key: "1", label: "Business name", value: "Dream Job Recruitment Company" },
  {
    key: "2",
    label: "Address",
    value: "5th Floor, 82 Hoang Van Thu, Quy Nhon",
  },
  { key: "3", label: "Phone", value: "032.965.3804" },
  { key: "4", label: "Email", value: "support@DreamJob.com.vn" },
];

const columns = [
  {
    dataIndex: "label",
    key: "label",
    width: "30%",
    render: (text: string) => <strong>{text}</strong>,
  },
  {
    dataIndex: "value",
    key: "value",
  },
];

const colors = ["#2563EB", "#F5F5F5", "#09090A"];
const selectedColor = colors[0];
const mau2 = colors[1];
const mau3 = colors[2];

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const handleFindJobClick = () => {
    console.log("Navigating to Dashboard...");
  };

  const onSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  return (
    <>
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
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            {/* Logo */}
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

            {/* Buttons */}
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

      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "initial",
          fontSize: "20px",
        }}
      >
        Introduction and Contact Company
      </div>

      {/* Bảng hiển thị thông tin công ty */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        showHeader={false} // Ẩn tiêu đề bảng
      />
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "initial",
          fontSize: "30px",
          marginTop: "30px",
        }}
      >
        Dream Job | Job Recruitment Company
      </div>
      <p
        style={{
          justifyContent: "flex-start",
          marginLeft: "20px",
          width: "80%",
          marginTop: "30px",
          marginBottom: "50px",
        }}
      >
        Dream Job - The Bridge to Your Dream Job <br />
        Welcome to Dream Job, the leading recruitment platform that connects
        employers and talented candidates!
        <br /> With the mission of making your career dream come true, we offer:
        <br />
        For candidates: Thousands of job opportunities: Continuously updated
        from reputable companies nationwide.
        <br /> Find a job easily: Smart search engine and filters by industry,
        location, salary. Career support: Tutorial articles, CV consulting,
        interviews, and professional skills development. For employers: Access
        to talent: Diverse candidate profiles, meeting all business
        requirements. Convenient recruitment management: Effective tools for
        posting, managing profiles, and screening candidates.
        <br /> Comprehensive services: Dedicated support team, accompanying
        businesses throughout the recruitment process.
        <br /> Why choose Dream Job?
        <br /> Prestigious and professional: Cooperating with leading businesses
        in many fields. Advanced technology: Optimized platform, easy to use,
        smooth operation on all devices. Absolute information security:
        Committed to data security for both candidates and employers. Let Dream
        Job become your companion on the journey to find your dream job or build
        an excellent team of employees!
      </p>
    </>
  );
};

export default App;

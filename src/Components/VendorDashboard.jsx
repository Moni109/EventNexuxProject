import React, { useState } from "react";
import { Box, Paper, Typography, IconButton, Grid } from "@mui/material";
import FilterIcon from "@mui/icons-material/Filter";
import InfoIcon from "@mui/icons-material/Info";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FolderCopyTwoToneIcon from "@mui/icons-material/FolderCopyTwoTone";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Analytics from "./ApexCharts";
import BookingsCharts from "./ApexCharts";
import CalendarCard from "./Calender";

function VendorReview() {
  return (
    <Grid item>
      <Paper elevation={3} sx={{ width: "75%" }}>
        <Typography variant="h4" component="h1" sx={{ p: 5 }}>
          Reviews
        </Typography>
      </Paper>
    </Grid>
  );
}

function MembershipPlans() {
  const plans = [
    { planName: "Basic", price: "$10/month" },
    { planName: "Standard", price: "$20/month" },
    { planName: "Premium", price: "$30/month" },
    { planName: "Gold", price: "$40/month" },
    { planName: "Platinum", price: "$50/month" },
    { planName: "Diamond", price: "$60/month" },
    { planName: "Elite", price: "$70/month" },
    { planName: "Ultimate", price: "$80/month" },
  ];

  return (
    <Grid item sx={{ width: "75%", marginTop: "8%" }}>
      <Typography variant="h4" component="h1" sx={{ m: 4 }}>
        Membership Packages
      </Typography>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center">
              Plan Name
            </th>
            <th className="border border-gray-300 p-2 text-center">Price</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border border-gray-300 p-4 text-center">
                {plan.planName}
              </td>
              <td className="border border-gray-300 p-4 text-center">
                {plan.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Grid>
  );
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function VendorPortfolio() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <IconButton>
              <Link to="/vendor/project">
                <ArrowBackIcon />
              </Link>
            </IconButton>
            <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold" }}>
              Portfolio
            </Typography>
          </div>

          <div className="p-4">
            <div className="flex items-start mb-6">
              <Checkbox
                {...label}
                checked={isChecked}
                onChange={handleCheckboxChange}
                sx={{ mr: 3 }}
              />
              <Typography
                sx={{
                  transition: "color 0.3s",
                  color: isChecked ? "pink" : "black",
                }}
              >
                I certify that the work uploaded is my own / is the copyright of
                our firm. I understand that any work found to be someone else's
                would be removed immediately, and action could be taken.
              </Typography>
            </div>

            <div className="flex flex-col items-center">
              <Box
                className="relative w-full h-80 bg-cover bg-center rounded-lg overflow-hidden"
                sx={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMOG68KYf8GpxsYHvHnV8bYv7pn7dqr4crA&s)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-center text-white p-4">
                  <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                    Add an Image
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Showcase your latest work here.
                  </Typography>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

function VendorProject() {
  return (
    <Grid item sx={{ width: "100%" }}>
      <div className="bg-white shadow-lg rounded-lg flex flex-col relative">
        <div className="p-4 relative z-10">
          <Typography variant="h4" component="h1">
            Projects
          </Typography>
          <div className="mt-4 flex justify-start">
            <Link to="/vendor/portfolio" style={{ textDecoration: "none" }}>
              <div
                className="relative w-80 h-64 bg-cover bg-center rounded-lg overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMOG68KYf8GpxsYHvHnV8bYv7pn7dqr4crA&s)",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                  <FolderCopyTwoToneIcon
                    sx={{ fontSize: 60, color: "white" }}
                  />
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{ color: "white", mt: 2 }}
                  >
                    Portfolio
                  </Typography>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Grid>
  );
}

function VendorInformation() {
  const [wishCount, setWishCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-white shadow-md p-12">
        <h2 className="text-4xl font-semibold mb-8">Profile Analytics</h2>
        <div className="flex flex-col lg:flex-row justify-around mb-5 gap-4">
          <div className="border-2 border-pink-500 p-4 rounded-md flex-1 bg-pink-600 hover:bg-white">
            <h6 className="text-center font-bold text-xl">{wishCount}</h6>
            <p className="text-center">WishList Count</p>
          </div>
          <div className="border-2 border-pink-500 p-4 rounded-md flex-1 bg-pink-600 hover:bg-white">
            <h6 className="text-center font-bold text-xl">{pageCount}</h6>
            <p className="text-center">Page Views</p>
          </div>
        </div>
        <div className="bg-white shadow-md py-12">
          <h2 className="text-4xl font-semibold mb-4">Personal Information</h2>
          <form>
            <div className="grid grid-cols-12 gap-4">
              {[
                { label: "Login Email Id", type: "email", required: true },
                { label: "Brand Name", type: "text", required: true },
                { label: "Contact Person Name", type: "text" },
                { label: "Additional Email ID", type: "email" },
                { label: "Contact number", type: "text", required: true },
                { label: "Website Link", type: "text" },
                { label: "Google Business Link", type: "text" },
                { label: "City", type: "text", required: true },
              ].map(({ label, type, required }, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-9 flex items-center"
                >
                  <label className="w-36 mr-8">{label}</label>
                  <input
                    type={type}
                    className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required={required}
                  />
                </div>
              ))}
              <div className="col-span-12 md:col-span-9 flex items-center">
                <label className="w-36 mr-8">Address</label>
                <div className="flex-col items-center">
                  <AddCircleOutlineIcon />
                  <p className="text-sm">Add a Location</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function VendorAnalytics() {
  return (
    <Grid item sx={{ width: "100%" }}>
      <Paper elevation={3}>
        <Box sx={{ p: 10 }}>
          <BookingsCharts />
        </Box>
      </Paper>
    </Grid>
  );
}

export default function VendorProfile() {
  const location = useLocation();

  const tabItems = [
    { path: "information", icon: <InfoIcon />, label: "Information" },
    { path: "membership", icon: <CardMembershipIcon />, label: "Membership" },
    { path: "review", icon: <ReviewsIcon />, label: "Review" },
    { path: "graph", icon: <AutoGraphIcon />, label: "Graph" },
    { path: "project", icon: <FilterIcon />, label: "Projects" },
  ];

  return (
    <Grid container spacing={0} sx={{ marginTop: 10, display: "flex" }}>
      <Grid item sx={{ width: "20%" }}>
        <Paper elevation={3} sx={{ height: "300px", padding: 2, margin: 2 }}>
          {tabItems.map((tab, index) => (
            <Link
              key={index}
              to={`/vendor/${tab.path}`}
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: 8,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  backgroundColor:
                    location.pathname === `/vendor/${tab.path}`
                      ? "#ec407a"
                      : "inherit",
                  color:
                    location.pathname === `/vendor/${tab.path}`
                      ? "white"
                      : "black",
                  padding: 1,
                  borderRadius: 1,
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "darkpink",
                    color: "white",
                  },
                }}
              >
                {tab.icon}
                <Typography
                  variant="body2"
                  sx={{
                    ml: 2,
                    fontWeight: "medium",
                    color:
                      location.pathname === `/vendor/${tab.path}`
                        ? "white"
                        : "black",
                  }}
                >
                  {tab.label}
                </Typography>
              </Box>
            </Link>
          ))}
        </Paper>
        <CalendarCard/>
      </Grid>
      <Grid item xs={9} sx={{ ml: 5 }}>
        <Routes>
          <Route path="information" element={<VendorInformation />} />
          <Route path="membership" element={<MembershipPlans />} />
          <Route path="review" element={<VendorReview />} />
          <Route path="graph" element={<VendorAnalytics />} />
          <Route path="portfolio" element={<VendorPortfolio />} />
          <Route path="project" element={<VendorProject />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

import React, { useState } from "react";
import { Add, Send } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const { default: MDBox } = require("components/MDBox");
const { default: MDTypography } = require("components/MDTypography");
const { default: MatchSchedule } = require("layouts/schedule/schedule");

function Schedule() {
  const [open, setOpen] = useState(false); // Modal open state
  const [location, setLocation] = useState(""); // Location input
  const [time, setTime] = useState(""); // Time input
  const [courtPrice, setCourtPrice] = useState(""); // Court Price input
  const [date, setDate] = useState(""); // Date input

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCreateSchedule = () => {
    console.log("Schedule Created:", { location, time, courtPrice, date });
    setOpen(false); // Close the modal after creating the schedule
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <MDTypography variant="h4" fontWeight="bold">
          Lịch thi đấu
        </MDTypography>
        <Button
          color="success"
          variant="contained"
          startIcon={<Add />}
          sx={{ mb: 2 }}
          onClick={handleOpenModal}
        >
          Thêm lịch
        </Button>
        <MDBox component="ul" p={0} m={0}>
          <MatchSchedule
            location="Court 1"
            time="10:00 AM"
            shuttlePrice="5"
            courtPrice="20"
            waterPrice="1"
          />
        </MDBox>
      </MDBox>

      {/* Modal for creating schedule */}
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Tạo lịch thi đấu</DialogTitle>
        <DialogContent>
          <TextField
            label="Địa chỉ"
            variant="outlined"
            fullWidth
            margin="normal"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField
            label="Thời gian"
            variant="outlined"
            fullWidth
            margin="normal"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <TextField
            label="Ngày"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            label="Giá sân"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={courtPrice}
            onChange={(e) => setCourtPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="success">
            Đóng
          </Button>
          <Button
            onClick={handleCreateSchedule}
            color="dark"
            variant="contained"
            endIcon={<Send />}
            sx={{ color: "white" }}
          >
            Tạo lịch và gửi tin nhắn
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Schedule;

import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
} from "@mui/material";

// Các thành phần Material Dashboard
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import DataTable from "examples/Tables/DataTable";
import { fetchUsers } from "hook/user.hook";

function PlayerManagement() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [players, setPlayers] = useState([]);

  const handleOpenModal = (player) => {
    setSelectedPlayer(player);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPlayer(null);
  };

  useEffect(() => {
    async function loadPlayers() {
      try {
        const data = await fetchUsers();
        setPlayers(data);
      } catch (error) {
        console.error("Error loading players:", error);
      }
    }
    loadPlayers();
  }, []);

  // Tạo columns và rows cho DataTable
  const columns = [
    { Header: "Avatar", accessor: "avatar", width: "10%", align: "center" },
    { Header: "Tên", accessor: "username", align: "left" },
    { Header: "Số tiền còn dư", accessor: "balance", align: "center" },
    { Header: "Hành động", accessor: "action", align: "center" },
  ];

  const rows = players.map((player) => ({
    avatar: (
      <img
        src={player.avatar}
        alt={player.name}
        width={40}
        height={40}
        style={{ borderRadius: "50%" }}
      />
    ),
    username: player.username,
    balance: "0 VND",
    action: (
      <Button variant="contained" size="small" onClick={() => handleOpenModal(player)} color="dark">
        Xem chi tiết
      </Button>
    ),
  }));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox component="main" sx={{ flexGrow: 1, padding: "24px" }}>
        <MDBox mb={2} />
        <Box mt={5} mb={3}>
          <Typography variant="h4" gutterBottom>
            Quản lý Cầu Thủ
          </Typography>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
        </Box>

        {/* Modal cho thông tin cầu thủ */}
        {selectedPlayer && (
          <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>Thông tin cầu thủ: {selectedPlayer.name}</DialogTitle>
            <DialogContent>
              <Typography variant="h6">Tài khoản ngân hàng</Typography>
              <Typography variant="body1">{selectedPlayer.bankAccount}</Typography>
              <Typography variant="h6" sx={{ marginTop: "16px" }}>
                Lịch sử nộp quỹ
              </Typography>
              <ul>
                {selectedPlayer.history.map((entry, index) => (
                  <li key={index}>
                    <Typography variant="body2">
                      {entry.date}: {entry.amount} VND
                    </Typography>
                  </li>
                ))}
              </ul>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Đóng
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default PlayerManagement;

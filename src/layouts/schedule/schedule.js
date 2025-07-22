import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

function MatchSchedule({ location, time, shuttlePrice, courtPrice, waterPrice, noGutter }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {location}
          </MDTypography>

          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
            <MDButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Thời gian:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium">
              {time}
            </MDTypography>
          </MDTypography>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Tiền cầu:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium">
              {shuttlePrice} VND
            </MDTypography>
          </MDTypography>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Tiền sân:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium">
              {courtPrice} VND
            </MDTypography>
          </MDTypography>
        </MDBox>
        <MDTypography variant="caption" color="text">
          Tiền nước:&nbsp;&nbsp;&nbsp;
          <MDTypography variant="caption" fontWeight="medium">
            {waterPrice} VND
          </MDTypography>
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of MatchSchedule
MatchSchedule.defaultProps = {
  noGutter: false,
};

// Typechecking props for the MatchSchedule
MatchSchedule.propTypes = {
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  shuttlePrice: PropTypes.string.isRequired,
  courtPrice: PropTypes.string.isRequired,
  waterPrice: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default MatchSchedule;

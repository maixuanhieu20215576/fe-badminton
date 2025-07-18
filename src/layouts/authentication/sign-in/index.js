import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase-config";
import { use, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { loginByFacebook } from "hook/user.hook";
import MDAlert from "components/MDAlert";

function Basic() {
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const facebookUser = result.user;
      console.log("Logged in:", facebookUser);

      const user = {
        username: facebookUser.displayName,
        avatar: facebookUser.photoURL,
        facebook_id: facebookUser.uid,
      };
      const isLoginSuccess = await loginByFacebook({ user });
      localStorage.setItem("accessToken", facebookUser.accessToken);

      if (!isLoginSuccess) {
        setIsError(true);

        setTimeout(() => {
          setIsError(false);
        }, 3000);
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Facebook login failed:", error);
    }
  };

  return (
    <CoverLayout image={bgImage}>
      {isError && (
        <MDAlert color="primary" dismissible>
          Đăng nhập thất bại, vui lòng thử lại
        </MDAlert>
      )}
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Login using Facebook
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox>
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleFacebookLogin}>
                Continue with Facebook
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Basic;

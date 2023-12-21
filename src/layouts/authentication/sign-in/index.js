import { useContext, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

//import [parse]
import Parse from "myParse";
import { IsAvailable } from "context";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import { ToastContainer, toast } from "react-toastify";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isUser, setIsUser] = useState(false);
  let isUser = false;
  const navigate = useNavigate()

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleChangeInput = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };
  const notify = (error_msg, success_msg) => {
    if (error_msg != null)
    {
      toast.error(error_msg);
    }
    if (success_msg != null);
    {
      toast.success(success_msg);
    }
  };
  const testUser = () => {
    if (isUser == true) {
      navigate("/dashboard");
      notify(null, "User validated");   
    }
    else{ navigate("/authentication/sign-in")}
  }
  //Parse functions
  const myParserData = async () => {
    
    try {
      const query = new Parse.Query("MY_USER");
      const result = await query.find();
      // result.map(user => console.log(user.attributes.password))
      result.map(user => (user.attributes.email == email  && user.attributes.password == password) ? isUser = true : isUser = false)
      if (isUser = true)
      {
        testUser()
        
      }
     
      // setTimeout(testUser(), 5000)
    } catch (error) {
      notify(error.message, null);
    }
  };
  return (
    
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth onChange={handleChangeInput} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth onChange={handleChangePass}/>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={myParserData}>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
          <ToastContainer />
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;

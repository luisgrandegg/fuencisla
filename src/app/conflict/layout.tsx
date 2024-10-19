import React, { PropsWithChildren } from "react";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import "./layout.css";

const ParentAppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout">
      {/* Header / Navbar */}
      <AppBar className="layout__header" position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Public School Parent Portal
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content Section */}
      <Container className="layout__content" style={{ marginTop: "40px" }}>
        {children}
      </Container>

      {/* Footer */}
      <div className="layout__footer">
        <Typography variant="body2">Con ❤ desde usera</Typography>
      </div>
    </div>
  );
};

export default ParentAppLayout;

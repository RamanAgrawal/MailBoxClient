import { Box } from "@mui/material";
import { isMobile } from "../../ismobile";

const BoxUI = (props) => {
  return (
    <Box
      sx={{
        p: "1rem",
        marginLeft: !isMobile()&&"auto", // To align to the right, you can use marginLeft: 'auto'
        width: !isMobile() ? "75%" : "100%",
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxUI;

import React from "react";
import { Box, Container, Typography } from "@mui/joy";
import { BsTelegram, BsDiscord, BsYoutube, BsLinkedin } from "react-icons/bs";
import { FaHashnode } from "react-icons/fa6";
import Logo from "@/assets/Logo";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: "#1D2939",
        pt: 12,
        pb: 6,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            justifyContent: "space-between",
            alignItems: "center",
            gap: 6,
            mb: 6,
          }}
        >
          <Box>
            <Typography
              level="h2"
              startDecorator={<Logo />}
              sx={{ color: "white" }}
              textAlign={["center", "center", "left"]}
            >
              tech
              <Typography
                sx={{
                  display: "inline-block",
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(99.72deg, rgb(44, 105, 209) 7.35%, rgb(10, 188, 249) 86.94%);",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Fiesta
              </Typography>
            </Typography>

            <Typography sx={{ color: "white" }}>
              World first blockchain hackathon platform
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            <BsDiscord size={40} color="white" />
            <BsTelegram size={35} color="white" />
            <BsYoutube size={40} color="white" />
            <BsLinkedin size={30} color="white" />
            <FaHashnode size={35} color="white" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            alignItems: "center",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "white" }}>Terms and conditions</Typography>
          <Typography sx={{ color: "white" }}>Imprint</Typography>
          <Typography sx={{ color: "white" }}>
            Runs on the Human Protocol
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

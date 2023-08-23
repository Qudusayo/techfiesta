import React from "react";
import {
  Box,
  Container,
  Typography,
  Dropdown,
  Menu,
  MenuItem,
  MenuButton,
  ListItemDecorator,
  IconButton,
  Button,
  Link,
} from "@mui/joy";
import { BiLogIn } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { SiHackthebox } from "react-icons/si";
import Logo from "@/assets/Logo";
import * as NextLink from "next/link";

export default function Navbar() {
  return (
    <Box
      component={"nav"}
      sx={{
        bgcolor: "white",
        borderBottom: "1px solid #E5E5E5",
        py: 1.5,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          startDecorator={<Logo />}
          level="h3"
          textAlign={["center", "center", "left"]}
        >
          tech
          <span
            style={{
              display: "inline-block",
              color: "transparent",
              backgroundImage:
                "linear-gradient(99.72deg, rgb(44, 105, 209) 7.35%, rgb(10, 188, 249) 86.94%);",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Fiesta
          </span>
        </Typography>

        <Box display={["none", "flex", "flex"]} alignItems={"center"} gap={4}>
          <Typography>Hackathons</Typography>
          <Link
            href={"/auth/login"}
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
            component={NextLink.default}
          >
            <Button sx={{ px: 4 }}>Login</Button>
          </Link>
        </Box>
        <Box display={["block", "none", "none"]}>
          <Dropdown>
            <MenuButton
              slots={{ root: IconButton }}
              slotProps={{ root: { variant: "outlined", color: "neutral" } }}
            >
              <HiDotsVertical size={25} />
            </MenuButton>
            <Menu placement="bottom-end">
              <MenuItem component={NextLink.default} href="/auth/login">
                <ListItemDecorator>
                  <BiLogIn size={25} />
                </ListItemDecorator>
                Login
              </MenuItem>
              <MenuItem>
                <ListItemDecorator>
                  <SiHackthebox size={25} />
                </ListItemDecorator>
                Hackathons
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>
      </Container>
    </Box>
  );
}

import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { GoDotFill } from "react-icons/go";
import { FaGlobe } from "react-icons/fa";
import * as NextLink from "next/link";

const { format } = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export default function HackathonCard({
  title,
  host,
  bounty,
  participants,
  displayImage,
}: {
  title: string;
  host: string;
  bounty: number;
  participants: number;
  displayImage: string;
}) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        borderRadius: 4,
        boxShadow: "none",
        height: "100%",
        width: "100%",
        flexDirection: ["column", "row"],
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: ["center", "flex-start"],
          gap: 4,
        }}
      >
        <AspectRatio ratio="1" sx={{ width: [75, 75, 100], borderRadius: 4 }}>
          <img src={displayImage} srcSet={displayImage} loading="lazy" alt="" />
        </AspectRatio>
        <Typography
          startDecorator={<FaGlobe />}
          fontSize={"sm"}
          display={["inline-block", "none"]}
        >
          Online
        </Typography>
      </Box>
      <CardContent>
        <Typography level="h3" id="card-description">
          {title}
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            component={NextLink.default}
            underline="none"
            href="/"
            sx={{ color: "text.tertiary" }}
          >
            {host}
          </Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            my: 2,
          }}
        >
          <Chip
            variant="solid"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
            startDecorator={<GoDotFill />}
          >
            21 days left
          </Chip>

          <Typography
            startDecorator={<FaGlobe />}
            fontSize={"sm"}
            display={["none", "inline-block"]}
          >
            Online
          </Typography>
          <Typography
            fontSize={["md", "sm"]}
            display={["inline-block", "none"]}
          >
            Aug 1 - Aug 21, 2023
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography>{format(bounty)} in prizes</Typography>
          <Typography>{participants} Participants</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

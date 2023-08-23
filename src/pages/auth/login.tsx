import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { Container } from "@mui/joy";
import Logo from "@/assets/Logo";
import * as NextLink from "next/link";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

/**
 * This template uses [`Inter`](https://fonts.google.com/specimen/Inter?query=inter) font.
 */
export default function Login() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
          width:
            "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
          maxWidth: "100%",
          px: 0,
        }}
      >
        <Box
          component="header"
          sx={{
            py: 1.75,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            startDecorator={<Logo />}
            level="h3"
            textAlign={["center", "center", "left"]}
            component={NextLink.default}
            href={"/"}
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
        </Box>
        <Box
          component="main"
          sx={{
            my: "auto",
            py: 2,
            pb: 5,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 400,
            maxWidth: "100%",
            mx: "auto",
            borderRadius: "sm",
            "& form": {
              display: "flex",
              flexDirection: "column",
              gap: 2,
            },
            [`& .${formLabelClasses.asterisk}`]: {
              visibility: "hidden",
            },
          }}
        >
          <div>
            <Typography component="h1" fontSize="xl2" fontWeight="lg">
              Sign in to your account
            </Typography>
            <Typography level="body-sm" sx={{ my: 1, mb: 3 }}>
              Welcome back
            </Typography>
          </div>
          <form
            onSubmit={(event: React.FormEvent<SignInFormElement>) => {
              event.preventDefault();
              const formElements = event.currentTarget.elements;
              const data = {
                email: formElements.email.value,
                password: formElements.password.value,
                persistent: formElements.persistent.checked,
              };
              alert(JSON.stringify(data, null, 2));
            }}
          >
            <FormControl required>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl required>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Checkbox size="sm" label="Keep me logged in" name="persistent" />
              <Link fontSize="sm" href="#replace-with-a-link" fontWeight="lg">
                Forgot your password?
              </Link>
            </Box>
            <Button type="submit" fullWidth>
              Sign in
            </Button>
          </form>
          <Typography textAlign={"center"}>
            Don&apos;t have an techFiesta account?{" "}
            <Link fontSize="sm" href="#replace-with-a-link" fontWeight="lg">
              Sign Up Now!
            </Link>
          </Typography>
        </Box>
        <Box component="footer" sx={{ py: 3 }}>
          <Typography level="body-xs" textAlign="center">
            © Your techFiesta {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

"use client";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Stack, Container, Typography, Button } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Stack bgcolor={"#18BA51"} width="100vw">
      <Image alt="" src="Bg.svg" width={10} height={10} />
      <Container>
        <Stack direction={"column"} gap={6}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Image alt="" src="LogoW.svg" width={35} height={35} />
            <Typography color={"#FFFFFF"} fontSize={"20px"} fontWeight={"700"}>
              Food Delivery
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent={"space-evenly"} gap={7}>
            <Button
              sx={{ fontSize: "16px", color: "#FFFFFF", fontWeight: "590" }}
            >
              Нүүр
            </Button>
            <Button
              sx={{ fontSize: "16px", color: "#FFFFFF", fontWeight: "590" }}
            >
              Холбоо барих
            </Button>{" "}
            <Button
              sx={{ fontSize: "16px", color: "#FFFFFF", fontWeight: "590" }}
            >
              Хоолны цэс
            </Button>{" "}
            <Button
              sx={{ fontSize: "16px", color: "#FFFFFF", fontWeight: "590" }}
            >
              Үйлчилгээний нөхцөл
            </Button>{" "}
            <Button
              sx={{ fontSize: "16px", color: "#FFFFFF", fontWeight: "590" }}
            >
              Хүргэлтийн бүс
            </Button>
            <Button
              sx={{ fontSize: "16px", color: "#FFFFFF", fontWeight: "590" }}
            >
              Нууцлалын бодлого
            </Button>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1.5}
          >
            <Facebook htmlColor="#FFFFFF" fontSize="large" />
            <Instagram htmlColor="#FFFFFF" fontSize="large" />
            <Twitter htmlColor="#FFFFFF" fontSize="large" />
          </Stack>

          <Stack
            direction={"column"}
            alignItems={"center"}
            paddingTop={5}
            paddingBottom={10}
          >
            <Typography color={"#FFFFFF"} fontSize={"16px"} fontWeight={"400"}>
              © 2024 Pinecone Foods LLC{" "}
            </Typography>
            <Typography color={"#FFFFFF"} fontSize={"16px"} fontWeight={"400"}>
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;

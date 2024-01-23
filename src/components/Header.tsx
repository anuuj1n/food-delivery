"use client";

import { Stack, Container, Typography } from "@mui/material";
import Image from "next/image";
import { Person, Search, ShoppingBasket } from "@mui/icons-material";
import CustomInput from "./CustomInput";

const Header = () => {
  return (
    <Stack width="100vw" marginTop={2}>
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"} gap={10}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
          >
            <Image alt="" src="Logo.svg" width={30} height={30} />

            <Typography color={"#000000"} fontSize={"14px"} fontWeight={"700"}>
              НҮҮР
            </Typography>

            <Typography color={"#000000"} fontSize={"14px"} fontWeight={"700"}>
              ХООЛНЫ ЦЭС
            </Typography>

            <Typography color={"#000000"} fontSize={"14px"} fontWeight={"700"}>
              ХҮРГЭЛТИЙН БҮС
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            gap={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CustomInput
              placeholder="Хайх"
              size="small"
              startIcon={<Search />}
            />

            <Stack direction={"row"} gap={1.5}>
              <ShoppingBasket />
              <Typography fontSize={"14px"} fontWeight={"700"}>
                Сагс
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={1.5}>
              <Person />
              <Typography fontSize={"14px"} fontWeight={"700"}>
                Нэвтрэх
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;

import { ChangeEvent, useState } from "react";
import CustomInput from "./CustomInput";
import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [value, setValue] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  const router = useRouter();

  const handleClick = () => {
    router.push("/SignUp");
  };

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
      paddingTop={15}
      paddingBottom={15}
    >
      <Typography fontSize={"28px"} fontWeight={"700"}>
        Нэвтрэх
      </Typography>

      <Stack width={348} gap={2}>
        <CustomInput
          placeholder="Имэйл хаягаа оруулна уу"
          label="Имэйл"
          type="text"
        />

        <CustomInput
          placeholder="Нууц үг"
          label="Нууц үг"
          value={value}
          onChange={handleChange}
          type="password"
        />

        {/* justifyContent: "flex-end" BAIH YUM SHIG SANAGDAAD BHIN */}

        <Stack direction={"row"} justifyContent={"flex-end"}>
          <Button size="small" sx={{ fontSize: "10px" }}>
            Нууц үг сэргээх
          </Button>
        </Stack>
      </Stack>

      <Stack
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        paddingBottom={10}
        width={348}
      >
        <Button variant="contained" disabled fullWidth sx={{ padding: "12px" }}>
          Нэвтрэх
        </Button>

        <Typography color={"#3F4145"} fontSize={"14px"} fontWeight={"400"}>
          Эсвэл
        </Typography>
        <Stack width={348}>
          <Button
            onClick={handleClick}
            variant="outlined"
            fullWidth
            sx={{ padding: "12px" }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;

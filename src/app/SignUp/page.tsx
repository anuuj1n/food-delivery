import { Button, Stack, Typography } from "@mui/material";
import CustomInput from "../../components/CustomInput";

const SignUp = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      paddingTop={15}
      paddingBottom={15}
    >
      <Typography fontSize={28} fontWeight={700}>
        Бүртгүүлэх
      </Typography>
      <Stack width={348} gap={2}>
        <CustomInput placeholder="Нэрээ оруулна уу" label="Нэр" type="text" />
        <CustomInput
          placeholder="И-мэйл хаягаа оруулна уу"
          label="И-мэйл"
          type="text"
        />
        <CustomInput
          placeholder="Та хаягаа оруулна уу"
          label="Хаяг"
          type="text"
        />
        <CustomInput
          placeholder="Нууц үгээ оруулна уу"
          label="Нууц үг"
          type="password"
        />
        <CustomInput
          placeholder="Нууц үгээ оруулна уу"
          label="Нууц үг давтах"
          type="password"
        />
      </Stack>
      <Button></Button>
      <Stack width={348}>
        <Button variant="contained" disabled sx={{ padding: "12px" }}>
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};

export default SignUp;

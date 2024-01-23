"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
  useState,
} from "react";

type CustomInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  startIcon?: ReactNode;
  size?: "small" | "medium";
};

const CustomInput = (props: CustomInputProps) => {
  const {
    placeholder,
    value,
    label,
    onChange,
    type = "text",
    startIcon,
    size = "medium",
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Stack gap={0.5}>
      <Typography fontSize={14} fontWeight={"400"}>
        {label}
      </Typography>
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type === "password" && showPassword ? "text" : type}
        sx={{
          bgcolor: "#ECEDF0",
        }}
        inputProps={{
          style: {
            padding: size === "small" ? "8px 16px" : "14px 16px",
          },
        }}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default CustomInput;

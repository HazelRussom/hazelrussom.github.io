import React from "react";
import { Typography, Box } from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <Box m={4}>
      <Typography color='primary' variant='h1' align="center">
        {t("name")}
      </Typography>
      <Typography color='primary' variant='h2' align="center">
        Software Engineer
      </Typography>
    </Box>
  );
}
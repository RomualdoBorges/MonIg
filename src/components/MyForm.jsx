import React from "react";
import { Box, TextField, Select, MenuItem, ListItemText } from "@mui/material";

export default function MyForm(props) {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
      {/* Mapeamento dos campos */}
      {props.campos.map((campo) => (
        <Box gridColumn={campo.gridColumn} key={campo.name}>
          {campo.select ? (
            <Select
              fullWidth
              label={campo.label}
              name={campo.name}
              value={campo.value}
              onChange={campo.onChange}
              disabled={props.disabled || campo.disabled}
              size="small"
              error={campo.error}
              //   helperText={campo.helperText}
            >
              {campo.select.map((nivel) => (
                <MenuItem key={nivel} value={nivel}>
                  <ListItemText primary={nivel} />
                </MenuItem>
              ))}
            </Select>
          ) : (
            <TextField
              fullWidth
              label={campo.label}
              name={campo.name}
              value={campo.value}
              onChange={campo.onChange}
              disabled={props.disabled || campo.disabled}
              size="small"
              error={campo.error}
              //   helperText={campo.helperText}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}

import React from "react";
import { EscolaContext } from "common/context/Escola";
import { Alert, Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Edificio() {
  const { nome, email, abrirSnackbar, setAbrirSnackbar } =
    React.useContext(EscolaContext);

  const navigate = useNavigate();

  return (
    <div>
      <h1>{nome}</h1>
      <h1>{email}</h1>

      <Button onClick={() => navigate("/")}>Voltar</Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={abrirSnackbar}
        onClose={() => setAbrirSnackbar(false)}
      >
        <Alert onClose={() => setAbrirSnackbar(false)} severity="success">
          Escola cadastrada com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
}

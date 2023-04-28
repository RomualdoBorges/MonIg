import React from "react";
import { Button } from "@mui/material";
import { EscolaContext } from "common/context/Escola";
import MyForm from "components/MyForm";

export default function Escola() {
  const {
    nome,
    setNome,
    cnpj,
    setCnpj,
    telefone,
    setTelefone,
    email,
    setEmail,
    nivel,
    setNivel,
    cep,
    setCep,
    logradouro,
    setLogradouro,
    numero,
    setNumero,
    cidade,
    estado,
    complemento,
    setComplemento,
    setCidade,
    setEstado,
    onSubmit,
    enviado,
    editar,
    setEditar,
    setAbrirSnackbar,
  } = React.useContext(EscolaContext);

  const campos = [
    {
      label: "Nome",
      name: "nome",
      gridColumn: "span 6",
      value: nome,
      onChange: (event) => setNome(event.target.value),
    },
    {
      label: "CNPJ",
      name: "cnpj",
      gridColumn: "span 3",
      value: cnpj,
      onChange: (event) => setCnpj(event.target.value),
    },
    {
      label: "Telefone",
      name: "telefone",
      gridColumn: "span 3",
      value: telefone,
      onChange: (event) => setTelefone(event.target.value),
    },
    {
      label: "E-mail",
      name: "email",
      gridColumn: "span 6",
      value: email,
      onChange: (event) => setEmail(event.target.value),
    },
    {
      label: "Niveis de ensino",
      name: "niveis",
      gridColumn: "span 6",
      value: nivel,
      select: ["fundamenta", "medio"],
      onChange: (event) => setNivel(event.target.value),
    },
    {
      label: "CEP",
      name: "CEP",
      gridColumn: " 1 / span 3",
      value: cep,
      onChange: (event) => setCep(event.target.value),
    },
    {
      label: "Logradouro",
      name: "logradouro",
      gridColumn: "span 6",
      value: logradouro,
      onChange: (event) => setLogradouro(event.target.value),
    },
    {
      label: "Número",
      name: "numero",
      gridColumn: "span 3",
      value: numero,
      onChange: (event) => setNumero(event.target.value),
    },
    {
      label: "Complemento",
      name: "complemento",
      gridColumn: "span 3",
      value: complemento,
      onChange: (event) => setComplemento(event.target.value),
    },
    {
      label: "Cidade",
      name: "cidade",
      gridColumn: "span 3",
      value: cidade,
      onChange: (event) => setCidade(event.target.value),
    },
    {
      label: "Estado",
      name: "estado",
      gridColumn: "span 3",
      value: estado,
      onChange: (event) => setEstado(event.target.value),
    },
  ];

  return (
    <div className="container">
      <h1 style={{ margin: "2rem 0rem" }}>Cadastro de Escolas</h1>

      <form onSubmit={onSubmit}>
        <MyForm campos={campos} disabled={!editar} />
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
          {/* Se editar = false o botão disabilita */}
          <Button
            type="submit"
            variant="contained"
            disabled={!editar}
            onClick={() => setAbrirSnackbar(true)}
          >
            Cadastrar
          </Button>

          {/* Se enviado = true o botão renderiza */}
          {enviado && (
            // Ao clicar no botão
            <Button onClick={() => setEditar(!editar)}>
              {editar ? "Cancelar" : "Editar"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

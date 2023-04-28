import React from "react";
import { useNavigate } from "react-router-dom";

export const EscolaContext = React.createContext();
EscolaContext.displayName = "Escola";

export const EscolaProvider = ({ children }) => {
  // Estados do Formulário
  const [nome, setNome] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [logradouro, setLogradouro] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [complemento, setComplemento] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");

  // Estados dos Botões
  const [enviado, setEnviado] = React.useState(false);
  const [editar, setEditar] = React.useState(true);

  // Estado da mensagem
  const [abrirSnackbar, setAbrirSnackbar] = React.useState(false);

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({
      nome,
      cnpj,
      telefone,
      email,
      cep,
      logradouro,
      numero,
      complemento,
      cidade,
      estado,
    });
    navigate("/edificio");
    setEnviado(true);
    setEditar(false);
  };

  React.useEffect(() => {
    if (enviado) {
      // envia o POST request aqui
    }
  }, [enviado]);

  return (
    <EscolaContext.Provider
      value={{
        nome,
        setNome,
        cnpj,
        setCnpj,
        telefone,
        setTelefone,
        email,
        setEmail,
        cep,
        setCep,
        logradouro,
        setLogradouro,
        numero,
        setNumero,
        complemento,
        setComplemento,
        cidade,
        setCidade,
        estado,
        setEstado,
        onSubmit,
        enviado,
        editar,
        setEditar,
        abrirSnackbar,
        setAbrirSnackbar,
      }}
    >
      {children}
    </EscolaContext.Provider>
  );
};

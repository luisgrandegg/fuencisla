"use client";

import { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import axios from "axios";

export function ConflictForm() {
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  const [motivo, setMotivo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/conflict", {
      email,
      curso,
      motivo,
      descripcion,
    });
    alert("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <TextField
        label="Email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl required>
        <InputLabel>Curso del alumno</InputLabel>
        <Select
          value={curso}
          onChange={(e) => setCurso(e.target.value as string)}
        >
          <MenuItem value="Infantil I">Infantil I</MenuItem>
          <MenuItem value="Infantil II">Infantil II</MenuItem>
          <MenuItem value="1 Primaria">1 Primaria</MenuItem>
          <MenuItem value="2 Primaria">2 Primaria</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Motivo del conflicto</InputLabel>
        <Select
          value={motivo}
          onChange={(e) => setMotivo(e.target.value as string)}
        >
          <MenuItem value="Poca comida">Poca comida</MenuItem>
          <MenuItem value="Han forzado a mi hijo a comer">
            Han forzado a mi hijo a comer
          </MenuItem>
        </Select>
      </FormControl>
      <TextareaAutosize
        minRows={8}
        placeholder="Descripción del conflicto"
        required
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        style={{ width: "100%" }}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}

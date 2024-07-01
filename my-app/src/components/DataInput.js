import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const DataInput = ({ onSubmit }) => {
  // Estado para cada campo del formulario
  const [tipoDoc, setTipoDoc] = useState('');
  const [numDoc, setNumDoc] = useState('');
  const [codUos, setCodUos] = useState(['']);

  // aca maneja los cambios en los campos "tipo_doc"
  const handleTipoDocChange = (e) => {
    setTipoDoc(e.target.value);
  };

  // aca maneja los cambios en los campos "num_doc"
  const handleNumDocChange = (e) => {
    setNumDoc(e.target.value);
  };

  // aca se maneja los cambios en los campos "cod_uo"
  const handleCodUoChange = (index, value) => {
    const newCodUos = [...codUos];
    newCodUos[index] = value;
    setCodUos(newCodUos);
  };

  // aca se añade un nuevo "cod_uo"
  const handleAddCodUo = () => {
    setCodUos([...codUos, '']);
  };

  // aca se envia el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ tipoDoc, numDoc, codUos });
    setTipoDoc('');
    setNumDoc('');
    setCodUos(['']);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Tipo Doc</Form.Label>
        <Form.Control
          type="text"
          value={tipoDoc}
          onChange={handleTipoDocChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Num Doc</Form.Label>
        <Form.Control
          type="text"
          value={numDoc}
          onChange={handleNumDocChange}
        />
      </Form.Group>
      {codUos.map((codUo, index) => (
        <Form.Group key={index}>
          <Form.Label>Cod UO {index + 1}</Form.Label>
          <Form.Control
            type="text"
            value={codUo}
            onChange={(e) => handleCodUoChange(index, e.target.value)}
          />
        </Form.Group>
      ))}
      <Button variant="secondary" onClick={handleAddCodUo}>
        Add Cod UO
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default DataInput;

import React, { useState } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';

const DataModal = ({ show, handleClose, data, handleUpdate }) => {
  const [newData, setNewData] = useState(data);

  // aqui se maneja cambios en los campos del modal
  const handleChange = (index, key, value) => {
    const updatedData = newData.map((item, i) => {
      if (i === index) {
        return { ...item, [key]: { S: value } };
      }
      return item;
    });
    setNewData(updatedData);
  };

  // se añade un nuevo cod_uo en el modal
  const handleAddCodUo = (index) => {
    const updatedData = newData.map((item, i) => {
      if (i === index) {
        const newKey = `cod_uo${Object.keys(item).filter(k => k.startsWith('cod_uo')).length + 1}`;
        return { ...item, [newKey]: { S: '' } };
      }
      return item;
    });
    setNewData(updatedData);
  };

  // guarda y confima cambios
  const handleSave = () => {
    handleUpdate(newData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Data Completa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tipo Doc</th>
              <th>Num Doc</th>
              <th>Cod UO</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((item, index) => (
              <tr key={index}>
                <td>{item.tipo_doc.S}</td>
                <td>{item.num_doc.S}</td>
                <td>
                  {Object.keys(item).filter(key => key.startsWith('cod_uo')).map((codKey, idx) => (
                    <Form.Control
                      key={idx}
                      type="text"
                      value={item[codKey].S}
                      onChange={(e) => handleChange(index, codKey, e.target.value)}
                      className="mb-2"
                    />
                  ))}
                  <Button variant="secondary" onClick={() => handleAddCodUo(index)}>
                    Agregar Cod UO
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DataModal;

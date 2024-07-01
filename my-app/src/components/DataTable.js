import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tipo Doc</th>
          <th>Num Doc</th>
          <th>Última UO</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.tipo_doc}</td>
            <td>{item.num_doc}</td>
            <td>{item.ultima_uo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;

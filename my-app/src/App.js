import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import DataModal from './components/DataModal';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ransaa from './assets/ransaa.png';

const initialData = [
  {
    tipo_doc: { S: 'DNI' },
    num_doc: { S: '04543871' },
    cod_uo1: { S: '50000334' },
    cod_uo2: { S: '50000340' },
    cod_uo3: { S: '50000518' },
    cod_uo4: { S: '50000454' },
    cod_uo5: { S: '' },
    cod_uo6: { S: '' },
    cod_uo7: { S: '' },
    cod_uo8: { S: '' },
    cod_uo9: { S: '' },
    cod_uo10: { S: '' },
  },
  {
    tipo_doc: { S: 'DNI' },
    num_doc: { S: '04543872' },
    cod_uo1: { S: '500003342' },
    cod_uo2: { S: '500003402' },
    cod_uo3: { S: '500005182' },
    cod_uo4: { S: '' },
    cod_uo5: { S: '' },
    cod_uo6: { S: '' },
    cod_uo7: { S: '' },
    cod_uo8: { S: '' },
    cod_uo9: { S: '' },
    cod_uo10: { S: '' },
  },
  {
    tipo_doc: { S: 'DNI' },
    num_doc: { S: '04543873' },
    cod_uo1: { S: '500003343' },
    cod_uo2: { S: '500003403' },
    cod_uo3: { S: '500005183' },
    cod_uo4: { S: '500004543' },
    cod_uo5: { S: '500004783' },
    cod_uo6: { S: '' },
    cod_uo7: { S: '' },
    cod_uo8: { S: '' },
    cod_uo9: { S: '' },
    cod_uo10: { S: '' },
  },
  {
    tipo_doc: { S: 'DNI' },
    num_doc: { S: '04543874' },
    cod_uo1: { S: '500003344' },
    cod_uo2: { S: '500003404' },
    cod_uo3: { S: '' },
    cod_uo4: { S: '' },
    cod_uo5: { S: '' },
    cod_uo6: { S: '' },
    cod_uo7: { S: '' },
    cod_uo8: { S: '' },
    cod_uo9: { S: '' },
    cod_uo10: { S: '' },
  },
  {
    tipo_doc: { S: 'DNI' },
    num_doc: { S: '04543875' },
    cod_uo1: { S: '500003345' },
    cod_uo2: { S: '500003405' },
    cod_uo3: { S: '500005185' },
    cod_uo4: { S: '500004545' },
    cod_uo5: { S: '500004785' },
    cod_uo6: { S: '' },
    cod_uo7: { S: '' },
    cod_uo8: { S: '' },
    cod_uo9: { S: '' },
    cod_uo10: { S: '' },
  }
];

const App = () => {
  const [result, setResult] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(initialData);

  const processData = (data) => {  // se procesa la data y se obtiene el último cod_uo
    return data.map(person => {
      const tipo_doc = person.tipo_doc.S;
      const num_doc = person.num_doc.S;
      let ultima_uo = '';

      for (let i = 10; i >= 1; i--) { // aqui se busca el ultimo cod-uo no vacio desde cod_uo10 hasta cod_uo1
        if (person[`cod_uo${i}`] && person[`cod_uo${i}`].S) {
          ultima_uo = person[`cod_uo${i}`].S;
          if (ultima_uo) break;
        }
      }

      return { //se retorna la data procesada 
        tipo_doc,
        num_doc,
        ultima_uo
      };
    });
  };
 //aqui se procesa los datos cuando data cambia
  useEffect(() => {
    const processedData = processData(data);
    setResult(processedData);
  }, [data]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleUpdateData = (updatedData) => {
    setData(updatedData);
  };

  return (
    <div className="container">
      <header className="d-flex align-items-center mb-3">
        <img src={ransaa} alt="Logo" className="logo" />
        <h1 className="ms-3">Data Processing App</h1>
      </header>
      <button className="btn btn-primary mb-3" onClick={handleShowModal}>
        Mostrar Data Completa
      </button>
      <DataTable data={result} />
      <DataModal
        show={showModal}
        handleClose={handleCloseModal}
        data={data}
        handleUpdate={handleUpdateData}
      />
    </div>
  );
};

export default App;
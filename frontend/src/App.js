import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [citas, setCitas] = useState([]);
  const [nuevaCita, setNuevaCita] = useState({ nombre: '', modelo: '', servicio: '', fecha: '' });

  useEffect(() => {
    const fetchCitas = async () => {
      const response = await axios.get('http://localhost:5000/citas');
      setCitas(response.data);
    };
    fetchCitas();
  }, []);

  const agregarCita = async () => {
    const response = await axios.post('http://localhost:5000/citas', nuevaCita);
    setCitas([...citas, response.data]);
    setNuevaCita({ nombre: '', modelo: '', servicio: '', fecha: '' });
  };

  return (
    <div>
      <h1>Moto Rápida - Gestión de Citas</h1>
      <input placeholder="Nombre del cliente" value={nuevaCita.nombre} onChange={e => setNuevaCita({ ...nuevaCita, nombre: e.target.value })} />
      <input placeholder="Modelo de moto" value={nuevaCita.modelo} onChange={e => setNuevaCita({ ...nuevaCita, modelo: e.target.value })} />
      <input placeholder="Servicio solicitado" value={nuevaCita.servicio} onChange={e => setNuevaCita({ ...nuevaCita, servicio: e.target.value })} />
      <input type="date" value={nuevaCita.fecha} onChange={e => setNuevaCita({ ...nuevaCita, fecha: e.target.value })} />
      <button onClick={agregarCita}>Agregar Cita</button>
      <ul>
        {citas.map((cita, i) => (
          <li key={i}>
            {cita.nombre} - {cita.modelo} - {cita.servicio} - {cita.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

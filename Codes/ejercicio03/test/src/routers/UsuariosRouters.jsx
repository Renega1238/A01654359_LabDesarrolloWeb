function Usuarios({ data }) {
  return data.map((a) => <li key={a.id}> {a.name} </li>);
}

export default Usuarios;

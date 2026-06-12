import "./Home.css";

export default function Home() {
  return (
    <>

      <div className="perfil">

        <div className="perfil-topo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Perfil"
          />

          <h2>Maria Eduarda</h2>
          <p>Estudante do Ensino Médio</p>
        </div>

        <div className="card">
          <h3>🎯 Área de Interesse</h3>
          <p>Tecnologia e Inovação</p>
        </div>

        <div className="card">
          <h3>📝 Último Teste Vocacional</h3>
          <p>Realizado em 12/06/2026</p>
          <button>Ver Resultado</button>
        </div>

        <div className="card">
          <h3>⭐ Profissões Recomendadas</h3>

          <ul>
            <li>Engenharia de Software</li>
            <li>Ciência da Computação</li>
            <li>Sistemas de Informação</li>
          </ul>
        </div>

        <div className="card">
          <h3>📚 Cursos Favoritados</h3>

          <ul>
            <li>Ciência da Computação</li>
            <li>Análise e Desenvolvimento de Sistemas</li>
            <li>Engenharia de Software</li>
          </ul>
        </div>

        <div className="card">
          <h3>📊 Estatísticas</h3>
          <p>Testes realizados: 3</p>
          <p>Profissões visualizadas: 12</p>
          <p>Cursos salvos: 3</p>
        </div>

        <div className="card">
          <button>Editar Perfil</button>
        </div>

      </div>
    </>
  );
}
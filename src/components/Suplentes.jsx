import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, eliminarSuplente }) => (
  <section>
    <h2>Suplentes</h2>
    <div className="cancha">
      {suplentes.map(suplente => (
        <article className="suplente" key={suplente.id}>
          <div>
            <img src={suplente.foto} alt={suplente.name} />
            <button onClick={() => eliminarSuplente(suplente)}>X</button>
          </div>
          <p>{suplente.name}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  suplentes: state.suplentes
});

const mapDispatchToProps = dispatch => ({
  eliminarSuplente(suplente) {
    dispatch({
      type: "ELIMINAR_SUPLENTE",
      suplente
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);

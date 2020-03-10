import React from "react";
import { connect } from "react-redux";

const Titulares = ({ titulares, eliminarTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha">
      {titulares.map(titular => (
        <article className="titular" key={titular.id}>
          <div>
            <img src={titular.foto} alt={titular.name} />
            <button onClick={() => eliminarTitular(titular)}>X</button>
          </div>
          <p>{titular.name}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  titulares: state.titulares
});

const mapDispatchToProps = dispatch => ({
  eliminarTitular(titular) {
    dispatch({
      type: "ELIMINAR_TITULAR",
      titular
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);

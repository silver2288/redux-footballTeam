import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Juan Carlitos",
      foto:
        "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
    },
    {
      id: 2,
      nombre: "Beto Quiroga",
      foto:
        "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
      id: 3,
      nombre: "Alejo Garcia",
      foto:
        "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
    },
    {
      id: 4,
      nombre: "Juan Disain",
      foto:
        "https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg"
    },
    {
      id: 5,
      nombre: "Alvaro Felipe",
      foto:
        "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-08/alvaro.jpg?itok=08DTxTR9"
    },
    {
      id: 6,
      nombre: "Alexys Lozada",
      foto:
        "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-09/tioalexys.jpg?itok=X6xIi4DI"
    }
  ],
  titulares: [],
  suplentes: []
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter(
        jugador => jugador.id !== action.jugador.id
      )
    };
  }
  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(
        jugador => jugador.id !== action.jugador.id
      )
    };
  }
  if (action.type === "ELIMINAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.filter(
        titular => titular.id !== action.titular.id
      ),
      jugadores: state.jugadores.concat(action.titular)
    };
  }
  if (action.type === "ELIMINAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.filter(
        suplente => suplente.id !== action.suplente.id
      ),
      jugadores: state.jugadores.concat(action.suplente)
    };
  }
  return state;
};

export default createStore(reducerEntrenador);

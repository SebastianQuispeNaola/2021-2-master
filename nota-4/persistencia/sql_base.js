const models = require("../models");
const alumno = models.Alumno;
const nota = models.Nota;
const peso = models.Peso;


exports.findAlumnoByCodigo = (cod) => {
    return alumno.findByPk(cod, { include: ["notitas"] })
      .then((a) => {
        return a;
      })
      .catch((err) => {
        console.log(">> Error al buscar alumno: ", err);
      });
  };
  
  exports.findNotasByAlumno = (cod) => {
    return nota.findAll(
       {
          where : {
              alumnoId : cod
          }
      }
    )
      .then((a) => {
        return a;
      })
      .catch((err) => {
        console.log(">> Error al buscar Notas de Alumno: ", err);
      });
  };

  exports.findPesos = () => {
    return peso.findAll()
      .then((listado) => {
        return listado;
      })
      .catch((err) => {
        console.log(">> Error al buscar pesos: ", err);
      });
  };
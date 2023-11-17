// alert(
//   "Hola! mi nombre es Agustin Raña.\n Como kinesiologo mi principal objetivo es ayudarte a mejorar tu calidad de vida.\n Por eso me gustaria hacerte unas preguntas sobre tus habitos en el trabajo"
// );
// const trabajoSedentario = prompt(
//   "En tu trabajo, ¿Pasas la mayor parte del tiempo sentado/a? (Sí/No)"
// );
// if (trabajoSedentario === "si") {
//   const horasSentado = parseInt(
//     prompt("¿Cuántas horas al día pasas sentado en tu trabajo?")
//   );
//   console.log(
//     "El paciente pasa " + horasSentado + " horas sentado en el trabajo"
//   );

//   if (horasSentado <= 7) {
//     const levantarseCadaMediaHora = prompt(
//       "¿Te levantas al menos cada media hora? (Sí/No)"
//     );
//     console.log(
//       "El paciente " + levantarseCadaMediaHora + " se levanta cada media hora"
//     );
//     if (levantarseCadaMediaHora === "si") {
//       const pausasActivas = prompt(
//         "¿Realizas pausas activas durante tu jornada laboral? (Sí/No)"
//       );
//       console.log(
//         " y " +
//           pausasActivas +
//           " realiza pausas activas durante su jornada laboral "
//       );
//       if (pausasActivas === "si") {
//         alert(
//           "¡Muy bien! Es importante realizar pausas activas cada media hora para mantener la salud. ¡Sigue asi!"
//         );
//       } else {
//         alert(
//           "Considera tomar pausas activas con frecuencia para evitar problemas de salud en el mediano y largo plazo. Cuanto antes se comience a tener habitos saludables en el trabajo mejor. ¡Tu salud es lo primero!"
//         );
//       }
//     } else {
//       alert(
//         "Considera tomar una pausa activa cada media hora durante tu jornada laboral. Realizar estos ejercicios te ayudaran a evitar o minimizar dolores relacionados al trabajo y en el largo plazo, evitaran patologias y dolores mas intensos"
//       );
//     }
//   } else if (horasSentado >= 8) {
//     const horasSeguidas = prompt(
//       "¿Pasas 4 horas SEGUIDAS (o más) sentado? (Sí/No)"
//     );
//     console.log(
//       "De todas esas horas trabajadas " +
//         horasSeguidas +
//         " pasa 4 horas SEGUIDAS sentadas"
//     );
//     if (horasSeguidas === "no") {
//       const levantarseCadaMediaHora = prompt(
//         "¿Te levantas al menos cada media hora? (Sí/No)"
//       );
//       console.log(
//         "El paciente " + levantarseCadaMediaHora + " se levanta cada media hora"
//       );
//       if (levantarseCadaMediaHora === "si") {
//         const pausasActivas = prompt(
//           "¿Realizas pausas activas durante tu jornada laboral? (Sí/No)"
//         );
//         console.log(
//           " y " +
//             pausasActivas +
//             " realiza pausas activas durante su jornada laboral "
//         );
//         if (pausasActivas === "si") {
//           alert(
//             "¡Muy bien! Es importante realizar pausas activas cada media hora para mantener la salud. ¡Sigue asi!."
//           );
//         } else {
//           alert(
//             "Considera tomar pausas activas para evitar problemas de salud en el mediano y largo plazo. Cuanto antes se comience a tener habitos saludables en el trabajo mejor. ¡Tu salud es lo primero!."
//           );
//         }
//       } else {
//         alert(
//           "Considera tomar pausas activas con frecuencia para evitar problemas de salud en el mediano y largo plazo. Cuanto antes se comience a tener habitos saludables en el trabajo mejor. ¡Tu salud es lo primero!"
//         );
//       }
//     } else {
//       alert(
//         "Considera tomar una pausa activa cada media hora durante tu jornada laboral. Realizar estos ejercicios te ayudaran a evitar o minimizar dolores relacionados al trabajo y en el largo plazo, evitaran patologias y dolores mas intensos"
//       );
//     }
//   }
// } else {
//   alert(
//     "Muchas gracias por tu respuesta. Pronto tendremos un test para vos. Te invito a que recorras el sitio y me conozcas."
//   );
// }


// Lista de obras sociales
let obrasSociales = [ 'OSFATUN', 'OSPIM', 'OSPESGA', 'OSPE', 'OSPOCE', 'IAPOS', 'OSSSB', 'ELEVAR', 'ESENCIAL', 'AVALIAN', 'PREMEDIC', 'SEGURARSE', 'PLENIT', 'SWISS MEDICAL', 'AMR', 'OSCEP', 'OSDE', 'AMR', 'SANCOR SALUD', 'OSPAC', 'SADAIC' ]; 

// Funcion para buscar la obra social
function buscarObraSocial(){
  while (true){
    let obraSocialPaciente = prompt('Ingrese su obra social:');
obraSocialPaciente  =  obraSocialPaciente.toUpperCase() 

    if (obraSocialPaciente.toUpperCase()=== 'PARTICULAR'){
      alert('Usted ha seleccionado PARTICULAR. Por favor contactese con nosotros para cotizaciones y planes de tratamiento');
      console.log ('Usted ha seleccionado PARTICULAR. Por favor contactese con nosotros para cotizaciones y planes de tratamiento');
      break;
    }

    if (obrasSociales .includes(obraSocialPaciente)){
      alert('Su Obra Social ' + obraSocialPaciente + ' tiene convenio con nuestra institucion. Por favor, al momento de su turno acerquese con la orden de consulta y derivación. No es necesario abonar ningun monto extra. Muchas Gracias');
      console.log('Su Obra Social ' + obraSocialPaciente + ' tiene convenio con nuestra institucion. Por favor, al momento de su turno acerquese con la orden de consulta y derivación. No es necesario abonar ningun monto extra. Muchas Gracias');
      break;
    } else{
      alert('Obra social no encontrada. Intente nuevamente');
      console.log('Obra social no encontrada. Intente nuevamente');
    }
  }
}

buscarObraSocial();
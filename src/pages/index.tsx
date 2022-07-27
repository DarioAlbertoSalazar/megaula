import React from "react";
import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <Layout>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-10 lg:px-40">
            <div className="overflow-hidden">
              <table className="min-w-full text-justify">
                <tbody>
                  <tr>
                    <td className="text-justify px-6 py-4">
                      Mucho gusto, mi nombre es Norman Cantú y <br />
                      esta es la historia de como comenzó el canal de MegAula.{" "}
                      <br />
                      El canal de MegAula nació debido a las sumas <br />
                      excesivas por cursos de preparación para el examen <br />
                      de ingreso a la preparatoria o a la universidad por <br />
                      parte de innumerables negocios a lo largo de todo el{" "}
                      <br />
                      país y seguramente en otros países es la misma situación.{" "}
                      <br />
                      Es por esto que me comprometí a realizar el mejor <br />
                      curso en línea para los exámenes de ingreso hacia la{" "}
                      <br />
                      preparatoria, a la universidad y hasta para posgrado.{" "}
                      <br />
                      En esta pagina encontrarás las guías de los exámenes{" "}
                      <br />
                      con hipervínculos a mis videos de YouTube, <br />
                      simuladores de tu examen, trabajos extra para que <br />
                      practiques, un test vocacional y una entrevista con <br />
                      alguien egresado de la carrera que te interesa y como{" "}
                      <br />
                      queremos seguir apoyándote no solo en el examen <br />
                      de ingreso, en la pestaña de “Agenda tu asesoría” <br />
                      podrás agendar clases con nosotros de los temas <br />
                      (manejamos desde primaria hasta cualquier grado <br />
                      de universidad) que más batalles.
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/cODjcyT9MZQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <tbody>
                  <tr>
                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap">
                      Imagen
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      En esta sección podrás agendar clases <br />
                      directamente con nosotros en vivo! <br />
                      Manejamos en su mayoría temas de <br />
                      física, química y matemáticas desde <br />
                      primaria hasta cualquier grado de <br />
                      universidad.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap">
                      Descubre si esta disponible el curso <br />
                      gratuito para tu examen de ingreso <br />a la
                      preparatoria.
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      Imagen
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap">
                      Imagen
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      Descubre si esta disponible el curso <br />
                      gratuito para tu examen de ingreso <br />a la universidad.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap">
                      Aquí encontrarás links para test <br />
                      vocacionales para que descubras tus <br />
                      mejores apitutes y descubras tu verdadera <br />
                      vocación, también encontrarás una o varias <br />
                      entrevistas con personas egresadas <br />
                      de la carrera que más te gusta.
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      Imagen
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm font-medium px-6 py-4 whitespace-nowrap">
                      Imagen
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      ¡PRUEBATE A TI MISMO TU AVANCE <br />
                      Tengo para ti simuladores y tareas lo <br />
                      mas cercanas a tu verdadero <br />
                      examen, practica y estudia todo <br />
                      lo que puedas.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

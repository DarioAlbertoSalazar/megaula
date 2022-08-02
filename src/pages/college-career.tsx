import React from "react";
import Layout from "../../src/components/Layout/layout";

export enum careers {
  Biólogo = "Biólogo",
  CirujanoDentista = "Cirujano Dentista",
  ContadorPublico = "Contador Publico",
  IngenieroAdministradorSistemas = "Ingeniero Administrador de Sistemas",
  IngenieroAgrónomo = "Ingeniero Agrónomo",
  IngenieroAmbiental = "Ingeniero Ambiental",
  IngenieroBiomédico = "Ingeniero Biomédico",
  IngenieroCivil = "Ingeniero Civil",
  IngenieroAeronáutica = "Ingeniero en Aeronáutica",
  IngenieroAgronegocios = "Ingeniero en Agronegocios",
  IngenieroBiotecnología = "Ingeniero en Biotecnología",
  IngenieroElectrónicaAutomatización = "Ingeniero en Electrónica y Automatización",
  IngenieroElectrónicaComunicaciones = "Ingeniero en Electrónica y Comunicaciones",
  IngenieroIndustriasAlimentarias = "Ingeniero en Industrias Alimentarias",
  IngenieroManejoRecursosNaturales = "Ingeniero en Manejo de Recursos Naturales",
  IngenieroManufactura = "Ingeniero en Manufactura",
  IngenieroMateriales = "Ingeniero en Materiales",
  IngenieroMecatrónica = "Ingeniero en Mecatrónica",
  IngenieroTecnologíaSoftware = "Ingeniero en Tecnología de Software",
  IngenieroForestal = "Ingeniero Forestal",
  IngenieroGeofísico = "Ingeniero Geofísico",
  IngenieroGeólogoMineralogista = "Ingeniero Geólogo Mineralogista",
  IngenieroGeólogo = "Ingeniero Geólogo",
  IngenieroIndustrialAdministrador = "Ingeniero Industrial Administrador",
  IngenieroMecánicoAdministrador = "Ingeniero Mecánico Administrador",
  IngenieroMecánicoElectricista = "Ingeniero Mecánico Electricista",
  IngenieroPetrolero = "Ingeniero Petrolero",
  IngenieroQuímico = "Ingeniero Químico",
  LicenciadoActuaria = "Licenciado en Actuaria",
  LicenciadoAdministraciónEnergíaDesarrolloSustentable = "Licenciado en Administración de Energía y Desarrollo Sustentable",
  LicenciadoAdministración = "Licenciado en Administración",
  LicenciadoArquitectura = "Licenciado en Arquitectura",
  LicenciadoArteTeatral = "Licenciado en Arte Teatral",
  LicenciadoArtesVisuales = "Licenciado en Artes Visuales",
  LicenciadoBiotecnologíaGenómica = "Licenciado en Biotecnología Genómica",
  LicenciadoCienciaAlimentos = "Licenciado en Ciencia de Alimentos",
  LicenciadoCienciasComputacionales = "Licenciado en Ciencias Computacionales",
  LicenciadoCienciasActividadFísicaDeporte = "Licenciado en Ciencias de la Actividad Física y del Deporte",
  LicenciadoCienciasComunicación = "Licenciado en Ciencias de la Comunicación",
  LicenciadoCienciasPolíticasAdministraciónPublica = "Licenciado en Ciencias Políticas y Administración Publica",
  LicenciadoCriminología = "Licenciado en Criminología",
  LicenciadoDanzaContemporánea = "Licenciado en Danza Contemporánea",
  LicenciadoDerecho = "Licenciado en Derecho",
  LicenciadoDiseñoGráfico = "Licenciado en Diseño Gráfico",
  LicenciadoDiseñoIndustrial = "Licenciado en Diseño Industrial",
  LicenciadoEconomía = "Licenciado en Economía",
  LicenciadoEnfermería = "Licenciado en Enfermería",
  LicenciadoFísica = "Licenciado en Física",
  LicenciadoGestiónTurística = "Licenciado en Gestión Turística",
  LicenciadoLenguajeProducciónAudiovisual = "Licenciado en Lenguaje y Producción Audiovisual",
  LicenciadoMatemáticas = "Licenciado en Matemáticas",
  LicenciadoMercadotecniaGestiónImagen = "Licenciado en Mercadotecnia y Gestión de la Imagen",
  LicenciadoMultimediaAnimaciónDigital = "Licenciado en Multimedia y animación Digital",
  LicenciadoMúsica = "Licenciado en Música",
  LicenciadoNegociosInternacionales = "Licenciado en Negocios Internacionales",
  LicenciadoNutrición = "Licenciado en Nutrición",
  LicenciadoPeriodismoMultimedia = "Licenciado en Periodismo Multimedia",
  LicenciadoPsicología = "Licenciado en Psicología",
  LicenciadoQuímicaIndustrial = "Licenciado en Química Industrial",
  LicenciadoRelacionesInternacionales = "Licenciado en Relaciones Internacionales",
  LicenciadoSeguridadTecnologíasInformación = "Licenciado en Seguridad en Tecnologías de Información",
  LicenciadoTecnologíasInformación = "Licenciado en Tecnologías de la Información",
  LicenciadoTrabajoSocialDesarrolloHumano = "Licenciado en Trabajo Social y Desarrollo Humano",
  LicenciaturaEdiciónGestiónCultura = "Licenciatura en Edición y Gestión de la Cultura",
  LicenciaturaEducación = "Licenciatura en Educación",
  LicenciaturaFilosofía = "Licenciatura en Filosofía",
  LicenciaturaGestiónInformaciónRecursosDigitales = "Licenciatura en Gestión de la Información y Recursos Digitales",
  LicenciaturaHistoria = "Licenciatura en Historia",
  LicenciaturaLetrasHispánicas = "Licenciatura en Letras Hispánicas",
  LicenciaturaLingüísticaFrances = "Licenciatura en Lingüística Aplicada a la Enseñanza y Traducción del Frances",
  LicenciaturaLingüísticaIngles = "Licenciatura en Lingüística Aplicada a la Enseñanza y Traducción del Ingles",
  LicenciaturaSociología = "Licenciatura en Sociología",
  MédicoCirujanoPartero = "Médico Cirujano y Partero",
  MedicoVeterinarioZootecnista = "Medico Veterinario Zootecnista",
  QuímicoBacteriólogoParasitólogo = "Químico Bacteriólogo Parasitólogo",
  QuímicoClínicoBiólogo = "Químico Clínico Biólogo",
  QuímicoFarmacéuticoBiólogo = "Químico Farmacéutico Biólogo",
  TécnicoSuperiorUniversitarioMúsica = "Técnico Superior Universitario en Música",
}

const career = Object.values(careers);

export default function collegecareer() {
  return (
    <Layout>
      <div className='mt-3 ml-5'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3oTHJ50eN4o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <ul className='ml-5'>
        {career.map((it) => (
          <li>{it}</li>
        ))}
      </ul>
    </Layout>
  );
}

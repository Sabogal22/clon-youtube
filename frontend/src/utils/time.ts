export function formatearTiempo(fechaISO: string): string {
  const fecha = new Date(fechaISO);
  const ahora = new Date();

  const diferencia = Math.floor(
    (ahora.getTime() - fecha.getTime()) / 1000
  );

  const minutos = Math.floor(diferencia / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const semanas = Math.floor(dias / 7);
  const meses = Math.floor(dias / 30);
  const años = Math.floor(dias / 365);

  if (años > 0) return `hace ${años} año${años > 1 ? "s" : ""}`;
  if (meses > 0) return `hace ${meses} mes${meses > 1 ? "es" : ""}`;
  if (semanas > 0) return `hace ${semanas} semana${semanas > 1 ? "s" : ""}`;
  if (dias > 0) return `hace ${dias} día${dias > 1 ? "s" : ""}`;
  if (horas > 0) return `hace ${horas} hora${horas > 1 ? "s" : ""}`;
  if (minutos > 0) return `hace ${minutos} minuto${minutos > 1 ? "s" : ""}`;

  return "hace unos segundos";
}

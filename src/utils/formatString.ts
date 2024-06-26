export function formatString(str: string) {
  return str
    .toLowerCase() // Convierte a minúsculas
    .replace(/\s+/g, '-') // Reemplaza los espacios por guiones
    .replace(/[^a-z0-9\-]/g, '') // Elimina caracteres no alfanuméricos excepto guiones
    .replace(/\-+/g, '-'); // Reemplaza múltiples guiones por un solo guion
}

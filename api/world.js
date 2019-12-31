import api from '@/utils/request'

export function getCountry() {
  return api.get('/world/country')
}
export function getCity(country_code) {
  return api.get('/world/country/'+country_code)
}
export function getRegionsById(country_id) {
  return api.get('/world/regions/'+country_id)
}
// update: 2025-07-31T19:34:59.706088

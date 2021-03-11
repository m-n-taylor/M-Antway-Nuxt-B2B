import api from '@/utils/request'

export function fileUpload(data) {
  return api({
    url: "/company/uploadfile",
    method: 'POST',
    data
  })
}
export function fileDel(company_id, ids) {
  return api({
    url: "/company/deletefile",
    method: 'POST',
    data:{
      company_id,
      ids
    }
  })
}
export function assetDel(id) {
  return api.delete(`/asset/${id}`)
}
export function fileList(company_id, subtag) {
  return api.get(`/company/${company_id}/files/${subtag}`)
}


// update: 2025-07-31T19:40:40.649926

// update: 2025-07-31T19:44:50.255074

// update: 2025-07-31T19:56:50.881778

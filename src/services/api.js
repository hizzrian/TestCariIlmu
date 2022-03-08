const baseUrl = "https://api.cariilmu.co.id/api/v1/public";

export const api = {
  getListClass: `${baseUrl}/course?page=1&limit=10`,
  getListInstructure: `${baseUrl}/instructor`,
  getDetailClass: (id) => `${baseUrl}/course/${id}`,
  getDetailInstructure : (id) => `${baseUrl}/instructor/${id}`
}

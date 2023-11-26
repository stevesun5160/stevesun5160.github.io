export default defineEventHandler(async () => {
  const { data, pending, error, refresh } = await useFetch('https://script.google.com/macros/s/AKfycbzVzkkHdzBXQLllcaNm-cH6kDMKu8Bba3L-YdXZ1l0qQa14ryAkKDbrzBdNs1m2rnVxmQ/exec?stockID=tse_006208.tw', {
    onRequest({ request, options }) {
      // 設定請求時夾帶的標頭
      options.headers = options.headers || {}
      options.headers.authorization = '...'
    },
    onRequestError({ request, options, error }) {
      // 處理請求時發生的錯誤
    },
    onResponse({ request, response, options }) {
      console.log(response._data);

      // 處理請求回應的資料
      return response._data
    },
    onResponseError({ request, response, options }) {
      // 處理請求回應發生的錯誤
    }
  })
})

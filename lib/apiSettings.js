export const apiUrl = process.env.APP_API_URL;
export const mediaUrl = process.env.APP_API_MEDIA_URL;
const accessToken = process.env.APP_API_TOKEN;
export const apiSetting = {
  method: "GET",
  timeout: 0,
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

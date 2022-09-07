import axios from "axios";

export const onDownload = (
  url: string,
  fileName: string,
  callback?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const type = url.split("/")[0];
  const getUrl = url.split("/")[1];
  axios({
    method: "get",
    url:
      type === "reference"
        ? `/proposal/file/reference/${getUrl}`
        : `/proposal/file/otherFile/${getUrl}`,
    headers: { "Content-Type": "multipart/form-data" },
    responseType: "blob",
  })
    .then((res) => {
      const blob = res.data;
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 60000);
      a.remove();
      callback && callback(true);
    })
    .catch((err) => {
      console.error("err: ", err);
    });
};

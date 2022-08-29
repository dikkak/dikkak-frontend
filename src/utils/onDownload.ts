export const onDownload = (url: string, fileName: string) => {
  fetch(url, { method: "GET" })
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
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
    })
    .catch((err) => {
      console.error("err: ", err);
    });
};

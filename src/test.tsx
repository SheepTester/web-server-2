import { Router } from "express";
import { renderToPipeableStream } from "react-dom/server";
import tempCssPath from "./temp.css";

export const router = Router();

router.get("/test", (_req, res) => {
  const page = (
    <html>
      <link href={tempCssPath} rel="stylesheet" />
      <p>hello</p>
    </html>
  );
  const stream = renderToPipeableStream(page, {
    onAllReady: () => {
      res.setHeader("Content-type", "text/html");
      stream.pipe(res);
    },
    onError: (error) => {
      console.error(error);
    },
    onShellError: (error) => {
      console.error(error);
      res.send("error");
    },
  });
});

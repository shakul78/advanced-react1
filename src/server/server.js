import express from "express";
import * as ReactDOMServer from 'react-dom/server';
import { data } from '../testData';
import serverRender from '../renderers/server';
import App from "../components/app";

const server = express();
server.use(express.static("dist"));
server.get('/data', (req, res) => {
  res.send(data);
});
server.get("/", async (req, res) => {
  //const initialMarkup = ReactDOMServer.renderToString(<App />);
  const initialMarkup = await serverRender();
const initialData = JSON.stringify(initialMarkup.initialData);
  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <script type="text/javascript">
      window.initialData=${initialData}
      </script>
      <body>
        <div id="app">${initialMarkup.initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(4242, () => console.log("Server is running..."));
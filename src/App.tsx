import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

createServer({
  models: {
    teams: Model,
  },

  seeds(server) {
    server.db.loadData({
      teams: [
        {
          id: 1,
          name: "Real Madri",
          description: "bbb",
          website: "https:teste.com",
          type: "fantasy",
          tags: ["BR", "PTW"],
        },
        {
          id: 2,
          name: "Barcelona",
          description: "aaa",
          website: "https:teste.com",
          type: "real",
          tags: ["BR", "PTW"],
        },
        {
          id: 3,
          name: "COCA COLA",
          description: "aaa",
          website: "https:teste.com",
          type: "real",
          tags: ["BR", "PTW"],
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/teams", () => {
      return this.schema.all("teams");
    });

    this.post("/teams", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("teams", data);
    });
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

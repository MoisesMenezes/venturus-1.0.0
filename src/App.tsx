import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import playerData from "./mockdata/mockplayers.json";



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
          description: "Club Spanish, won 13 times the Champions League",
          website: "https://www.realmadrid.com/",
          type: "real",
          tags: ["Champion", "PTW"],
          players: playerData.playersRealMadrid
        },
        {
          id: 2,
          name: "Barcelona",
          description: "Club Spanish, won 5 times the Champions League",
          website: "https:teste.com",
          type: "real",
          tags: ["BR", "PTW"],
          players: playerData.playersBarcelona
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

    this.del("/teams/:id", (schema, request) => {
      let post = schema.find("teams", request.params.id);
      post?.destroy();
      console.log("POST", post)
      return schema.all("teams");
    });


    this.passthrough("https://api-football-v1.p.rapidapi.com/**");
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

import { Model, Server } from "miragejs";
import playerData from "./mockdata/mockplayers.json";


export function makeServer({environment = "development"} = {}){
  let server = new Server({
    environment,

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
            teamType: "real",
            tags: ["Champion", "PTW"],
            players: playerData.playersRealMadrid
          },
          {
            id: 2,
            name: "Barcelona",
            description: "Club Spanish, won 5 times the Champions League",
            website: "https://www.fcbarcelona.com/",
            teamType: "real",
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
  
      this.patch("/teams/:id", (schema,request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let team = schema.find("teams", request.params.id);
  
        team?.update(newAttrs);
        return schema.all("teams");
      })
  
      this.get("/teams/:id", (schema,request) => {
        let team = schema.find("teams", request.params.id);
        return {team}
      })
  
      this.del("/teams/:id", (schema, request) => {
        let team = schema.find("teams", request.params.id);
        team?.destroy();
  
        return schema.all("teams");
      });
  
  
      this.passthrough("https://api-football-v1.p.rapidapi.com/**");
    },

  })

  return server;
}
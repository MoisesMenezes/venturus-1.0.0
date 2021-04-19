import { Container } from "./styles";
import { MdEdit, MdDelete, MdShare } from "react-icons/md";
import { FaSort } from "react-icons/fa";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { TeamProps } from "../../types";

export function TableTeam() {
  const [teams, setTeams] = useState<TeamProps[]>([]);
  const [sortAsc, setSortAsc] = useState("asc");

  useEffect(() => {
    api.get("teams").then((response) => setTeams(response.data.teams));
  }, []);

  const handleDeleteTeam = (id: number) => {
    api.delete(`teams/${id}`).then((response) => {
      setTeams([...response.data.teams]);
    });
  };

  const sortBy = (key: any) => {
    switch (key) {
      case "name": {
        const sortTeam = teams.sort((a, b) => {
          const isReversed = sortAsc === "asc" ? 1 : -1;

          if (isReversed === 1) {
            setSortAsc("desc");
          } else {
            setSortAsc("asc");
          }
          return isReversed * a.name.localeCompare(b.name);
        });

        setTeams([...sortTeam]);
        break;
      }
      case "description": {
        const sortTeam = teams.sort((a, b) => {
          const isReversed = sortAsc === "asc" ? 1 : -1;

          if (isReversed === 1) {
            setSortAsc("desc");
          } else {
            setSortAsc("asc");
          }
          return isReversed * a.description.localeCompare(b.description);
        });
        setTeams([...sortTeam]);
        break;
      }

      default:
        break;
    }
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortBy("name")}>
              Name
              <FaSort />
            </th>
            <th onClick={() => sortBy("description")}>
              Description <FaSort />
            </th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.description}</td>
              <td>
                <MdDelete onClick={() => handleDeleteTeam(team.id)} />
                <MdShare />
                <MdEdit />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

import {
  Container,
  Modal,
  HeaderTeam,
  Form,
  ContainerInputs,
  ContainerTeam,
  FormationField,
} from "./styles";
import Header from "../../components/Header";
import { PlayerCard } from "../../components/PlayerCard";
import { useFormik } from "formik";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { isValidURL } from "../../utils/validateURL";

import getPlayers from "../../services/apiFootbal";
import { useEffect, useState } from "react";
import { Player } from "../../services/apiFootbal";
import { v4 } from "uuid";
import { useLocation } from "react-router-dom";
import { TeamProps } from "../../types";

interface formProps {
  name: string;
  description: string;
  website: string;
  teamType: string;
}

let initialValues = {
  name: "",
  description: "",
  website: "",
  teamType: "",
};

export function CreateTeam() {
  let history = useHistory();
  const location = useLocation();

  const [searchPlayer, setSearchPlayer] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function LoadPlayers() {
      if (searchPlayer.length > 3) {
        const playersFound = await getPlayers(searchPlayer);

        setPlayers([]);
        setPlayers(playersFound);
      } else {
        setPlayers([]);
      }
    }
    LoadPlayers();
  }, [searchPlayer]);

  useEffect(() => {
    const searchTeamById = async function () {
      if (location.state) {
        const { data } = await api.get(`/teams/${location.state}`);
        const editTeam: TeamProps = data.team;
        initialValues = {
          name: editTeam.name,
          description: editTeam.description,
          website: editTeam.website,
          teamType: editTeam.teamType,
        };
      }
    };

    searchTeamById();
  }, [location.state]);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        if (location.state) await api.patch(`teams/${location.state}`,values);
        else await api.post("teams", values);

        history.push("/");
      } catch (error) {
        console.log("error when adding a team");
      }
    },
    enableReinitialize: true,
    validate: (values) => {
      let errors: formProps = {} as formProps;

      if (!values.name) errors.name = "Name Required";
      if (!values.teamType) errors.teamType = "Type Required";
      if (!values.website) {
        errors.website = "Website Required";
      } else if (!isValidURL(values.website)) {
        errors.website = "Website not valid";
      }

      return errors;
    },
  });

  return (
    <>
      <Header />
      <Container>
        <Modal>
          <HeaderTeam>
            <h2>Create your team</h2>
          </HeaderTeam>
          <Form onSubmit={formik.handleSubmit}>
            <h3>TEAM INFORMATION</h3>

            <ContainerTeam>
              <div>
                <ContainerInputs>
                  <label htmlFor="name">Team Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  ></input>
                  {formik.touched.name && formik.errors.name ? (
                    <div className="validate-input">{formik.errors.name}</div>
                  ) : null}
                </ContainerInputs>

                <ContainerInputs>
                  <label htmlFor="description">Description</label>
                  <textarea
                    rows={12}
                    cols={1}
                    name="description"
                    id="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                </ContainerInputs>
              </div>
              <div>
                <ContainerInputs>
                  <label htmlFor="website">Team website</label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    onChange={formik.handleChange}
                    value={formik.values.website}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.website && formik.errors.website ? (
                    <div className="validate-input">
                      {formik.errors.website}
                    </div>
                  ) : null}
                </ContainerInputs>

                <ContainerInputs>
                  <label>Team type</label>

                  <div className="radio-buttons">
                    <div>
                      <input
                        type="radio"
                        name="teamType"
                        id="fantasy"
                        value="fantasy"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.teamType === "fantasy"}
                      />
                      <label htmlFor="fantasy">Fantasy</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="teamType"
                        id="real"
                        value="real"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.teamType === "real"}
                      />
                      <label htmlFor="real">Real</label>
                    </div>
                  </div>
                  {formik.errors.teamType ? (
                    <div className="validate-input">
                      {formik.errors.teamType}
                    </div>
                  ) : null}
                </ContainerInputs>

                <ContainerInputs>
                  <label htmlFor="tags">Tags</label>
                  <textarea rows={6} cols={1} name="tags" id="tags" />
                </ContainerInputs>
              </div>
            </ContainerTeam>
            <h3>CONFIGURE SQUAD</h3>

            <ContainerTeam>
              <div>
                <ContainerInputs>
                  <label htmlFor="formation">Formation</label>
                  <select name="formation" id="formation">
                    <option value="5-4-1">5-4-1</option>
                    <option value="4-5-1">4-5-1</option>
                    <option value="4-4-2">4-4-2</option>
                    <option value="4-3-2">4-3-2</option>
                    <option value="4-3-1-1">4-3-1-1</option>
                    <option value="4-2-3-1">4-2-3-1</option>
                    <option value="3-5-2">3-5-2</option>
                    <option value="3-4-3">3-4-3</option>
                    <option value="3-2-3-1">3-2-3-1</option>
                    <option value="3-2-2-3">3-2-2-3</option>
                  </select>
                  <FormationField />
                  <button type="submit">Save</button>
                </ContainerInputs>
              </div>

              <div>
                <ContainerInputs>
                  <label htmlFor="search-player">Search Players</label>
                  <input
                    type="text"
                    name="search-player"
                    value={searchPlayer}
                    onChange={(event) =>
                      setSearchPlayer(event.currentTarget.value)
                    }
                  />
                </ContainerInputs>
                {players.map((player) => (
                  <PlayerCard
                    key={`${player.name}-${v4()}`}
                    age={player.age}
                    nacionality={player.nacionality}
                    name={player.name}
                  />
                ))}
              </div>
            </ContainerTeam>
          </Form>
        </Modal>
      </Container>
    </>
  );
}

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

export function CreateTeam() {

  return (
    <>
      <Header />
      <Container>
        <Modal>
          <HeaderTeam>
            <h2>Create your team</h2>
          </HeaderTeam>
          <Form>
            <h3>TEAM INFORMATION</h3>

            <ContainerTeam>
              <div>
                <ContainerInputs>
                  <label htmlFor="team-name">Team Name</label>
                  <input type="text" name="team-name"></input>
                </ContainerInputs>

                <ContainerInputs>
                  <label htmlFor="description">Description</label>
                  <textarea rows={4} cols={2} name="description" />
                </ContainerInputs>
              </div>
              <div>
                <ContainerInputs>
                  <label htmlFor="website">Team website</label>
                  <input type="text" name="website" />
                </ContainerInputs>

                <ContainerInputs>
                  <label>Team type</label>

                  <div className="radio-buttons">
                    <input type="radio" name="fantasy" />
                    <label htmlFor="fantasy">Fantasy</label>

                    <input type="radio" name="real" />
                    <label htmlFor="real">Real</label>
                  </div>
                </ContainerInputs>

                <ContainerInputs>
                  <label htmlFor="tags">Tags</label>
                  <textarea rows={4} cols={2} name="tags" />
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
                  <input type="search" name="search-player" />
                </ContainerInputs>

                <PlayerCard />
                <PlayerCard />
              </div>
            </ContainerTeam>
          </Form>
        </Modal>
      </Container>
    </>
  );
}

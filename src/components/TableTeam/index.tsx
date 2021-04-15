import { Container } from "./styles";
import { MdEdit, MdDelete, MdShare } from "react-icons/md";

export function TableTeam() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Barcenola</td>
            <td>Barcelona Squad</td>
            <td>
              <MdDelete />
              <MdShare />
              <MdEdit />
            </td>
          </tr>
          <tr>
            <td>Real Madrid</td>
            <td>Real Madrid Squad</td>
            <td>
              <MdDelete />
              <MdShare />
              <MdEdit />
            </td>
          </tr>
          <tr>
            <td>Real Madrid</td>
            <td>Real Madrid Squad</td>
            <td>
              <MdDelete />
              <MdShare />
              <MdEdit />
            </td>
          </tr>
          <tr>
            <td>Real Madrid</td>
            <td>Real Madrid Squad</td>
            <td>
              <MdDelete />
              <MdShare />
              <MdEdit />
            </td>
          </tr>
          <tr>
            <td>Real Madrid</td>
            <td>Real Madrid Squad</td>
            <td>
              <MdDelete />
              <MdShare />
              <MdEdit />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  Title,
  Badge,
} from "@tremor/react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../hook/store";
import { deleteUserById } from "../store/users/slice";

const users = [
  {
    id: "1",
    name: "Peter Doe",
    email: "peter@gmail.com",
    github: "peterdev",
  },
  {
    id: "2",
    name: "Jack Lee",
    email: "jaclee@gmail.com",
    github: "jackdev",
  },
];

export default function ListOfUsers() {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleDeleteUserById = (id) => {
    dispatch(deleteUserById(id));
  };
  return (
    <Card>
      <Title>
        Usurios
        <Badge>{users.length}</Badge>
      </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>id</TableHeaderCell>
            <TableHeaderCell className="text-right">nombre</TableHeaderCell>
            <TableHeaderCell className="text-right">email</TableHeaderCell>
            <TableHeaderCell className="text-right">acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.name}>
              {/* <TableCell>{item.name}</TableCell> */}
              <TableCell className="text-right">{item.id}</TableCell>
              <TableCell className="text-right">{item.name}</TableCell>
              <TableCell className="text-right">{item.email}</TableCell>
              <TableCell className="text-right">
                <button className="bg-blue-300">Editar</button>
                <button
                  className="bg-red-300"
                  onClick={() => handleDeleteUserById(item.id)}
                >
                  Eliminar
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

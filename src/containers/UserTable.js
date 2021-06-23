import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CustomDialog from "./CustomDialog";
import FormDialog from "./FormDialog";
import { CSVLink, CSVDownload } from "react-csv";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UserTable({ data }) {
  const classes = useStyles();

  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openCreate, setOpenCreate] = React.useState(false);

  const [obj, setObj] = React.useState(null);

  const handleCreateOpen = () => {
    setOpenCreate(true);
  };

  const handleCreateClose = () => {
    setOpenCreate(false);
  };

  const handleEditOpen = (target) => {
    setObj(target);
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleDeleteOpen = (target) => {
    setOpenDelete(true);
    setObj(target);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  return (
    <>
      <div>
        <Button onClick={handleCreateOpen} variant="contained">
          Add user
        </Button>
        <CSVLink filename="user_list.csv" data={data}>
          {" "}
          <Button variant="contained">Download CSV</Button>
        </CSVLink>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">First</TableCell>
              <TableCell align="right">Last</TableCell>
              <TableCell align="right">Email </TableCell>
              <TableCell align="right">Phone </TableCell>
              <TableCell align="right">Location </TableCell>
              <TableCell align="right">Hobby </TableCell>
              <TableCell align="right">Actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="right">{index}</TableCell>
                <TableCell align="right">{row.first}</TableCell>
                <TableCell align="right">{row.last}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.hobby}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleEditOpen(row)}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteOpen(row)}
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomDialog open={openDelete} close={handleDeleteClose} single={obj} />
      <FormDialog open={openEdit} close={handleEditClose} object={obj} />
      <FormDialog open={openCreate} close={handleCreateClose} object={null} />
    </>
  );
}

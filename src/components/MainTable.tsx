import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./MainTable.module.css";
import { Urgency } from "../urgency";
import moment from "moment";
import { StatusOption } from "../statusOptions";
import StatusSelect from "./StatusSelect";

interface ITaskDetails {
  facility?: string;
  building?: string;
  room?: string;
  createdBy: string;
  createdWhen: string;
  resolutionDate?: string;
  urgency: Urgency;
  description: string;
  convertedToWo: boolean;
  status: StatusOption;
  updatedWhen: string;
}

const rows: ITaskDetails[] = [
  {
    facility: "Test Facility 1",
    building: "Test Building 1",
    room: "Test Room 1",
    createdBy: "Tom",
    createdWhen: moment().calendar(),
    description: "I have fallen",
    urgency: Urgency.CriticalEmergency,
    convertedToWo: false,
    status: StatusOption.Acknowledged,
    updatedWhen: moment().calendar(),
  },
  {
    facility: "Test Facility 1",
    building: "Test Building 1",
    room: "Test Room 1",
    createdBy: "Tom",
    createdWhen: moment().calendar(),
    description: "I have fallen",
    urgency: Urgency.LowUrgency,
    convertedToWo: false,
    status: StatusOption.FollowUp,
    updatedWhen: moment().calendar(),
  },
  {
    facility: "Test Facility 1",
    building: "Test Building 1",
    room: "Test Room 1",
    createdBy: "Tom",
    createdWhen: moment().subtract(1, "days").calendar(),
    description: "I have fallen",
    urgency: Urgency.Normal,
    convertedToWo: false,
    status: StatusOption.Open,
    updatedWhen: moment().calendar(),
  },
  {
    facility: "Test Facility 1",
    building: "Test Building 1",
    room: "Test Room 1",
    createdBy: "Tom",
    createdWhen: moment().subtract(2, "days").calendar(),
    description: "I have fallen",
    urgency: Urgency.Normal,
    convertedToWo: false,
    status: StatusOption.Resolved,
    updatedWhen: moment().calendar(),
  },
];

export const MainTable: FC = () => {
  return (
    <div className={styles["container"]}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Room</TableCell>
              <TableCell align="center">Facility</TableCell>
              <TableCell align="center">Urgency</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Created By</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Converted to Work Order</TableCell>
              <TableCell align="center">Creation Date</TableCell>
              <TableCell align="center">UpdatedWhen</TableCell>
              <TableCell align="center">Acknowledged</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.room}</TableCell>
                <TableCell align="center">{row.facility}</TableCell>
                <TableCell align="center">{row.urgency}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.createdBy}</TableCell>
                <TableCell align="right">
                  <StatusSelect selectedStatus={row.status} />
                </TableCell>
                <TableCell align="center">
                  {row.convertedToWo ? "True" : "False"}
                </TableCell>
                <TableCell align="center">{row.createdWhen}</TableCell>
                <TableCell align="center">{row.updatedWhen}</TableCell>
                <TableCell align="center">
                  {row.status !== StatusOption.Open ? "True" : "False"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
	facility: 'Test Facility 1',
	building: 'Test Building 1',
	room: 'Test Room 1',
	createdBy: 'Tom',
	createdWhen: moment().calendar(),
	description: 'I have fallen',
	urgency: Urgency.CriticalEmergency,
	convertedToWo: false,
	status: StatusOption.Acknowledged,
	updatedWhen: moment().calendar()
  },
  {
	facility: 'Test Facility 1',
	building: 'Test Building 1',
	room: 'Test Room 1',
	createdBy: 'Tom',
	createdWhen: moment().calendar(),
	description: 'I have fallen',
	urgency: Urgency.LowUrgency,
	convertedToWo: false,
	status: StatusOption.FollowUp,
	updatedWhen: moment().calendar()
  },
  {
	facility: 'Test Facility 1',
	building: 'Test Building 1',
	room: 'Test Room 1',
	createdBy: 'Tom',
	createdWhen: moment().subtract(1, 'days').calendar(),
	description: 'I have fallen',
	urgency: Urgency.Normal,
	convertedToWo: false,
	status: StatusOption.Open,
	updatedWhen: moment().calendar()
  },
  {
	facility: 'Test Facility 1',
	building: 'Test Building 1',
	room: 'Test Room 1',
	createdBy: 'Tom',
	createdWhen: moment().subtract(2, 'days').calendar(),
	description: 'I have fallen',
	urgency: Urgency.Normal,
	convertedToWo: false,
	status: StatusOption.Resolved,
	updatedWhen: moment().calendar()
  }
];

export const MainTable: FC = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Room</TableCell>
			  <TableCell align="right">Facility</TableCell>
              <TableCell align="right">Urgency</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Created By</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Converted to Work Order</TableCell>
              <TableCell align="right">Creation Date</TableCell>
              <TableCell align="right">UpdatedWhen</TableCell>
              <TableCell align="right">Acknowledged</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.room}</TableCell>
                <TableCell align="right">{row.facility}</TableCell>
                <TableCell align="right">{row.urgency}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.createdBy}</TableCell>
                <TableCell align="right">
					<StatusSelect 
						selectedStatus={row.status}
					/>
				</TableCell>
                <TableCell align="right">{row.convertedToWo ? 'True' : 'False'}</TableCell>
                <TableCell align="right">{row.createdWhen}</TableCell>
                <TableCell align="right">{row.updatedWhen}</TableCell>
                <TableCell align="center">
                  {row.status !== StatusOption.Open ? "True" : "False"}
                </TableCell>
                {/* <TableCell align="right">
                  {row.resolved ? "True" : "False"}
                </TableCell>
                <TableCell align="right">
                  {row.convertedToWo ? "True" : "False"}
                </TableCell>
                <TableCell align="right">{row.creationDate}</TableCell>
                <TableCell align="right">{row.resolutionDate}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

// facility?: string,
// building?: number,
// room?: number,
// urgency?: number,
// descriptions?: string,
// creadtedBy?: string,
// acknowledgement?: boolean,
// resolved?: boolean,
// convertedToWo?: boolean,
// creationDate?: string,
// resolutionDate?: string

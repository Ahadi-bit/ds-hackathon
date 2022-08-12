import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

interface IStatusSelect {
	selectedStatus: "Open"| "Acknowledged" | "Follow-Up" | "Resolved";
}
export default function StatusSelect({
	selectedStatus
}: IStatusSelect){
	const [status, setStatus] = useState<string>(selectedStatus);
	const statusOptions = ["Open", "Acknowledged", "Follow-Up", "Resolved"];

	const onChange = (e: SelectChangeEvent) => {
		setStatus(e.target.value);
	}

	return(
		<>
			<Select
				value={status}
				onChange={onChange}
			>
				{statusOptions.map((s, i)=>
					<MenuItem key={i} value={s}>{s}</MenuItem>
				)}
			</Select>
		</>
	);
}
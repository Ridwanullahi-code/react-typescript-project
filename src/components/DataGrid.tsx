import { useState , useEffect } from "react";
import Box from "@mui/material/Box";
import {
    DataGrid, GridColDef,
} from "@mui/x-data-grid";

import Fetch from '../functions/fetchData';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 400,
    editable: true,
  },
];

interface User {
    data: {
        userId: number;
        body: string;
        title: string;
        id: number;
    }[];
}
export default function DisplayData() {
    
    const [data, setData] = useState<User['data']>([]); 

    useEffect(() => {
        Fetch().then((data) => setData(data));
    }, []);

  return (
      <Box sx={{
          height: 400,
          maxWidth: "70%",
          margin: "100px auto"
      }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

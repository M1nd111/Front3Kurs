import buildings from "../table";
import { DataGrid,
 GridRowsProp,
 GridColDef,
 GridToolbarContainer,
 GridToolbarColumnsButton,
 GridToolbarFilterButton,
 GridToolbarExport, }
from "@mui/x-data-grid";

import { ruRU } from "@mui/x-data-grid/locales";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function BuildingsGrid() {
    const rows: GridRowsProp = buildings;
    const columns: GridColDef[] = [
        { field: "Название мема", headerName: "Название авто", flex: 1 },
        { field: "Лайки", flex: 0.5 },
        { field: "Репосты", flex: 0.5 },
        { field: "Рейтинг", flex: 0.5 },
        { field: "Просмотры", flex: 0.5 },
    ];

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
 <GridToolbarColumnsButton />
 <GridToolbarFilterButton />
 <Box sx={{ flexGrow: 1 }} />
 <GridToolbarExport/>
 </GridToolbarContainer>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ height: "700px", mt: "20px" }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                showToolbar = {true}
                slots={{ toolbar: CustomToolbar }}
                slotProps={{ pagination: { rowsPerPageOptions: [10, 20, 30] } }}
            />
        </Container>
    );
}

export default BuildingsGrid;
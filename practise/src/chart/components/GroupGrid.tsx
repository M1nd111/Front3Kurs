import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import { tGroup } from '../groupdata';

type GroupProps = {
  data: tGroup;
  group: string; // "Рейтинг", "Название мема", or "Просмотры"
};

function GroupGrid({ data, group }: GroupProps) {
  const rows: GridRowsProp = data;
  const columns: GridColDef[] = [
    { field: 'Группа', headerName: group, flex: 1 },
    { field: 'Минимальные лайки', headerName: 'Минимальные лайки', flex: 0.5 },
    { field: 'Максимальные лайки', headerName: 'Максимальные лайки', flex: 0.5 },
    { field: 'Средние лайки', headerName: 'Средние лайки', flex: 0.5 },
    { field: 'Минимальные репосты', headerName: 'Минимальные репосты', flex: 0.5 },
    { field: 'Максимальные репосты', headerName: 'Максимальные репосты', flex: 0.5 },
    { field: 'Средние репосты', headerName: 'Средние репосты', flex: 0.5 },
    { field: 'Минимальные просмотры', headerName: 'Минимальные просмотры', flex: 0.5 },
    { field: 'Максимальные просмотры', headerName: 'Максимальные просмотры', flex: 0.5 },
    { field: 'Средние просмотры', headerName: 'Средние просмотры', flex: 0.5 },
  ];

  // Validate data
  if (!data || data.length === 0 || !data.every(item => item['Группа'] !== undefined && item['Группа'] !== null)) {
    return <div>Ошибка: Некорректные данные для таблицы</div>;
  }

  return (
    <DataGrid
      localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
      rows={rows}
      columns={columns}
      getRowId={(row) => row.id} // Use 'id' field for unique row IDs
    />
  );
}

export default GroupGrid;
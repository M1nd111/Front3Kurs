import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import { tGroup } from '../groupdata';

type GroupProps = {
  data: tGroup;
  group: string; // "Страна", "Год", or "Тип"
};

function GroupGrid({ data, group }: GroupProps) {
  const rows: GridRowsProp = data;
  const columns: GridColDef[] = [
    { field: 'Группа', headerName: group, flex: 1 },
    { field: 'Минимальная высота', headerName: 'Минимальная высота', flex: 0.5 },
    { field: 'Максимальная высота', headerName: 'Максимальная высота', flex: 0.5 },
    { field: 'Средняя высота', headerName: 'Средняя высота', flex: 0.5 },
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
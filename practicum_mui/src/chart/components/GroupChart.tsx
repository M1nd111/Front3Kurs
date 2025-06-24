import React from 'react';
import { BarChart, LineChart } from '@mui/x-charts';
import Container from '@mui/material/Container';
import { tGroup } from '../groupdata';
import SettingChart from './SettingChart';

type GroupChartProps = {
  data: tGroup;
  group: string; // "Страна", "Год", or "Тип"
};

function GroupChart({ data, group }: GroupChartProps) {
  const [series, setSeries] = React.useState({
    'Максимальная высота': true,
    'Средняя высота': false,
    'Минимальная высота': false,
  });
  const [isBar, setIsBar] = React.useState(true);

  const chartSetting = {
    yAxis: [{ label: 'Высота (м)' }],
    height: 500,
    sx: {
      ['.MuiChartsAxis-left .MuiChartsAxis-label']: {
        transform: 'translate(-10px, 0)',
      },
    },
  };

  const seriesData = Object.entries(series)
    .filter(([_, value]) => value)
    .map(([key]) => ({ dataKey: key, label: key }));

  const showLabels = seriesData.length === 1;

  // Validate data
  if (!data || data.length === 0 || !data.every(item => item['Группа'] !== undefined && item['Группа'] !== null)) {
    return <Container maxWidth="lg">Ошибка: Некорректные данные для построения диаграммы</Container>;
  }

  return (
    <Container maxWidth="lg">
      <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
      {isBar ? (
        <BarChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={seriesData}
          {...chartSetting}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },
              
            },
          }}
          barLabel={showLabels ? 'value' : undefined}
        />
      ) : (
        <LineChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={seriesData}
          {...chartSetting}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },

            },
          }}
        />
      )}
    </Container>
  );
}

export default GroupChart;
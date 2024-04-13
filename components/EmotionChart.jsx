import { VideoContext } from '@/app/page';
import { DonutChart, Legend } from '@tremor/react';
import { useContext } from 'react';

const dataFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

function EmotionChart() {

  const { emotions } = useContext(VideoContext)


  return (
      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={ emotions }
          variant='donut'
          category='value'
          index="name"
          valueFormatter={dataFormatter}
          showLabel={false}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="w-40"
        />
        <Legend
          categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="max-w-xs"
        />
      </div>
  );
}

export default EmotionChart;
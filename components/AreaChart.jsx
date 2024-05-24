import { AreaChart } from '@tremor/react';
import { useContext } from 'react';
import { VideoContext } from '@/app/page';

const dataFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

function AreaChartHero() {

  const {timeline} = useContext(VideoContext);
 
  return (
    <AreaChart
      className="h-80"
      data={timeline}
      index="date"
      categories={['count']}
      colors={['indigo']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}

export default AreaChartHero;
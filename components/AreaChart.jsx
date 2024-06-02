import { AreaChart } from '@tremor/react';
import { useContext } from 'react';
import { VideoContext } from '@/app/page';

const dataFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

function AreaChartHero() {

  const {timeline} = useContext(VideoContext);

    function formatDate(dateInput) {
        const date = new Date(dateInput);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    
    const formattedData = timeline.map(item => ({
        ...item,
        date: formatDate(item.date)
    }));
 
  return (
    <AreaChart
      className="h-80"
      data={formattedData}
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
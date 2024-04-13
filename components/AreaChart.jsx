import { AreaChart } from '@tremor/react';
import { useContext } from 'react';
import { VideoContext } from '@/app/page';

const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

function AreaChartHero() {

  const {timeline} = useContext(VideoContext);
  const chartdata =  [
    {
      "count": 27,
      "date": "2024-02-11"
    },
    {
      "count": 9,
      "date": "2024-02-12"
    },
    {
      "count": 2,
      "date": "2024-02-13"
    },
    {
      "count": 2,
      "date": "2024-02-14"
    },
    {
      "count": 3,
      "date": "2024-02-15"
    },
    {
      "count": 2,
      "date": "2024-02-16"
    },
    {
      "count": 0,
      "date": "2024-02-17"
    },
    {
      "count": 1,
      "date": "2024-02-18"
    },
    {
      "count": 0,
      "date": "2024-02-19"
    },
    {
      "count": 1,
      "date": "2024-02-20"
    },
    {
      "count": 1,
      "date": "2024-02-21"
    },
    {
      "count": 0,
      "date": "2024-02-22"
    },
    {
      "count": 0,
      "date": "2024-02-23"
    },
    {
      "count": 1,
      "date": "2024-02-24"
    },
    {
      "count": 1,
      "date": "2024-02-25"
    },
    {
      "count": 0,
      "date": "2024-02-26"
    },
    {
      "count": 0,
      "date": "2024-02-27"
    },
    {
      "count": 0,
      "date": "2024-02-28"
    },
    {
      "count": 0,
      "date": "2024-02-29"
    },
    {
      "count": 0,
      "date": "2024-03-01"
    },
    {
      "count": 0,
      "date": "2024-03-02"
    },
    {
      "count": 0,
      "date": "2024-03-03"
    },
    {
      "count": 0,
      "date": "2024-03-04"
    },
    {
      "count": 0,
      "date": "2024-03-05"
    },
    {
      "count": 0,
      "date": "2024-03-06"
    },
    {
      "count": 1,
      "date": "2024-03-07"
    },
    {
      "count": 0,
      "date": "2024-03-08"
    },
    {
      "count": 0,
      "date": "2024-03-09"
    },
    {
      "count": 0,
      "date": "2024-03-10"
    },
    {
      "count": 0,
      "date": "2024-03-11"
    },
    {
      "count": 0,
      "date": "2024-03-12"
    },
    {
      "count": 0,
      "date": "2024-03-13"
    },
    {
      "count": 0,
      "date": "2024-03-14"
    },
    {
      "count": 1,
      "date": "2024-03-15"
    },
    {
      "count": 1,
      "date": "2024-03-16"
    }
  ]
  console.log('Chart data');
  console.log(chartdata);
  console.log('Timeline data');
  console.log(timeline);
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
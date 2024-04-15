import { VideoContext } from '@/app/page';
import { DonutChart, Legend } from '@tremor/react';
import { useContext } from 'react';

const dataFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

function EmotionChart() {

  const { emotions } = useContext(VideoContext)

  // Define a mapping object for emotions to colors
  const emotionColors = {
    approval: 'blue',
    admiration: 'cyan',
    curiosity: 'indigo',
    excited: 'violet',
    neutral: 'fuchsia',
    // Add more emotions and their corresponding colors as needed
  };

  // Map emotions to colors
  const colors = emotions.map((emotion) => emotionColors[emotion.name] || 'gray');
  console.log(colors)


  return (
      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={ emotions }
          variant='donut'
          category='value'
          index="name"
          valueFormatter={dataFormatter}
          showLabel={false}
          colors={colors}
          className="w-40"
        />
      </div>
  );
}

export default EmotionChart;
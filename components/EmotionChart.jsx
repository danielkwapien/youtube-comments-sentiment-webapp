import { VideoContext } from '@/app/page';
import { DonutChart, Legend } from '@tremor/react';
import { useContext } from 'react';

const dataFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

function EmotionChart() {

  const { emotions } = useContext(VideoContext)

  // Define a mapping object for emotions to colors
  const emotionColors = {
    approval: 'blue',       // Blue
    gratitude: 'green',      // Green
    curiosity: 'yellow',      // Yellow
    admiration: 'purple',     // Purple
    excitement: 'red',     // Red
    love: 'pink',           // Pink
    annoyance: 'orange',      // Orange
    optimism: 'orange',       // Orange
    disapproval: '#c0392b',    // Dark red
    confusion: '#34495e',      // Dark gray
    disappointment: '#95a5a6', // Light gray
    sadness: '#607d8b',        // Grayish blue
    joy: '#27ae60',            // Dark green
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
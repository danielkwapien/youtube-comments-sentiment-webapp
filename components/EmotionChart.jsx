import { VideoContext } from '@/app/page';
import { DonutChart, Legend } from '@tremor/react';
import { useContext } from 'react';

const dataFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

function EmotionChart() {

  const { emotions } = useContext(VideoContext)

  // Define a mapping object for emotions to colors
  const emotionColors = {
    admiration: '#90EE90',       // Light green
    amusement: '#32CD32',        // Lime green
    approval: '#9DC183',         // Sage green
    caring: '#2E8B57',           // Sea green
    curiosity: '#808000',        // Olive green
    desire: '#00FF00',           // Bright green
    excitement: '#39FF14',       // Neon green
    gratitude: '#50C878',        // Emerald green
    joy: '#76B041',              // Leaf green
    love: '#98FF98',             // Mint green
    optimism: '#00FF7F',         // Spring green
    relief: '#4F7942',           // Fern green
    anger: '#DC143C',            // Crimson red
    annoyance: '#FF2400',        // Scarlet red
    disappointment: '#9B111E',   // Ruby red
    disapproval: '#800000',      // Maroon
    disgust: '#800020',          // Burgundy
    embarrassment: '#FF7F50',    // Coral red
    fear: '#B22222',             // Firebrick red
    grief: '#8B0000',            // Dark red
    nervousness: '#FF6347',      // Rosy red
    sadness: '#722F37',          // Wine red
    confusion: '#FFDB58',        // Mustard yellow
    pride: '#FFD700',            // Golden yellow
    realization: '#F4C430',      // Saffron yellow
    remorse: '#FFFACD',          // Lemon yellow
    surprise: '#FFBF00'         // Amber yellow
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
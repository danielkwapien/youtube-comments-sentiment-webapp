import { useContext } from 'react';
import { VideoContext } from '@/app/page';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card} from '@tremor/react';


const dataFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

const CustomTooltip = ({ active, payload, label, emotions }) => {
    if (active && payload && payload.length) {
      return (
        <div>
            <Card className="mx-auto max-w-2xl">
                <p className="label">
                    <span className='font-bold'>{`${payload[0].name} :`}</span>
                    {` ${((payload[0].value / emotions.reduce((sum, emotion) => sum + emotion.value, 0)) * 100).toFixed(1)}%`}
                </p>
            </Card>
        </div>
      );
    }
  
    return null;
};

function Emotionchart() {

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
  const COLORS = emotions.map((emotion) => emotionColors[emotion.name] || 'gray');


  return (
    <div className="flex items-center justify-center space-x-6 h-80 px-16">
        <ResponsiveContainer width="100%" height="100%" minHeight={100}>
        <PieChart width="100%" height="100%">
            <Pie
            data={emotions}
            innerRadius={80}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            >
            {emotions.map((value, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Tooltip content={<CustomTooltip emotions={emotions} />}/>
        </PieChart>
        </ResponsiveContainer>
    </div>
  );
}

export default Emotionchart;
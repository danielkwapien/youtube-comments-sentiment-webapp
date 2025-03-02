import { Card, Metric, Text } from '@tremor/react';
import { useContext } from 'react';
import { VideoContext } from '@/app/page';
import EmotionChart from "@/components/EmotionChart.jsx"
import AreaChartHero from "@/components/AreaChart.jsx";
import Timelinechart from '@components/charts/Timelinechart.jsx';
import Emotionchart from '@components/charts/Emotionchart.jsx';


function Dashboard() {
    
    const {title,views,commentCount ,thumbnail, topComment} = useContext(VideoContext);

    return (
        <div id='dashboard' className='mx-auto max-w-7xl'>
            <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">Video Information</h2>
            </div>
            <div class=" grid grid-rows-2 grid-flow-col gap-4 py-5">
                <Card className="mx-auto max-w-4xl row-span-3 col-span-1">
                    <p className="text-tremor-default font-semibold text-tremor-content-emphasis dark:text-dark-tremor-content">Thumbnail</p>
                    <img src={thumbnail.url} alt={title} className="mt-4" />
                </Card>
                
                <Card className="mx-auto max-w-4xl col-span-2">
                    <p className="text-tremor-default font-semibold text-tremor-content-emphasis dark:text-dark-tremor-content">Title</p>
                    <p className="text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{title}</p>
                </Card>

                <Card className="mx-auto max-w-4xl row-span-2 col-span-1">
                    <p className="text-tremor-default font-semibold text-tremor-content-emphasis dark:text-dark-tremor-content">Total views</p>
                    <p className="text-4xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{Number(views).toLocaleString('en-US')}</p>
                </Card>

                <Card className="mx-auto max-w-4xl row-span-2 col-span-1">
                    <p className="text-tremor-default font-semibold text-tremor-content-emphasis dark:text-dark-tremor-content">Total comments</p>
                    <p className="text-4xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{Number(commentCount).toLocaleString('en-US')}</p>
                </Card>
            </div>
            <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">Comment Analysis</h2>
            </div>
            <div className='grid grid-cols-3 gap-4 py-5'>
                <div className='col-span-1'>
                    <Card className='mx-auto max-h-4xl'>
                        <p className="text-tremor-default font-semibold text-tremor-content-emphasis dark:text-dark-tremor-content">Proportion of emotions</p>
                        <Emotionchart />
                    </Card>
                    
                </div>
                <div className='col-span-2'>
                    <Card className='mx-auto max-w-4xl'>
                        <p className="text-tremor-default font-semibold text-tremor-content-emphasis dark:text-dark-tremor-content">Comments over time</p>
                        <AreaChartHero />
                    </Card>
                    
                </div>
                <div className='col-span-3'>
                    <Card className="">
                        <p className="text-tremor-default font-semibold text-tremor-content-emphasis dark:text-dark-tremor-content">Top comment</p>
                        <p className="text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong regular">{topComment.text}</p>
                        <p className="text-tremor-default font-semibold text-tremor-content-emphasis dark:text-dark-tremor-content mt-2">
                            Likes: {topComment.likeCount}
                        </p>
                    </Card>
                </div>
                
            </div>
        </div>
        
        
    )
}

export default Dashboard
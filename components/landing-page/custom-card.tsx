import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckIcon } from 'lucide-react'

interface CustomCardProps {
    planType: string,
    price: string,
    description: string,
    highlightFeature?: string,
    features: string[],
}

const CustomCard = ({
    planType,
    price,
    description,
    highlightFeature,
    features,
}: CustomCardProps) => {
  return (
    <div className='bg-gradient-to-r from-purple-400 to-neutral-900 max-w-sm p-[1px] rounded-xl relative'>
    <Card className='max-w-sm relative'>
        <div className='absolute bg-white h-22 top-0 bottom-0 left-0' />
        <CardHeader>
            <h1 className='text-washed-blue-100 text-3xl font-semibold'>{planType}</h1>
        </CardHeader>
        <CardContent>
            <CardTitle>
                <h2 className='text-washed-blue-100 text-2xl'>
                    {"$ "}{price}
                    {price !== "0" && " /mo"}
                </h2>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
            
            <div className='mt-4 flex flex-col gap-3 dark:text-washed-purple-700'>
                <button 
                    className='border py-3 px-3 rounded-xl relative cursor-pointer'
                >
                    
                    Get started
                    <div className='absolute bg-gradient-to-r from-washed-blue-800 to-neutral-700 blur-[100px] bottom-0 left-0 right-0 top-[50%]'></div>
                </button>
                {highlightFeature && (
                    <div>{highlightFeature}</div>
                )}
                {features?.map((feature, index) => (
                    <div key={index} className='flex items-center gap-3'>
                        <CheckIcon color='#f5f5f6'/>
                        <p>{feature}</p>
                    </div>
                ))}
            </div>
        </CardContent>

    </Card>
    </div>
  )
}

export default CustomCard
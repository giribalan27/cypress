import TitleSection from '@/components/landing-page/title-section'
import React from 'react'
import Banner from '@/public/appBanner.png'
import Image from 'next/image'
import { clients, PRICING_CARDS } from '@/constants'
import CustomCard from '@/components/landing-page/custom-card'

const HomePage = () => {
  return (
    <>
      <section className='flex flex-col overflow-hidden gap-4 px-4 mt-10 sm:px-6 md:justify-center md:items-center'>
        <TitleSection 
          title='All-In-One Collaboration and Productivity Platform'
          pill='✨ Your workspace protected'
        />
        <div className='bg-white rounded-xl dark:bg-gradient-to-r dark:from-primary dark:to-brand-primary-blue p-[2px] cursor-pointer w-full sm:w-[300px] mt-6 text-xl'>
          <button className='bg-background rounded-xl px-4 py-2 w-full text-center'>
            Get cypress free
          </button>
        </div>
        <div
          className='relative flex justify-center items-center md:mt-[-100px] mt-[-40px] ml-[-50px] md:ml-0 sm:w-full w-[750px]'
        >
          <Image 
            src={Banner}
            alt='Cypress Banner'
          />
          <div className='absolute bottom-0 left-0 right-0 top-[50%] bg-gradient-to-t from-background'></div>
        </div>
      </section>
      
			<section className='mt-10 mb-10'>
				<div className='flex flex-nowrap overflow-hidden'>
					<div className='flex flex-nowrap animate-slide'>
						{[...clients, ...clients].map((client, index) => ( 
							<div key={`client-${index}`} className='flex shrink-0 w-[200px] mx-10 items-center'>
								<Image
									src={client.logo}
									alt={client.alt}
									height={100}
									width={200}
									className='object-contain max-w-none'
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='
				relative
				flex 
				flex-col 
				justify-center 
				items-start 
				md:items-center
				px-4
			'>

				<div 
					className='absolute w-[30%] rounded-full h-32 bg-brand-primary-purple blur-[120px] top-22 -z-10'
				/>
				<TitleSection 
					title='Keep track of your meetings all in one place'
					subheading='Capture you ideas, thoughts and meeting notes in a structured and organised manner'
					pill='Features'
				/>

				<div className='mt-10 flex justify-center items-center max-w-[650px] rounded-2xl border-2 border-washed-purple-700 opacity-90'>
					<Image 
						src='/cal.png'
						alt='calender'
						height={400}
						width={700}
						className='object-contain rounded-2xl'
					/>
				</div>
			</section>
 
			{/* <section className='mt-10 relative px-4 sm:px-6 flex justify-start md:justify-center'>
				<div 
					className='absolute w-[30%] rounded-full bg-brand-primary-purple blur-[130px] h-32 -z-10 top-22'
				/>
				<TitleSection 
					title='Trusted by All'
					subheading='Join thousands of satisfied users who rely on our platform for their presonal and productivity needs.'
					pill='Testimonials'
				/>
			</section> */}

			<section className='mt-10 relative px-4 sm:px-6 flex flex-col mb-20'>
				<TitleSection 
					title='The Prefect Plan for You'
					subheading='Join the thousands of satified users who rely on our platform for their personal and professional productivity needs'
					pill='Pricing'
				/>
				<div className='sm:flex gap-20 mt-10 sm:justify-center sm:items-center max-sm:flex-col justify-center items-start'>
					{PRICING_CARDS.map((card) => (
						<div key={card.planType} className='relative mt-10'>
							{card.planType === 'Pro Plan' && (
								<div className='absolute bg-gradient-to-r from-purple-400 to-neutral-900 h-full top-0 bottom-0 left-20 right-0 blur-[120px] w-40' />
							)}
							<CustomCard 
								{...card}
							/>
						</div>
					))}
				</div>
			</section>
    </>
  )
}

export default HomePage
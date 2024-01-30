import { Button } from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
// import Test from '../components/test_component/test';

export default function About() {
    return (
        <div style={{ padding: '20px' }} className="flex flex-col items-center gap-3">
            <h1 className=''>EVENT CALENDER</h1>
            <p>“You cannot get through a single day without having an impact on the world around you. What you do makes a difference,</p>
            <p>and you have to decide what kind of difference you want to make.”  ― Jane Goodall</p>
            <Card className="py-4 lg:w-1/2 x1:w-1/2 border hover:border-blue-400">
                <CardBody className="overflow-visible py-2 flex-row gap-2">
                    <div className='w-1/4'>
                        <img
                            alt="picture 1"
                            className="object-cover rounded-xl"
                            src="https://www.stop-the-spray.com/wp-content/uploads/2023/09/71532170240__8E0901D8-16D4-4346-B460-A79872320611-300x225.jpeg"
                            width={270}
                        />
                    </div>
                    <div className='w-1/4 flex flex-col items-center gap-2'>
                        <h2 className='text-lg font-bold uppercase'>SATURDAYS</h2>
                        <h2 className='text-lg font-bold uppercase'>11:00 AM</h2>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <h2 className='text-lg text-red-400 font-bold'>
                            Protect Oregon Watersheds
                        </h2>
                        <h1 className='text-3xl text-red-500 font-extrabold'>
                            PUBLIC PROTEST 
                        </h1>
                        <h3 className='text-base text-default-500'>
                            Location: WALDPORT Hwy 101 and 34
                        </h3>
                        <p className='text-base text-default-500'>
                            Our chance to make some noise and build community support! 
                        </p>
                    </div>
                </CardBody>
            </Card>
{/* 
            <Card className="py-4 lg:w-1/2 x1:w-1/2 border hover:border-blue-400">
                <CardBody className="overflow-visible py-2 flex-row gap-2">
                    <div className='w-1/4'>
                        <img
                            alt="picture 2"
                            className="object-cover rounded-xl"
                            src="https://forms.office.com/pages/responsepage.aspx?id=Mmk_qnz6tEegzqWYytFhzzknSMTx2t9NvFKIUu3SzjZUQ0xHN1JFRTRIVVVSUTdDQ0FUMDVSTkFGWCQlQCN0PWcu&fbclid=IwAR0hHA3Sues6PwMLJ1caNrsWwQuyCbde8GFYKmFhOFOAKbmlyGU14b6DuTc"
                            width={270}
                        />
                    </div>
                    <div className='w-1/4 flex flex-col items-center gap-2'>
                        <h2 className='text-lg font-bold uppercase'>Tuesday</h2>
                        <h2 className='text-lg font-bold uppercase'>Feb. 6, 2024</h2>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <p className='text-sm text-default-500'>
                            Central Coast Watershed
                        </p>
                        <p className='text-xl text-default-800'>
                            Drinking Water Protection
                        </p>
                        <p className='text-sm text-default-500'>
                            Location: OCCC Newport Campus
                        </p>
                        <p className='text-sm text-default-500'>
                        These workshops are designed for communities to collaborate with fellow drinking water providers, local governments, conservation practitioners, land
managers, and funding partners. In-person and virtual options available.
                        </p>
                    </div>
                </CardBody>
            </Card>

            <Card className="py-4 lg:w-1/2 x1:w-1/2 border hover:border-blue-400">
                <CardBody className="overflow-visible py-2 flex-row gap-2">
                    <div className='w-1/4'>
                        <img
                            alt="picture 3"
                            className="object-cover rounded-xl"
                            src="https://form.jotform.com/233374829823162"
                            width={270}
                        />
                    </div>
                    <div className='w-1/4 flex flex-col items-center gap-2'>
                        <h2 className='text-lg font-bold uppercase'>Wednesdays</h2>
                        <h2 className='text-lg font-bold uppercase'>6-7:30 pm</h2>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <p className='text-sm text-default-500'>
                            Oregon Coast Community College
                        </p>
                        <p className='text-xl text-default-800'>
                            Caring For Our Water
                        </p>
                        <p className='text-sm text-default-500'>
                            Location: OCCC Waldport Campus
                        </p>
                        <p className='text-sm text-default-500'>
                            Drinking water comes from our faucets but how does it get there? When we look at water, it looks clean, but is it? Come join us for a 4 session class and find answers to these water related questions.  Let’s look at the how our daily choices and the corporate world impacts the around water.
                        </p>
                    </div>
                </CardBody>
            </Card> */}
        </div>
    );
}

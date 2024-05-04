
import img1 from "../assets/Screenshot 2024-05-04 232638.png";
import img2 from "../assets/Screenshot 2024-05-04 223543.png";
import plane from "../assets/plane.jpg";
import img3 from "../assets/Screenshot 2024-05-04 175057.png";


function Body() {
    return (
        <>
            <section className=' flex px-5 md:px-5 flex-col '>
                <div className='md:my-20 mt-40   mb-7  flex flex-col  md:gap-12 gap-5 '>

                    <img className='rounded-full w-16 md:w-52' src={plane}/>
                    <div className='flex gap-2  flex-col  '>
                        <h1 className=' w-4/10 dmsans1 text-2xl md:text-6xl font-bold'>Hello, I&rsquo;m Abhay Tank</h1>
                        <p className=' self-end mt-3 dmsans2 w-6/10 text-lg md:text-[32px] font-[400] text-[#606060]'>A senior-year design student who trying to specialize in 3D modeling & texturing.</p>
                    </div>

                    {/*<svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path d="M19.2187 0.181824H14.4176V29.2102L3.31959 18.1122L0.0326538 21.4361L16.8182 38.2216L33.6406 21.4361L30.2798 18.1122L19.2187 29.2102V0.181824Z" fill="#181717"/>*/}
                    {/*</svg>*/}
                    <hr className='border-zinc-300'/>




                </div>

                <section className='md:gap-10 gap-10 w-[95%] flex flex-col'>

                        <div className='flex h-fit py-5  w-full flex-col-reverse md:flex-row md:gap-20 gap-5  '>
                            <div className=' inter  flex gap-5 md:gap-16 flex-col justify-between h-52 md:w-5/12'>
                                <div className='flex gap-4 flex-col'>
                                    <h1 className=' md:text-[18px] text-[15px]  font-[500]'>01 / PROJECT NAME</h1>
                                    <h2 className=' md:text-[18px] text-15px font-[400]'>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.</h2>
                                    <p className=' md:text-[14px] text-sm text-[#606060] pt-2 font-[400]'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
                                </div>
                                <div className='md:text-[18px] text-sm font-[500] underline ' >More shots from this project ↗</div>
                            </div>
                            <div className='  md:h-[350px] h-fit my-3  md:w-7/12'>
                                <img src={img1} alt='img' className='h-full  w-full object-cover'/>
                            </div>

                        </div>


                    <div className='flex h-fit py-5  w-full flex-col-reverse md:flex-row md:gap-20 gap-5  '>
                        <div className=' inter  flex gap-5 md:gap-16 flex-col justify-between h-52 md:w-5/12'>
                            <div className='flex gap-4 flex-col'>
                                <h1 className=' md:text-[18px] text-[15px]  font-[500]'>01 / PROJECT NAME</h1>
                                <h2 className=' md:text-[18px] text-15px font-[400]'>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.</h2>
                                <p className=' md:text-[14px] text-sm text-[#606060] pt-2 font-[400]'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
                            </div>
                            <div className='md:text-[18px] text-sm font-[500] underline ' >More shots from this project ↗</div>
                        </div>
                        <div className='  md:h-[350px] h-fit my-3  md:w-7/12'>
                            <img src={img1} alt='img' className='h-full  w-full object-cover'/>
                        </div>

                    </div>


                    <div className='flex h-fit py-5  w-full flex-col-reverse md:flex-row md:gap-20 gap-5  '>
                        <div className=' inter  flex gap-5 md:gap-16 flex-col justify-between h-52 md:w-5/12'>
                            <div className='flex gap-4 flex-col'>
                                <h1 className=' md:text-[18px] text-[15px]  font-[500]'>01 / PROJECT NAME</h1>
                                <h2 className=' md:text-[18px] text-15px font-[400]'>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.</h2>
                                <p className=' md:text-[14px] text-sm text-[#606060] pt-2 font-[400]'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
                            </div>
                            <div className='md:text-[18px] text-sm font-[500] underline ' >More shots from this project ↗</div>
                        </div>
                        <div className='  md:h-[350px] h-fit my-3  md:w-7/12'>
                            <img src={img1} alt='img' className='h-full  w-full object-cover'/>
                        </div>

                    </div>
                        {/*<div className='w-full mt-16 h-[1px] bg-zinc-800'></div>*/}






                </section>

            </section>
        </>
    );
}

export default Body;
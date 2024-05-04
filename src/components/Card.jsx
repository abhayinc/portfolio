import Image  from '../assets/img.png'

function Card() {
    return (
        <>

            <div className='h-[473px]   w-full'>
                <div className='flex  gap-20  '>

                    <div className=' inter  flex  gap-36 flex-col justify-between h-52 w-5/12'>
                        <div className='flex gap-4 flex-col'>
                            <h1 className=' text-[18px] font-[500]'>01 / PROJECT NAME</h1>
                            <h2 className=' text-[18px] font-[400]'>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.</h2>
                            <p className=' text-[14px] text-[#606060] pt-2 font-[400]'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
                        </div>
                        <div className='text-[18px] font-[500] underline ' >More shots from this project ↗</div>
                    </div>
                    <div className='   h-[350px] w-7/12'>
                        <img src={Image} alt='img' className='h-full  w-full object-cover'/>
                    </div>

                </div>
                <div className='w-full mt-24 h-[1px] bg-zinc-800'></div>
            </div>


        </>
    );
}

export default Card;
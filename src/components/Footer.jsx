
function Footer() {
    return (
        <>


            
            <div className="w-full rounded-b-lg md:mt-10 mt-16  flex items-center justify-center bg-black">
                <div className=" dmsans w-full py-12 px-5 text-white flex flex-col">

                    <div className="w-full text-3xl md:text-7xl font-bold">
                        <h1 className="w-full ">Lets Get in touch</h1>
                    </div>
                    <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                        <p className="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
                        <div className="w-44 pt-6 md:pt-0">
                            <a className="bg-blue-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Email Now</a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Footer;
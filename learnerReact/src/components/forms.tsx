import Btn from "./buttom";

function Form(){
    return (
        <>
            <form action="" method="POST" className="space-y-6 my-10">
                <div>
                    <h2 className="text-2xl font-bold text-center text-[#F1F1F1]">
                        Contact
                    </h2>
                </div>
                <div className=" mx-5 space-y-6">
                    <div className="">
                        <input type="text" name="name" id="name" placeholder="your name" className="w-full p-2 outline-none bg-[#121212] rounded-md border border-[#474545]"/>
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="mail@gmail.com" className="w-full p-2 outline-none bg-[#121212] rounded-md border border-[#474545]" />
                    </div>
                    <div>
                        <textarea name="message" id="message" className="h-40 outline-none bg-[#121212] rounded-md border border-[#474545] text-[#F1F1F1] w-full p-2" placeholder="whrite your message"></textarea>

                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Btn label="submit" 
                        className = "px-10 py-2 rounded-xl bg-indigo-600 text-white my-2"   
                    />

                </div>
               
            </form>
        </>
    )
}

export default Form;
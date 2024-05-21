export function FormContact() {
    return ( 
        <form 
            className="flex flex-col p-6  gap-2  rounded-lg bg-gradient-to-tl from-violet-900 to-blue-600">
            <input 
                type="text" 
                placeholder="Name" 
                className="p-3 rounded-lg text-gray-100 placeholder:text-gray-300 bg-[#101731]"
                />
            <input 
                type="email" 
                placeholder="Email"
                className="p-3 rounded-lg text-gray-100 placeholder:text-gray-300 bg-[#101731]"
                />
            <textarea 
                placeholder="Message"
                className="h-28 p-3 rounded-lg resize-none text-gray-100 placeholder:text-gray-300 bg-[#101731]"
                />
            <input 
                type="submit" 
                value="Send"
                className="self-start mt-1 px-12 py-3 cursor-pointer rounded-lg font-medium text-lg text-gray-100 bg-[#101731]"
                />

        </form>
     );
}


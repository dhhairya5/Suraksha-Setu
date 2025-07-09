import { useState } from "react";

const ReadFeed = ({ imageLink, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle isOpen state
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <>
            <button
                onClick={toggleOpen}
                className="underline text-[#332b2b] text-[13px] md:text-sm"
            >
                Read more
            </button>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-gray-50 rounded-lg shadow-lg w-[90%] md:w-[550px]">
                        <div className="flex justify-end pt-2 pr-2">
                            <button
                                onClick={toggleOpen}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="p-5 flex flex-col gap-4 justify-center items-center">
                            <div className="w-full flex justify-center">
                                <img
                                    className="w-64 h-60 rounded-sm object-cover"
                                    src={imageLink}
                                    alt=""
                                />
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold text-center text-black">{title}</h2>

                            <p className="text-sm md:text-base text-gray-900 w-[90%] max-h-36 overflow-y-auto my-scrollbar">
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReadFeed;

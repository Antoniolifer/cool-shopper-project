
import Modal from "./Modal";


const AboutModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="text-black">

                <h2 className="text-2xl underline font-bold my-1">About Cool Shopper</h2>
                <p className="text-md">
                    <i>Cool Shopper</i> is an online store page, a website for all your shopping needs.<br/>

                    <span className="bg-gray-500 text-white  px-2 py-1 my-2 rounded-2xl inline-block">This website offers a great shopping experience with extensive tools for finding exactly what you need: categorisation, filtering, pricing, searching, and sorting, with minimal overhead and clutter.</span><br/>
                </p>
                <h2 className="text-2xl underline font-bold my-1">About the tech</h2>
                <p className="text-md">
                <span className="bg-gray-500 text-white px-2 py-1 rounded-2xl inline-block">This frontend-only Single Page application uses Vite, <strong>React.js</strong>, and Tailwind CSS.</span><br/>
                    
                    The core of the app is done in <strong>React</strong>. It uses React Context to manage state effectively 
                    in such a deeply nested and interconnected project, and various optimisation techniques, 
                    such as useMemo and useCallback, among others.<br/>
                    This app uses <a href="https://fakestoreapi.in/docs" className="underline">Fake Store API</a> for the product data. This app is hosted on <strong>Netlify.</strong><br/>
                </p>
                <h2 className="text-2xl underline font-bold my-1">About the author</h2>
                <p className="text-md">
                <span className="bg-gray-500 text-white px-2 py-1  rounded-2xl inline-block">My name is Anton Serdiuk and I am a <strong>Javascript/React.js</strong> web developer from Perth, WA.</span><br/>
                    I have created this app for showcasing my frontend developer skills, further practicing complex React.js techniques, and simply because I wanted to appreciate the complexity of implementing a full shopping page firsthand. 
                     
                </p>

                <button
                    className="mt-4 px-4 py-2
                            bg-violet-600 text-white
                            hover:bg-violet-500
                            rounded-lg
                            block mx-auto
                            border-2 border-white
                            cursor-pointer
                            shadow-lg shadow-violet-400/50"
                    onClick={onClose}
                >
                    Thank you for checking out <i className="underline underline-offset-2">Cool Shopper!</i>
                </button>
            </div>
        </Modal>
    );
};

export default AboutModal;

import Modal from "./Modal";


const AboutModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="text-black text-xl">

                <h2 className="text-2xl underline font-bold my-1">About Cool Shopper</h2>
                <p className="text-md">
                    <span className="bg-gray-600 text-center text-white  w-auto px-10 py-2 my-6 rounded-2xl inline-block"><i>Cool Shopper</i> is an online shopping page, a slice of an e-commerce application, focused on performance and practicality.
                    </span><br/>

                    It was developed using <strong>React</strong> (with native React Context) and <strong>Tailwind</strong>. 
                    <br/><br/>
                    My name is Anton Serdiuk and I am a Javascript & React developer from Perth, WA. 
                    <br/><br/>
                    Check out my code and read about this project's development on the <a href='https://github.com/Antoniolifer/cool-shopper-project' target='_blank'className="text-purple-500 underline font-bold underline-offset-3 cursor-pointer w-5">github repo</a>.


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
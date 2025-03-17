import { useEffect, useState } from "react"


function ScrollToTopButton() {
  const [displayingButton, setDisplayingButton] = useState(false);
  // console.log(window.scrollY);
  useEffect( ()=>{
    const listenerFunction = () => {

      const { scrollTop, clientHeight } = document.documentElement;

      console.log('scroll: ',document.documentElement.scrollTop);//how far you scrolled
      console.log('client height: ',document.documentElement.clientHeight); //screen height
      if(scrollTop > clientHeight+50) {
        setDisplayingButton(true);
      } else{
        setDisplayingButton(false);
      }
    }
    window.addEventListener('scroll', listenerFunction);
    return ( () => {
      window.removeEventListener('scroll', listenerFunction);
    })

  },[]);
  const handleClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});


  }
  if(displayingButton){
    return (
      <div 
      onClick ={handleClick}
      className={`fixed bottom-5 left-10 border-2
  border-gray-500 bg-gray-100 shadow-xl shadow-gray-500/50 
      hover:bg-white cursor-pointer
      rounded-xl py-1 px-3
      text-lg`}>^ to the top ^</div>
    )
  }
}

export default ScrollToTopButton
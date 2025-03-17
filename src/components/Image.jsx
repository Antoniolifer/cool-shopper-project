import { useState } from "react"


function Image({src}) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };
  if(hasError){
    return <img src={'noImageSmall.jpg'} alt="" className="h-full max-h-35 overflow-hidden lg:max-h-50 mx-auto"/>

  }
  return (
    <img src={src} alt="" className="h-full max-h-35 overflow-hidden lg:max-h-50 mx-auto" onError={handleError}/>

  )
}

export default Image
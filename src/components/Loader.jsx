import { GridLoader } from "react-spinners";




function Loader() {
  return (
    <div className="mt-24">
        <GridLoader
            color="#868686"
            size={20}
            speedMultiplier={1}
            cssOverride={{ margin: "0 auto", display:'block'}}
        />
        <h1 className="text-lg text-center mt-3">...Loading products...</h1>
    </div>
  )
}

export default Loader
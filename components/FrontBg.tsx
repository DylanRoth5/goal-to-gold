import clsx from "clsx"

export default function FrontBg() {

  function getMatrix(amount = 10) {
    const matrix = []
    for (let i = 0; i < amount; i++) {
      matrix.push(Math.random())
    }
    return matrix
  }
  return (
    <div className="absolute -z-10 top-0 left-0 w-full h-full ">
      <div className="w-full h-screen overflow-hidden -z-10 blur-sm grid grid-cols-10 aspect-square">
        {
          getMatrix(10).map((matrix, index) => {

            return <div key={index} className="grid aspect-square">
              {
                getMatrix(20).map((matrix, index) => {
                  return <div key={index}  className={clsx("m-2 hover:bg-amber-500 duration-200 transition-all aspect-square ", Math.random() < 0.5 ? "bg-secondary" : Math.random() < 0.5 ? "bg-amber-400" : Math.random() < 0.5 ? "bg-amber-600" : "bg-amber-800")}></div>
                })
              }
            </div>
          })
        }
      </div>
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
    </div>

  )
}
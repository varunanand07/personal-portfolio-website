import aboutImg from "../assets/about.jpg";

const about = () => {
  return (<div className="border-b border-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">About
    <span className="text-neutral-500"> Me</span>
    </h2>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src = {aboutImg} alt = "about"></img>
            </div>
        </div>
    </div>
  </div>
  )
}

export default about

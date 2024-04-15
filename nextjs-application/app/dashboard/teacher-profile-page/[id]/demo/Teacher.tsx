export default function TeacherDemo() {
    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold ">Check out <span className="text-violet-600">Example teacher</span>&aposs Demo class</h1>
            <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=70SzSIbuFbaKFOdf&autoplay=1" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-auto p-4 aspect-video"
            ></iframe>
        </div>
    )
}
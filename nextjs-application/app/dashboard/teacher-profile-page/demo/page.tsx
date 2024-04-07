export default function TeacherDemo() {
    return (
        <div className="m-4 mt-10">
            <h1 className="text-2xl font-bold ">Check out <span className="text-violet-600">Example teacher</span>'s Demo class</h1>
            <iframe
                width="1280"
                height="720"
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
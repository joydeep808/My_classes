

export default function TeacherDemo(video:{video:string}) {
    
    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold ">Check out <span className="text-violet-600">Example teacher</span>&aposs; Demo class</h1>
           {video.video ?  <iframe
                src={video.video} 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-auto p-4 aspect-video"
            ></iframe>:"Teacher not posted any video"}
        </div>
    )
}
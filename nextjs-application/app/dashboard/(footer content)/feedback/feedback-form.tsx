"use client"

export default function FeedbackForm() {
    return (
        <form action="" className="flex flex-col gap-2 w-full" onSubmit={(e) => { e.preventDefault() }}>
            <label htmlFor="feedback-username" className="text-2xl font-semibold">Full name</label>
            <input type="text" id="feedback-username" name="feedback-username" placeholder="example name" className="rounded-xl border-slate-200 focus:shadow-xl transition-all" /><br />

            <label htmlFor="feedback-email" className="text-2xl font-semibold">Email address</label>
            <input type="email" id="feedback-email" name="feedback-email" placeholder="example@gmail.com" className="rounded-xl border-slate-200 focus:shadow-xl transition-all" /><br />

            <label htmlFor="feedback" className="text-2xl font-semibold">Feedback</label>
            <textarea name="feedback" id="feedback" cols={30} rows={10} className="resize-none rounded-xl border-slate-200 focus:shadow-xl transition-all" placeholder="write your feedback here"></textarea><br />

            <input type="submit" value="Send Feedback" className="bg-indigo-600 text-slate-50 self-center md:self-start p-3 rounded-full cursor-pointer hover:bg-indigo-500 hover:shadow-2xl active:bg-indigo-800 transition-all " />
        </form>
    )
}

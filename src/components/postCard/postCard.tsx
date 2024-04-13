import Image from "next/image";
import Link from "next/link";

export default function PostCard() {
    return (
        <div className="flex flex-col gap-4 mb-5 overflow-y-auto">
            <div className="flex">
                <div className="relative w-11/12 h-96">
                    <Image className="object-cover" src="https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill />
                </div>
                <span className="text-xs -rotate-90 m-auto">01.01.2024</span>
            </div>
            <div className="">
                <h1 className="text-2xl font-bold mb-5">Title</h1>
                <p className="mb-5 font-light text-gray-500 w-11/12">
                    asldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lk asldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lk asldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lk
                </p>
                <Link href="/blog/page" className="underline">READ MORE</Link>
            </div>
        </div>
    );
}
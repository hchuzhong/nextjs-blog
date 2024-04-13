import Image from "next/image";

export default function BlogChildPage() {
  const detailTexStyling = "flex flex-col gap-1";
  const detailTitleStyling = "text-gray-500 font-bold";
  const detailValueStyling = "font-medium";
  return (
    <div className="flex gap-12 h-[calc(100vh-192px)]">
      <div className="hidden md:block flex-1 relative h-[calc(100vh-192px)]">
        <Image className="object-cover" src="https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill />
      </div>
      <div className="flex-[2] flex flex-col gap-6">
        <h1 className="text-4xl">Title</h1>
        <div className="flex gap-4">
          <div className="relative w-12 h-12">
            <Image className="object-cover rounded-full" src="https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill />
          </div>
          <div className={detailTexStyling}>
            <span className={detailTitleStyling}>Author</span>
            <span className={detailValueStyling}>Terry Hello</span>
          </div>
          <div className={detailTexStyling}>
            <span className={detailTitleStyling}>Published</span>
            <span className={detailValueStyling}>Terry Hello</span>
          </div>
        </div>
        <div className="text-xl">
          asldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lk asldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lk asldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lkasldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lkasldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lkasldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lkasldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lkasldkjalksdjlaksd as dals djlkasjd as dlaksj dlaksjd laks dlkasjd lkasjd lk
        </div>
      </div>
    </div>
  );
}

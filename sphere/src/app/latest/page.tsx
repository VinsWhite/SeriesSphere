import LatestComp from "@/components/latest/latest-comp"
import NewsComp from "@/components/latest/news-comp"

export default function LatestNews() {
    return (
        <>
            <h2 className="text-4xl">Latest News</h2>
            <div>
                <LatestComp />
                <NewsComp />
            </div>
        </>
    )
}
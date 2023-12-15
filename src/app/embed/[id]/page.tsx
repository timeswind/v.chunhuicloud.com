
import dynamic from 'next/dynamic'
import Script from 'next/script'

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false })


async function getData(mediaid: string) {
    const res = await fetch(`https://general-service.chunhuizk.com/public/vod/play-url/${mediaid}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    const data = await res.json()

    if (!res.ok) {
        return ""
    }

    return data.playUrl
}

interface VideoEmbedPageProps {
    params: { id: string }
}

export default async function VideoEmbedPage({ params }: VideoEmbedPageProps) {

    const playUrl = await getData(params.id)

    return (
        <div>
            <Script src="https://tools.granddongshan.com/hls/hls.min.js" strategy="lazyOnload" />
            <VideoPlayer playUrl={playUrl} />
        </div>
    )
}
import { redirect } from 'next/navigation'

interface MediaPageProps {
    params: { id: string }
}

export default async function MediaPage({ params }: MediaPageProps) {
    redirect(`https://tools.chunhuicloud.com/vod/media/?id=${params.id}`)
}
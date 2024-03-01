import { useEffect, useState } from "preact/hooks"

export function UseImagePreload(src: string) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  useEffect(() => {
    const img: HTMLImageElement = new Image()

    const handleLoad = () => {
      setImageLoaded(true)
    }

    img.addEventListener("load", handleLoad)

    return () => img.removeEventListener("load", handleLoad)
  }, [src])

  return imageLoaded
}

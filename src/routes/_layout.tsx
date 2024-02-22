import { PageProps } from "$fresh/server.ts"
import { HeaderRoot, Footer } from "../widgets/mod.ts"

export default function Layout({ Component }: PageProps) {
  return (
    <div className="layout bg-blue text-red">
      <div className="layout-header">
        <HeaderRoot />
      </div>
      
      <div className="layout-main">
        <Component />
      </div>
      
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  )
}

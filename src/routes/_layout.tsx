import { PageProps } from "$fresh/server.ts"
import { HeaderRoot, Footer, ModalsRoot } from "../layers/widgets/mod.ts"

export default function Layout({ Component }: PageProps) {
  return (
    <div className="layout font-primary bg-blue text-white">
      <div className="layout-header">
        <HeaderRoot />
      </div>
      
      <div className="layout-main">
        <Component />
      </div>
      
      <div className="layout-footer">
        <Footer />
      </div>
      
      <ModalsRoot />
    </div>
  )
}

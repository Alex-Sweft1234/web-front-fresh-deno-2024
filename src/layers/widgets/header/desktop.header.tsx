import { Button, Container, Image, NavLink } from "../../shared/ui/mod.ts"
import { img } from "../../assets/mod.ts"

export function DesktopHeader() {
  return (
    <div className="h-full">
      <Container className="h-full">
        <div className="flex-nowrap grid grid-cols-12 gap-4 h-full">
          <div className="col-start-1 col-end-3 flex items-center">
            <Image src={img.logo} alt="logo" />
          </div>
          <div className="col-start-6 col-end-13">
            <div className="flex flex-nowrap justify-between items-center gap-4 h-[100%]">
              <div>
                <NavLink href="/">Главная</NavLink>
              </div>
              <div>
                <Button>Войти</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

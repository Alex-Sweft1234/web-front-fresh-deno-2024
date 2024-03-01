import { Container, Image, LinkButton, NavLink} from "../../shared/ui/mod.ts"
import { img } from "../../assets/mod.ts"
import { TMenu } from "../../types/mod.ts"

interface IDesktopHeader {
  items: TMenu[]
}

export function DesktopHeader({ items }: IDesktopHeader) {
  return (
    <div className="h-full">
      <Container className="h-full">
        <div className="flex-nowrap grid grid-cols-12 gap-4 h-full">
          <div className="col-start-1 col-end-3 flex items-center">
            <Image src={img.logo} alt="logo" />
          </div>
          <div className="col-start-6 col-end-13">
            <div className="flex flex-nowrap justify-between items-center gap-4 h-[100%]">
              {items.map((k: TMenu, i: number) => (
                <div key={`menu-${i}`}>
                  <NavLink href={k.path}>{k?.link}</NavLink>
                </div>
              ))}

              <div>
                <LinkButton href="?signin" color="secondary" bgColor="primary">Войти</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

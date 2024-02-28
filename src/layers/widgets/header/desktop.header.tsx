import { Button, Container, NavLink } from "../../shared/ui/mod.ts"

export function DesktopHeader() {
  return (
    <div className="h-[100%]">
      <Container className="h-[100%]">
        <div className="h-[100%] flex justify-between items-center">
          <div>logo</div>
          <div className="h-[100%] flex justify-center items-center">
            <div>
              <NavLink href="/">Главная</NavLink>
            </div>
            <div>
              <Button>Войти</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

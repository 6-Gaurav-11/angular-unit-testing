import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe("HeroesComponent", ()=> {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(()=>{
        HEROES = [
            {id: 1, name: "Spiderman", strength: 8},
            {id: 2, name: "Batman", strength: 15},
            {id: 3, name: "Thor", strength: 55}
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
        component = new HeroesComponent(mockHeroService);
    })
    describe("delete", ()=> {
        it("should remove indicated hero", ()=> {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            expect(component.heroes.length).toBe(2);
        })

        it("should call deleteHero() with proper obj", ()=> {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })
    })
})
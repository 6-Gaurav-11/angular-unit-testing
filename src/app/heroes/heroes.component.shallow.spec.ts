import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroService } from "../hero.service"
import { HeroesComponent } from "./heroes.component";

describe("HeroesComponent (shallow tests", ()=> {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;

    beforeEach(()=> {
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [
                {provide: HeroService, useValue: mockHeroService }],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it("should do nothing", ()=> {
        expect(true).toBe(true);
    })
})
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docters } from './docters';

describe('Docters', () => {
    let component: Docters;
    let fixture: ComponentFixture<Docters>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Docters]
        })
            .compileComponents();

        fixture = TestBed.createComponent(Docters);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
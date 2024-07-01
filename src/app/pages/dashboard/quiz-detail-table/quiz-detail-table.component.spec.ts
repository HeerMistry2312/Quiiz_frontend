import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailTableComponent } from './quiz-detail-table.component';

describe('QuizDetailTableComponent', () => {
  let component: QuizDetailTableComponent;
  let fixture: ComponentFixture<QuizDetailTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizDetailTableComponent]
    });
    fixture = TestBed.createComponent(QuizDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';

const appRoutes = [
    {
        path: '',
        component: SurveyComponent
    },
    {
        path : 'designer',
        component: SurveyEditorComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
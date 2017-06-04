import { Component } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';

@Component({
    moduleId:module.id,
    selector: 'survey-editor',
    templateUrl: `./survey.editor.html`,
})
export class SurveyEditorComponent  {
    editor: SurveyEditor.SurveyEditor;

    ngOnInit() {
        let editorOptions = {showEmbededSurveyTab: true};
        this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
        this.editor.saveSurveyFunc = this.saveMySurvey;
    }

    saveMySurvey = () => {
        console.log(JSON.stringify(this.editor.text));
    }
}

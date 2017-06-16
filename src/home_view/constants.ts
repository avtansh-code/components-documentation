
export const INITIAL_STATE_OBJECT = {
    'value': 'initial',
    'text': 'Upload',
    'color': '#337ab7'
};
export const PROGRESS_STATE_OBJECT = {
    'value': 'inprogress',
    'text': 'Uploading',
    'color': '#a9a9a9'
};
export const DONE_STATE_OBJECT = {
    'value': 'done',
    'text': 'done',
    'color': '#5cb85c'
};
export const ERROR_STATE_OBJECT = {
    'value': 'error',
    'text': 'error',
    'color': '#d9534f'
};
export const STATES = [
    'main.introductionPage',
    'main.gettingStarted',
    'main.progressbuttonDemo',
    'main.filevalidationlogDemo',
    'main.progressButton',
    'main.fileTabs'
];
export const TOOLBAR_STATES =[
    [
        'Introduction'
    ],
    [
        'Getting Started'
    ],
    [
        'Demo',
        'Progress Button'
    ],
    [
        'Demo',
        'file Validation Logs'
    ],
    [
        'Directive',
        'progress-button'
    ],
    [
        'Directive',
        'file-tabs'
    ],
]
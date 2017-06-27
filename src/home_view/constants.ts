
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
    'main.fileTabs',
    'main.searchSelectDropdownDemo',
    'main.searchSelectDropdown'
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
        'File Validation Logs'
    ],
    [
        'Directive',
        'progress-button'
    ],
    [
        'Directive',
        'file-tabs'
    ],
    [
        'Demo',
        'Search Select Dropdown'
    ],
    [
        'Directive',
        'search-select-dropdown'
    ],
];

export const FILE_VALIDATION_LOGS = {
    "file 1": {
        "errors": ["error1", "error2", "error3", "error4", "error5", "error6"],
        "warnings": []
    },
    "file 2": {
        "errors": ["error1", "error2", "error3", "error4"],
        "warnings": ["warning1", "warning2", "warning3", "warning4"]
    },
    "file 3": {
        "errors": ["error1", "error2", "error3"],
        "warnings": ["warning1", "warning2", "warning3", "warning4", "warning5", "warning6"]
    },
    "file 4": {
        "errors": [],
        "warnings": [],
    },
    "file 5": {
        "errors": [],
        "warnings": ["warning1", "warning2", "warning3", "warning4", "warning5"]
    },
    "file 6": {
        "errors": ["error1"],
        "warnings": ["warning1"]
    }
}
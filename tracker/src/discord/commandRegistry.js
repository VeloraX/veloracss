const STRING_OPTION = 3;

export const TRACKED_PROJECT_VIEW_COMMAND = 'tracked-project-view';

export const trackerCommandRegistry = Object.freeze([
  {
    name: TRACKED_PROJECT_VIEW_COMMAND,
    description: 'Show the live VeloraCSS Team Planning board summary from GitHub Projects.',
    options: [
      {
        type: STRING_OPTION,
        name: 'status',
        description: 'Optional status filter for returned items.',
        required: false,
        choices: [
          {
            name: 'All',
            value: 'all'
          },
          {
            name: 'In progress',
            value: 'in_progress'
          },
          {
            name: 'Todo',
            value: 'todo'
          },
          {
            name: 'Done',
            value: 'done'
          }
        ]
      }
    ]
  }
]);

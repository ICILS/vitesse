export default [
  {
    title: 'Introduction',
    value: 1,
    translationKey: 'introduction',
    // icon: 'file-text',
    icon: 'mdi-file-document',
    to: '/modules/C3F/intro',
    isComplete: false,
  },
  { header: 'Small tasks', translationKey: 'small_tasks' },
  {
    title: 'Task 1',
    translationKey: 'task_1',
    icon: 'square',
    to: '/modules/C3F/task-1',
    isComplete: false,
    // Does not work
    props: {
      prependIcon: 'mdi-home',
    },
  },

  {
    title: 'Task 2',
    translationKey: 'task_2',
    icon: 'square',
    to: '/modules/C3F/task-2',
    isComplete: true,
  },

  {
    title: 'Task 3',
    translationKey: 'task_3',
    contentTitle: 'Task 3',
    icon: 'square',
    to: '/modules/C3F/task-3',
    isComplete: false,
  },
  {
    title: 'Task 4',
    translationKey: 'task_4',
    icon: 'square',
    to: '/modules/C3F/task-4',
    isComplete: false,
  },
  {
    title: 'Task 5',
    translationKey: 'task_5',
    icon: 'square',
    to: '/modules/C3F/task-5',
    isComplete: false,
  },
  {
    header: 'Large task',
    translationKey: 'large_task',
    icon: 'clipboard',
    to: '/modules/C3F/large-task/task-details',
    children: [],
  },
  {
    title: 'Task details',
    translationKey: 'task_details',
    icon: 'clipboard',
    to: '/modules/C3F/large-task/task-details',
    isComplete: false,
  },
  {
    title: 'Demo video',
    translationKey: 'demo_video',
    icon: 'youtube',
    to: '/modules/C3F/large-task/demo-video',
    isComplete: false,
  },
  {
    title: 'Task',
    translationKey: 'task',
    icon: 'package',
    to: '/modules/C3F/large-task/activity',
    isComplete: false,
  },
  { header: 'Dashboards' },
  {
    title: 'Analytical',
    icon: 'pie-chart',
    to: '/dashboards/analytical',
  },
  {
    title: 'Classic',
    icon: 'coffee',
    to: '/dashboards/classic',
  },

  {
    title: 'Demographical',
    icon: 'cpu',
    to: '/dashboards/demographical',
  },

  {
    title: 'Minimal',
    icon: 'flag',
    to: '/dashboards/minimal',
  },
  {
    title: 'Ecommerce',
    icon: 'shopping-bag',
    to: '/dashboards/ecommerce',
  },
  {
    title: 'Modern',
    icon: 'hard-drive',
    to: '/dashboards/modern',
  },
  {
    header: 'Apps',
  },
  {
    title: 'Chat',
    icon: 'message-square',
    to: '/apps/chat',
  },
  {
    title: 'Calendar',
    icon: 'calendar',
    to: '/apps/calendar',
  },
  {
    title: 'Contact List',
    icon: 'phone',
    to: '/apps/contact-list',
  },
  {
    title: 'Contact Grid',
    icon: 'smartphone',
    to: '/apps/contact-grid',
  },

  {
    title: 'Todo',
    icon: 'check-square',
    to: '/apps/todo',
  },
  { header: 'Components' },
  {
    group: '/ui-components/',

    model: false,
    icon: 'grid',
    title: 'Ui Components',
    children: [
      {
        title: 'Alerts',
        icon: 'disc',
        to: '/ui-components/alerts',
      },
      {
        title: 'Avatar',
        icon: 'disc',
        to: '/ui-components/avatar',
      },
      {
        title: 'Badge',
        icon: 'disc',
        to: '/ui-components/badge',
      },
      {
        title: 'Banner',
        icon: 'disc',
        to: '/ui-components/banner',
      },
      {
        title: 'Appbar',
        icon: 'disc',
        to: '/ui-components/appbar',
      },
      {
        title: 'Toolbar',
        icon: 'disc',
        to: '/ui-components/toolbar',
      },
      {
        title: 'Systembar',
        icon: 'disc',
        to: '/ui-components/systembar',
      },
      {
        title: 'Breadcrumb',
        icon: 'disc',
        to: '/ui-components/breadcrumb',
      },
      {
        title: 'Buttons',
        icon: 'disc',
        to: '/ui-components/buttons',
      },
      {
        title: 'Cards',
        icon: 'disc',
        to: '/ui-components/cards',
      },
      {
        title: 'Carousel',
        icon: 'disc',
        to: '/ui-components/carousel',
      },
      {
        title: 'Chips',
        icon: 'disc',
        to: '/ui-components/chips',
      },
      {
        title: 'Dialogs',
        icon: 'disc',
        to: '/ui-components/dialogs',
      },
      {
        title: 'Dividers',
        icon: 'disc',
        to: '/ui-components/dividers',
      },
      {
        title: 'Expansion Panel',
        icon: 'disc',
        to: '/ui-components/expansionpanel',
      },
      {
        title: 'Footer',
        icon: 'disc',
        to: '/ui-components/footer',
      },
      {
        title: 'Grids',
        icon: 'disc',
        to: '/ui-components/grids',
      },
      {
        title: 'Button Group',
        icon: 'disc',
        to: '/ui-components/button-group',
      },
      {
        title: 'Chip Group',
        icon: 'disc',
        to: '/ui-components/chipgroups',
      },
      {
        title: 'Item Group',
        icon: 'disc',
        to: '/ui-components/itemgroups',
      },
      {
        title: 'Slide Group',
        icon: 'disc',
        to: '/ui-components/slidegroups',
      },
      {
        title: 'Images',
        icon: 'disc',
        to: '/ui-components/images',
      },
      {
        title: 'Menus',
        icon: 'disc',
        to: '/ui-components/menus',
      },
      {
        title: 'Navigation Drawers',
        icon: 'disc',
        to: '/ui-components/navigationdrawers',
      },
      {
        title: 'Pagination',
        icon: 'disc',
        to: '/ui-components/pagination',
      },
      {
        title: 'Progress Circular',
        icon: 'disc',
        to: '/ui-components/progresscircular',
      },
      {
        title: 'Progress Linear',
        icon: 'disc',
        to: '/ui-components/progresslinear',
      },
      {
        title: 'Rating',
        icon: 'disc',
        to: '/ui-components/rating',
      },
      {
        title: 'Tabs',
        icon: 'disc',
        to: '/ui-components/tabs',
      },
      {
        title: 'Timeline',
        icon: 'disc',
        to: '/ui-components/timeline',
      },
      {
        title: 'Tooltips',
        icon: 'disc',
        to: '/ui-components/tooltips',
      },
    ],
  },
  {
    group: '/style-animation',
    model: false,
    icon: 'box',
    title: 'Style & Animation',
    children: [
      {
        title: 'Border Radius',
        icon: 'disc',
        to: '/style-animation/border-radius',
      },
      {
        title: 'Elevation',
        icon: 'disc',
        to: '/style-animation/elevation',
      },
      {
        title: 'Flex',
        icon: 'disc',
        to: '/style-animation/flex',
      },
      {
        title: 'Text and Typography',
        icon: 'disc',
        to: '/style-animation/text-typography',
      },
      {
        title: 'Transitions',
        icon: 'disc',
        to: '/style-animation/transitions',
      },
    ],
  },
  { header: 'Charts' },
  {
    title: 'ApexCharts',
    icon: 'bar-chart-2',
    to: '/charts/apexcharts',
  },
  { header: 'Forms' },
  {
    group: '/form-elements',
    model: false,
    icon: 'file',
    title: 'Form Elements',
    children: [
      {
        title: 'Autocompletes',
        icon: 'disc',
        to: '/form-elements/feautocompletes',
      },
      {
        title: 'Combobox',
        icon: 'disc',
        to: '/form-elements/fecombobox',
      },
      {
        title: 'File Inputs',
        icon: 'disc',
        to: '/form-elements/fefileinputs',
      },
      {
        title: 'Inputs',
        icon: 'disc',
        to: '/form-elements/feinputs',
      },

      {
        title: 'Selection Controls',
        icon: 'disc',
        to: '/form-elements/feselectioncontrols',
      },
      {
        title: 'Selects',
        icon: 'disc',
        to: '/form-elements/feselects',
      },
      {
        title: 'Sliders',
        icon: 'disc',
        to: '/form-elements/fesliders',
      },
      {
        title: 'Textareas',
        icon: 'disc',
        to: '/form-elements/fetextareas',
      },
      {
        title: 'Textfields',
        icon: 'disc',
        to: '/form-elements/fetextfields',
      },
    ],
  },
  {
    group: '/form-layouts',
    model: false,
    icon: 'codesandbox',
    title: 'Form Layouts',
    children: [
      {
        title: 'Form Action',
        icon: 'disc',
        to: '/form-layouts/form-action',
      },
      {
        title: 'Form Basic',
        icon: 'disc',
        to: '/form-layouts/form-basic',
      },

      {
        title: 'Form Horizontal',
        icon: 'disc',
        to: '/form-layouts/form-horizontal',
      },
    ],
  },
  { header: 'Widgets' },
  {
    title: 'Custom Cards',
    icon: 'copy',
    to: '/widgets/custom-cards',
  },
  { header: 'Tables' },
  {
    title: 'Simple Table',
    icon: 'layout',
    to: '/tables/simpletables',
  },
  {
    title: 'Editable Table',
    icon: 'edit',
    to: '/tables/editabletable',
  },
  { header: 'Authentication' },
  {
    title: 'Boxed Login',
    icon: 'log-in',
    to: '/authentication/boxedlogin',
  },
  {
    title: 'Login',
    icon: 'unlock',
    to: '/authentication/fulllogin',
  },
  {
    title: 'Boxed Register',
    icon: 'user-plus',
    to: '/authentication/boxedregister',
  },
  {
    title: 'Register',
    icon: 'user',
    to: '/authentication/fullregister',
  },
  {
    title: 'Error',
    icon: 'alert-triangle',
    to: '/authentication/error',
  },
  { header: 'Icons' },
  {
    title: 'Material',
    icon: 'codesandbox',
    to: '/icons/material',
  },
  {
    title: 'Feather',
    icon: 'feather',
    to: '/icons/feather',
  },
  { header: 'Test pages', translationKey: 'test_pages' },
  {
    title: 'Supabase nuxt demo',
    translationKey: 'supabase_nuxt_demo',
    icon: 'codesandbox',
    to: '/supabase-nuxt-demo',
  },
  {
    title: 'Test',
    translationKey: 'test',
    icon: 'codesandbox',
    to: '/test',
  },
  {
    title: 'Modal Test',
    translationKey: 'modal_test',
    icon: 'codesandbox',
    to: '/modal-test',
  },
]
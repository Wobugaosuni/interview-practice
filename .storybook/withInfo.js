const info = {
  /**
   * Text to display with storybook component
   */
  // text?: string;
  /**
   * Displays info inline vs click button to view
   * @default false
   */
  // inline: boolean,
  /**
   * Toggles display of header with component name and description
   * @default true
   */
  // header: boolean,
  /**
   * Displays the source of story Component
   * @default true
   */
  source: false,
  /**
   * Components used in story
   * Displays Prop Tables with these components
   * @default []
   */
  // propTables: Array<React.ComponentType>,
  /**
   * Exclude Components from being shown in Prop Tables section
   * Accepts an array of component classes or functions
   * @default []
   */
  // propTablesExclude: Array<React.ComponentType>,
  /**
   * Overrides styles of addon. The object should follow this shape:
   * https://github.com/storybookjs/storybook/blob/master/addons/info/src/components/Story.js#L19.
   * This prop can also accept a function which has the default stylesheet passed as an argument
   */
  // styles: Object | Function,
  /**
   * Overrides components used to display markdown
   * @default {}
   */
  // components: { [key: string]: React.ComponentType },
  /**
   * Max props to display per line in source code
   * @default 3
   */
  // maxPropsIntoLine: number,
  /**
   * Displays the first 10 characters of the prop name
   * @default 3
   */
  // maxPropObjectKeys: number,
  /**
   * Displays the first 10 items in the default prop array
   * @default 3
   */
  // maxPropArrayLength: number,
  /**
   * Displays the first 100 characters in the default prop string
   * @default 50
   */
  // maxPropStringLength: number,
  /**
   * Override the component used to render the props table
   * @default PropTable
   */
  // TableComponent: React.ComponentType,
  /**
   * Will exclude any respective properties whose name is included in array
   * @default []
   */
  // excludedPropTypes: Array<string>,
}

export default info
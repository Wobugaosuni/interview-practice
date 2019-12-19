import { configure } from '@storybook/react';

// Globally in your .storybook/config.js.
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import info from './withInfo'

// load all the stories underneath your ../src directory that match the pattern *.stories.js
configure(require.context('../app', true, /\.stories\.js$/), module);

// Show Info 配置
addDecorator(withInfo(info))

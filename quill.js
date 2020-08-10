import Quill from './core';

import Indent from './formats/indent';

import Blockquote from './formats/blockquote';
import Header from './formats/header';
import List from './formats/list';

import Bold from './formats/bold';
import Italic from './formats/italic';
import Link from './formats/link';
import Strike from './formats/strike';
import Underline from './formats/underline';

import CodeBlock, { Code as InlineCode } from './formats/code';

import Syntax from './modules/syntax';
import Toolbar from './modules/toolbar';

import Icons from './ui/icons';
import Picker from './ui/picker';
import ColorPicker from './ui/color-picker';
import IconPicker from './ui/icon-picker';
import Tooltip from './ui/tooltip';

import BubbleTheme from './themes/bubble';

Quill.register(
  {
    'formats/indent': Indent,

    'formats/blockquote': Blockquote,
    'formats/code-block': CodeBlock,
    'formats/header': Header,
    'formats/list': List,

    'formats/bold': Bold,
    'formats/code': InlineCode,
    'formats/italic': Italic,
    'formats/link': Link,
    'formats/strike': Strike,
    'formats/underline': Underline,

    'modules/syntax': Syntax,
    'modules/toolbar': Toolbar,

    'themes/bubble': BubbleTheme,

    'ui/icons': Icons,
    'ui/picker': Picker,
    'ui/icon-picker': IconPicker,
    'ui/color-picker': ColorPicker,
    'ui/tooltip': Tooltip,
  },
  true,
);

export default Quill;

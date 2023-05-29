import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';

import Header from './Header';
import List from './List';
import Timeline from './timeline';
import { IconBold } from '@codexteam/icons';

import createGenericInlineTool, {
  ItalicInlineTool,
  UnderlineInlineTool,
} from './InlineTools';

import AnchorTune from './block_tunes/Anchor';

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  timeline: Timeline,
  // add custom tags or overwrite default tools of editorjs by using the same
  // name (eg. `bold` or `italic`)
  bold: {
    class: createGenericInlineTool({
      sanitize: {
        strong: {},
      },
      shortcut: 'CMD+B',
      tagName: 'STRONG',
      toolboxIcon: IconBold,
    }),
  },
  // or use a pre-defined tool instead
  italic: ItalicInlineTool,
  underline: UnderlineInlineTool,
  anchorTune: AnchorTune,
}

import createGenericInlineTool from './tool';
import { IconItalic, IconBold, IconUnderline } from '@codexteam/icons';

export const ItalicInlineTool = createGenericInlineTool({
  sanitize: {
    em: {},
  },
  shortcut: 'CMD+I',
  tagName: 'EM',
  toolboxIcon: IconItalic,
})

export const StrongInlineTool = createGenericInlineTool({
  sanitize: {
    strong: {},
  },
  shortcut: 'CMD+B',
  tagName: 'STRONG',
  toolboxIcon: IconBold,
})

export const UnderlineInlineTool = createGenericInlineTool({
  sanitize: {
    u: {},
  },
  tagName: 'U',
  toolboxIcon: IconUnderline,
})
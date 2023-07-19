# Test Storybook 7 &amp; CSF 3 children as arg

See: https://storybook.js.org/docs/react/writing-stories/stories-for-multiple-components#using-children-as-an-arg

Despite what is saying the docs, this seems to not be possible in CSF3 format (see [`src/components/List.stories.tsx`](https://github.com/pierreburel/storybook-7-csf-3-children-arg/blob/main/src/components/List.stories.tsx) and [`src/components/ListItem.stories.tsx`](https://github.com/pierreburel/storybook-7-csf-3-children-arg/blob/main/src/components/ListItem.stories.tsx)) as it's throwing this error: `Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.`.

TypeScript error:
```
JSX element type 'Checked' does not have any construct or call signatures. ts(2604)
'Checked' cannot be used as a JSX component.
  Its type 'StoryAnnotations<ReactRenderer, ListItemProps>' is not a valid JSX element type. ts(2786)
```

This is working when ListItem story is written with CSF2 (see [`src/components/ListItemCSF2.stories.tsx`](https://github.com/pierreburel/storybook-7-csf-3-children-arg/blob/main/src/components/ListItemCSF2.stories.tsx)).

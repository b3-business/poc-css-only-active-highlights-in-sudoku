# poc-css-only-active-highlights-in-sudoku

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript-8hqgdt)

## For Reference

### CSS Empty-Space Conditionals Trick

Hack from: https://dev.to/siddharthshyniben/conditional-logic-with-css-the-css-custom-property-trick-44hb
and: https://lea.verou.me/2020/10/the-var-space-hack-to-toggle-multiple-values-with-one-custom-property/?

Default: `--isActive: inherit;`

On Class:

```
--isActive: ;
--highlight-Color: var(--isActive) rgba(0, 0, 255, 1);
background-color: var(--highlight-Color, var(--defaultColor));
```

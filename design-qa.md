# Design QA

## Scope

- Source concepts:
  - `public/references/deep-infrastructure.png` (`1003 × 1568`)
  - `public/references/cloud-editorial.png` (`913 × 1723`)
  - `public/references/engineering-delivery.png` (`946 × 1663`)
- Desktop implementation captures: `1440 × 1000`
  - `docs/qa/deep-infrastructure.jpg`
  - `docs/qa/cloud-editorial.jpg`
  - `docs/qa/engineering-delivery.jpg`
- Mobile implementation capture: `390 × 844`
  - `docs/qa/cloud-editorial-mobile.jpg`
- Tested states: three route first folds, design switcher, responsive navigation, product-row selection, project-type preselection, consultation form success state.

## Visual comparison

### Deep Infrastructure

- Preserves the dark blueprint grid, white capsule navigation, left-aligned value proposition, radial Foundation architecture and four proof points.
- Uses the official BinBot brand assets and real icon components instead of placeholder artwork.
- Desktop composition, hierarchy and color contrast closely match the selected concept while adding a persistent design switcher.

### Cloud Editorial

- Preserves the bright editorial layout, navy announcement bar, product-management window and floating deployment pipeline.
- The hero headline was reduced after the first QA pass so the intended three-line phrase remains intact at desktop and mobile sizes.
- Product rows provide a real selectable state; the reference's product screenshot is represented as a live UI composition.

### Engineering Delivery

- Preserves the dark engineering grid, centered statement, delivery blueprint and project-type selector.
- The delivery path is rebuilt as an interactive, responsive HTML composition with official branding and accessible text.
- The selector carries the chosen project type into the project-assessment dialog.

## Responsive and interaction checks

- Desktop (`1440 × 1000`): all three routes report `scrollWidth === clientWidth`.
- Mobile (`390 × 844`): all three routes report `scrollWidth === clientWidth`; all three responsive menus open and close successfully.
- Product UI: selecting “教育管理平台” updates `aria-selected` to `true`.
- Project assessment: choosing “私有化部署” opens the dialog with that type selected; completing the local-only demo form reaches “项目需求摘要已生成”.
- Console: no error or warning entries were reported across the tested routes.
- Reduced motion is supported through `prefers-reduced-motion`.

## Comparison history

1. Initial desktop pass: all concepts were recognizable and structurally faithful; Cloud Editorial had an isolated title character at `1440px`.
2. Desktop refinement: reduced the Cloud Editorial title scale to preserve its intended three-line grouping.
3. Mobile pass: confirmed no horizontal overflow; refined the mobile title and moved the vertical design switcher into a compact bottom control.
4. Final pass: desktop screenshots, mobile screenshot, route navigation, modal flow and console were rechecked.

final result: passed

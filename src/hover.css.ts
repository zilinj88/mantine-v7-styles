import { style } from '@vanilla-extract/css'

const mkHoverChildAppear = (delayInMs: number) => {
  const hover = style({})
  const appear = style({
    selectors: {
      [`${hover} &`]: {
        opacity: 0,
        transition: `opacity ${delayInMs}ms ease-in`,
      },
      [`${hover}:hover &`]: {
        opacity: 1,
        transition: `opacity ${delayInMs}ms ease-in`,
        transitionDelay: `${delayInMs}ms`,
      },
    },
  })

  return { hover, appear }
}

export const hover150 = mkHoverChildAppear(150)
export const CTA_WITH_BUTTONS_FRAGMENT = `
  ... on PageBuilderPageBuilderCtaWithButtonsLayout {
    ctaWithButtons {
      title
      content
      buttons {
        text
        url
        
      }
    }
  }
`;

export const NEW_BUTTON_FRAGMENT = `
... on PageBuilderPageBuilderComponentTwoLayout {
          componentTwo {
            title
          }
        }
`;

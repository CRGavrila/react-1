export default siteVariables => ({
  // Header
  // TODO: prod app uses 17.5px here, it should be 16px per the design guide!
  headerLineHeight: siteVariables.lineHeightSmall,
  headerFontSize: siteVariables.fontSizes.medium,

  // Header Media
  headerMediaFontSize: siteVariables.fontSizes.small,
  // TODO: prod app uses 17.5px here, it should be 16px per the design guide!
  headerMediaLineHeight: siteVariables.lineHeightSmall,

  // Content
  contentFontSize: siteVariables.fontSizes.small,
  contentLineHeight: siteVariables.lineHeightSmall,

  // Selectable
  selectableFocusHoverColor: siteVariables.colors.white,
  selectableFocusHoverBackgroundColor: siteVariables.brand08,
  selectedColor: siteVariables.colors.grey[900],
  selectedBackgroundColor: siteVariables.gray10,
  selectedFocusOutlineColor: siteVariables.colors.primary[500],
})

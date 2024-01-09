export default () => ({
  inputRoot: {
    height: '26px',
    borderRadius: '8px',
    color: '#646464',
    fontFamily: 'Nunito',
    fontWeight: '500',
    fontSize: 9,
    '& fieldset': {
      borderWidth: '1px !important',
      borderColor: '#003F74 !important',
    },
  },
  clearAllButtonRoot: {
    margin: 'auto',
  },
  customButton: {
    borderRadius: '9px',
    maxWidth: '30px',
    maxHeight: '30px',
    minWidth: '30px',
    minHeight: '30px',
    marginTop: '0px',
    fontSize: 9,
    textTransform: 'none',
    color: '#3d4241',
    marginLeft: '0px',
    border: '1px solid #60797B',
    '&:hover': {
      backgroundColor: '#60797B',
      color: 'white',
    },
  },
  floatRight: {
    margin: '17px 11px 14px 20px',
  },
  resetText: {
    marginTop: '0px',
    marginLeft: '8px',
    color: '#60797B',
    fontSize: 14,
  },
  resetTextDisabled: {
    marginTop: '0px',
    marginLeft: '8px',
    color: '#AEBDBE',
    fontSize: 14,
  },
  cases: {
    height: '5px',
  },
  Cases: {
    height: '5px',
    margin: '0px',
    backgroundColor: '#0d8461',
  },
  Samples: {
    height: '5px',
    margin: '0px',
    backgroundColor: '#10beff',
  },
  Files: {
    height: '5px',
    margin: '0px',
    backgroundColor: '#e636e4',
  },
  sectionSummaryText: {
    fontSize: '16px',
    flexShrink: '0',
    fontFamily: 'Poppins',
    fontWeight: 400,
    lineHeight: '24px',
    marginLeft: '5px',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
  },
  dropDownIconSubSection: {
    marginLeft: '0px',
    fill: '#000000',
  },
  customExpansionPanelSummaryRoot: {
    height: '42px',
    padding: '0',
    flexDirection: 'row-reverse',
    paddingLeft: 0,
    borderBottom: '1px solid #D2D2D2',
  },
  sortGroup: {
    padding: '10px',
  },
  sectionSummaryTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
    fontFamily: 'Poppins',
    fontSize: 18.5,
    fontWeight: 500,
    marginLeft: 3,
    color: '#000000',
    letterSpacing: '-0.02em',
  },
  CasesCheckbox: {
    color: '#10A075',
  },
  CasesCheckedIcon: {
    color: '#10A075',
  },
  checkboxRoot: {
    marginLeft: '5px',
    height: 12,
  },
  panelDetailText: {
    color: '#323232',
    fontFamily: 'Nunito',
    fontSize: '14px',
    fontWeight: '200',
  },
  panelSubjectText: {
    color: '#323232',
    fontFamily: 'Nunito',
    fontSize: '14px',
    marginRight: '0px',
  },
  activeFacetDemographics: {
    color: '#006A8F',
    fontWeight: 600,
  },
  activeFacetDiagnosis: {
    color: '#794900',
    fontWeight: 600,
  },
  activeFacetSurvival: {
    color: '#008566',
    fontWeight: 600,
  },
  activeFacetStudy: {
    color: '#6B2DA7',
    fontWeight: 600,
  },
  searchContainer: {
    paddingTop: '15px',
    margin: '0 2px',
    marginRight: 6,
  },
  findCaseButton: {
    // marginLeft: '105px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    height: 35,
    width: 37,
    border: '1px solid #435C60',
    cursor: 'pointer',
    borderRadius: 11,
    display: 'flex',
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  findCaseIcon: {
    width: 17,
    height: 17,
    fill: '#ff0000',
  },
  uploadButton: {
    boxSizing: 'border-box',
    fontWeight: '400',
    height: 32,
    width: '100%',
    // display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#10A075',
    color: '#fff',
    border: '1px solid #0D8461',
    borderRadius: 10,
    fontFamily: 'Lato',
    fontSize: 11,
    boxShadow: 'none',
    paddingLeft: 16,
    paddingRight: 12,
    display: 'none',
    '&:hover': {
      backgroundColor: '#10A075',
    },
  },
  iconSpan: {
    marginTop: '5.2px',
  },
  uploadIcon: {
    height: 19,
    width: 19,
  },
  customListPadding: {
    paddingTop: 8,
  },
  customDivider: {
    backgroundColor: '#B1B1B1',
    height: '2px',
    marginLeft: 0,
    marginRight: 0,
    // marginBottom: 6,
  },
  searchResultDetailText: {
    color: '#435C60',
    fontFamily: 'Nunito',
    fontSize: 11,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  paper: {
    border: '1.25px solid #003F74',
    backgroundColor: '#717171',
    color: '#fff',
    borderRadius: 10,
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: 500,
    boxShadow: '0 0 0 2px rgba(0, 63, 116, 0.36)',
    '& ::-webkit-scrollbar': {
      width: '0.6em',
      height: '1em',
    },
    '& ::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'none',
      borderRadius: '0px',
      backgroundColor: 'transparent',
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: '#000',
      borderRadius: '0px',
    },
  },
  listbox: {
    height: 223,
    paddingTop: '0px',
    '& li': {
      borderBottom: '1px solid #fff',
      '&:nth-last-child(1)': {
        borderBottom: 'none'
      }
    },
    '& :hover': {
      color: 'white',
      backgroundColor: '#003F74;'
    }
  },
});
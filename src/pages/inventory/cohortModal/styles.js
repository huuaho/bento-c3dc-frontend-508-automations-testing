/**
 * Default Modal Styles
 */
export default (theme) => ({
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '36.875%',
    height: '60.764%',
    minWidth: '437.5px',
    minHeight: '472px',
    maxHeight: '875px',
    maxWidth: '944px',
    borderRadius: '10px',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    backgroundColor: theme.palette.background.paper,
  },
  modalTitle: {
    fontFamily: 'Poppins',
    borderBottom: '1px solid #BDBFC2',
    fontSize: 20,
    color: '#000000',
    padding: '16px 34px 13px 30px',
    margin: '0px',
    lineHeight: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '400',
  },
  closeRoot: {
    height: 13,
    marginBottom: 2,
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '34px 51px 79px 32px',
    gap: '37px',
    width: '100%',
    height: '100%',
  },
});
